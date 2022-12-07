## Architecture

- **CSS**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Framework**: [Astro](https://astro.build)
- **Deployment**: [Netlify](https://netlify.com)
- **Headless CMS**: [Sanity](https://sanity.io)
- **Analytics**: [Plausible Analytics](https://plausible.io) - self-hosted

### Website hosting

This website is using SSG (static site generation) deployed to [Netlify](https://netlify.com).  
When content changes, [Sanity](https://sanity.io) triggers page rebuild via webhook.

### DNS - Cloudflare

DNS records are managed with [Cloudflare](https://www.cloudflare.com).  
It provides DDoS protection, CDN, caching, proxing with load balancing and much more...

### Analytics - self-hosting

[Plausible Analytics](https://plausible.io) is self-hosted on [Google Cloud Provider](https://cloud.google.com) - [Compute Engine](https://cloud.google.com/compute) e2-micro instance.

It has assigned subdomain - [analytics.adison.me](https://analytics.adison.me).  
[Cerbot](https://certbot.eff.org) is used for SSL certificate management.

## Development

Project files are located in `src` directory:

```bash
cd src
```

### Running locally

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run production locally

Start production build and generate sitemap:

```bash
pnpm build && pnpm postbuild
```

Serve page:

```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prettier

Run [Prettier](https://prettier.io) - code formatter:

```bash
pnpm prettier
```
