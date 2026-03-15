terraform {
  required_version = ">= 1.5"

  # NOTE: Configure a remote backend for CI/CD (e.g. Terraform Cloud, S3, or Cloudflare R2).
  # Without one, state is local-only and the GitHub Actions workflow cannot manage infrastructure.

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}
