# Portfolio Website Plan: buildremoteteam.com

## Overview
Build a modern, SEO-optimized portfolio website for **Hasnain Ahmad Tanim** - Mobile App & Backend Developer specializing in helping **startup founders** build their products with AI-assisted development.

**Domain:** www.buildremoteteam.com
**Target Audience:** Startup Founders & Early-stage Companies
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
**Hosting:** Vercel (free tier)
**Style:** Minimal & Clean (light theme)

---

## Positioning & Messaging

**Tagline Ideas:**
- "Build Your Startup's Tech — Fast, Lean, and Scalable"
- "From Idea to MVP — Your Remote Technical Partner"
- "Helping Startup Founders Ship Products Faster"

**Value Proposition:**
- Startup-focused development (understand lean methodology, MVPs)
- Fast turnaround with AI-assisted development
- Cost-effective remote partnership vs hiring full-time
- Experience with startup constraints (budget, speed, pivots)

**Keywords for SEO:**
- "hire remote developer for startup"
- "MVP development services"
- "startup mobile app developer"
- "remote technical co-founder"
- "Android developer for startups"
- "Node.js developer for MVP"

---

## Project Structure

```
buildremoteteam/
├── app/
│   ├── layout.tsx          # Root layout with SEO meta
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services offered
│   ├── projects/page.tsx   # Project showcase
│   ├── projects/[slug]/page.tsx  # Individual project pages
│   ├── blog/page.tsx       # Blog listing
│   ├── blog/[slug]/page.tsx      # Blog post pages
│   ├── contact/page.tsx    # Contact form + Calendly
│   ├── sitemap.ts          # Dynamic sitemap for SEO
│   ├── robots.ts           # Robots.txt for SEO
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Home hero section
│   ├── ProjectCard.tsx     # Project display card
│   ├── ServiceCard.tsx     # Service display card
│   ├── BlogCard.tsx        # Blog post card
│   ├── ContactForm.tsx     # Contact form component
│   ├── CalendlyEmbed.tsx   # Calendly widget
│   └── TechStack.tsx       # Tech stack icons
├── data/
│   ├── projects.ts         # Project data
│   ├── services.ts         # Services data
│   ├── posts.ts            # Blog posts
│   └── site.ts             # Site configuration
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Static images
```

---

## Customization Guide

### Update Your Information
1. Edit `data/site.ts` - Update name, links, email
2. Edit `data/projects.ts` - Add your real projects
3. Edit `data/services.ts` - Customize your services
4. Edit `data/posts.ts` - Write your own blog posts
5. Edit `data/testimonials.ts` - Add real testimonials

### Add Images
1. Add project screenshots to `public/images/projects/`
2. Add your profile photo to `public/images/`
3. Update image references in the data files

### Setup Calendly
1. Get your Calendly link
2. Update the URL in `components/CalendlyEmbed.tsx`

### Setup Contact Form Email
1. Sign up for [Resend](https://resend.com) (free tier: 100 emails/day)
2. Create an API route to handle form submissions
3. Connect to your email

---

## SEO Checklist

- [x] Dynamic metadata for each page
- [x] Open Graph tags for social sharing
- [x] Twitter cards
- [x] JSON-LD structured data (Person, WebSite)
- [x] Dynamic sitemap.xml
- [x] robots.txt
- [x] Mobile-responsive design
- [x] Semantic HTML structure
- [ ] Add real images with alt text
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console

---

## Deployment

### Deploy to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/buildremoteteam.git
git push -u origin main
```

2. Connect to Vercel:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Deploy (automatic)

3. Add Custom Domain:
- In Vercel dashboard, go to Settings > Domains
- Add `buildremoteteam.com`
- Update DNS records as instructed

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.
