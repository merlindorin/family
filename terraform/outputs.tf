output "pages_url" {
  description = "Cloudflare Pages default URL"
  value       = "https://${cloudflare_pages_project.site.name}.pages.dev"
}

output "site_url" {
  description = "Production URL"
  value       = "https://${local.main_domain}"
}
