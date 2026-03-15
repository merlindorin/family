# Dary Family

[![Deploy](https://github.com/merlindorin/family/actions/workflows/deploy.yml/badge.svg)](https://github.com/merlindorin/family/actions/workflows/deploy.yml)
[![Terraform](https://github.com/merlindorin/family/actions/workflows/terraform.yml/badge.svg)](https://github.com/merlindorin/family/actions/workflows/terraform.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/merlindorin/family)](https://github.com/merlindorin/family/commits/main)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdary.family)](https://dary.family)

*Where every chapter is written together*

The Dary family website — a simple, warm landing page built with Next.js.

Live at [dary.family](https://dary.family)

## Tech Stack

- [Next.js](https://nextjs.org/) (static export)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Cloudflare](https://www.cloudflare.com/) (infrastructure via OpenTofu)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Infrastructure

DNS and hosting infrastructure is managed with [OpenTofu](https://opentofu.org/) in the `terraform/` directory.

## License

This is a personal family project.
