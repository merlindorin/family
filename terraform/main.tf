locals {
  main_domain      = "dary.family"
  redirect_domains = ["dary.cloud", "dary.io"]
  pages_project    = "dary-family"
}

# ---------------------------------------------------------------------------
# Zones
# ---------------------------------------------------------------------------

data "cloudflare_zone" "main" {
  name       = local.main_domain
  account_id = var.cloudflare_account_id
}

data "cloudflare_zone" "redirect" {
  for_each   = toset(local.redirect_domains)
  name       = each.value
  account_id = var.cloudflare_account_id
}

# ---------------------------------------------------------------------------
# Cloudflare Pages
# ---------------------------------------------------------------------------

resource "cloudflare_pages_project" "site" {
  account_id        = var.cloudflare_account_id
  name              = local.pages_project
  production_branch = "main"
}

# ---------------------------------------------------------------------------
# Main domain – dary.family
# ---------------------------------------------------------------------------

resource "cloudflare_pages_domain" "apex" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.site.name
  domain       = local.main_domain
}

resource "cloudflare_pages_domain" "www" {
  account_id   = var.cloudflare_account_id
  project_name = cloudflare_pages_project.site.name
  domain       = "www.${local.main_domain}"
}

resource "cloudflare_record" "apex" {
  zone_id = data.cloudflare_zone.main.id
  name    = "@"
  type    = "CNAME"
  content = "${local.pages_project}.pages.dev"
  proxied = true
  comment = "Cloudflare Pages – ${local.main_domain}"
}

resource "cloudflare_record" "www" {
  zone_id = data.cloudflare_zone.main.id
  name    = "www"
  type    = "CNAME"
  content = "${local.pages_project}.pages.dev"
  proxied = true
  comment = "Cloudflare Pages – www.${local.main_domain}"
}

# ---------------------------------------------------------------------------
# Redirect domains – dary.cloud, dary.io → dary.family
# ---------------------------------------------------------------------------

resource "cloudflare_record" "redirect_apex" {
  for_each = toset(local.redirect_domains)
  zone_id  = data.cloudflare_zone.redirect[each.key].id
  name     = "@"
  type     = "A"
  content  = "192.0.2.1"
  proxied  = true
  comment  = "Redirect ${each.value} → ${local.main_domain}"
}

resource "cloudflare_record" "redirect_www" {
  for_each = toset(local.redirect_domains)
  zone_id  = data.cloudflare_zone.redirect[each.key].id
  name     = "www"
  type     = "A"
  content  = "192.0.2.1"
  proxied  = true
  comment  = "Redirect www.${each.value} → ${local.main_domain}"
}

resource "cloudflare_ruleset" "redirect" {
  for_each = toset(local.redirect_domains)
  zone_id  = data.cloudflare_zone.redirect[each.key].id
  name     = "Redirect ${each.value} to ${local.main_domain}"
  kind     = "zone"
  phase    = "http_request_dynamic_redirect"

  rules {
    action = "redirect"
    action_parameters {
      from_value {
        status_code           = 301
        preserve_query_string = true
        target_url {
          value = "https://${local.main_domain}"
        }
      }
    }
    expression  = "true"
    description = "301 redirect all traffic to ${local.main_domain}"
    enabled     = true
  }
}
