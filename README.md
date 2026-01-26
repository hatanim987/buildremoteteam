# BuildRemoteTeam - Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Designed to help startup founders find and hire remote developers.

**Live Site:** [www.buildremoteteam.com](https://www.buildremoteteam.com)

## Features

- **SEO Optimized** - Dynamic sitemap, robots.txt, meta tags, and JSON-LD structured data
- **Fast & Performant** - Static generation, optimized fonts, and images
- **Mobile Responsive** - Works on all devices
- **Modern Stack** - Next.js 14 App Router, TypeScript, Tailwind CSS
- **Easy to Customize** - All content in `/data/` folder

## Pages

- **Home** - Hero, services preview, featured projects, testimonials
- **About** - Bio, skills, journey timeline
- **Services** - MVP development, mobile apps, backend, consultation
- **Projects** - Portfolio with individual project pages
- **Blog** - Articles for SEO and thought leadership
- **Contact** - Contact form and Calendly integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/buildremoteteam.git
cd buildremoteteam

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## Customization

### Update Your Information

1. **Site Config** - Edit `data/site.ts` for name, links, email
2. **Projects** - Edit `data/projects.ts` to add your real projects
3. **Services** - Edit `data/services.ts` to customize offerings
4. **Blog Posts** - Edit `data/posts.ts` to write your content
5. **Testimonials** - Edit `data/testimonials.ts` for client feedback

### Add Images

1. Add project screenshots to `public/images/projects/`
2. Add your profile photo to `public/images/`
3. Update image paths in the data files

### Setup Calendly

Update the Calendly URL in `components/CalendlyEmbed.tsx`:

```tsx
<CalendlyEmbed url="https://calendly.com/your-link" />
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy (automatic)
4. Add custom domain in Vercel dashboard

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| React Hook Form | Form handling |
| Zod | Form validation |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   ├── services/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   └── ...                 # Feature components
├── data/                   # Content data files
│   ├── site.ts
│   ├── projects.ts
│   ├── services.ts
│   ├── posts.ts
│   └── testimonials.ts
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## License

MIT

---

Built with Next.js and AI-assisted development
