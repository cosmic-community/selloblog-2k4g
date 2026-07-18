# SelloBlog

![App Preview](https://imgix.cosmicjs.com/47391310-82aa-11f1-b83b-2552c3f550ca-autopilot-photo-1526772662000-3f88f10405ff-1784380327607.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive creative portfolio blog built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). SelloBlog showcases posts, authors, and categories with a sleek editorial design.

## Features

- 📝 **Dynamic Blog Posts** — Full post pages with featured images, rich content, tags, author, and category
- 👤 **Author Profiles** — Dedicated pages showing author bio, avatar, and their published posts
- 🏷️ **Category Pages** — Browse posts grouped by category
- 🎨 **Beautiful Editorial Design** — Modern typography, generous whitespace, and smooth interactions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Server Components** — Fast, SEO-friendly server-side data fetching
- 🖼️ **Optimized Images** — imgix-powered responsive image delivery

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a5b7b6ef3ae734acd7cf00d&clone_repository=6a5b7c4cf3ae734acd7cf048)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "SelloBlog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) — App Router, Server Components
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — Headless CMS
- [@cosmicjs/sdk](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing `authors`, `categories`, and `posts` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up environment variables (these are provided automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all posts with connected author and category
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .depth(1)
```

## Cosmic CMS Integration

This app leverages three object types from your Cosmic bucket:

- **Posts** (`posts`) — `title`, `content`, `featured_image`, `tags`, `author` (connected object), `category` (connected object)
- **Authors** (`authors`) — `name`, `bio`, `avatar`, `email`
- **Categories** (`categories`) — `name`, `description`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo into [Vercel](https://vercel.com)
3. Add the `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repo into [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add environment variables in the site settings
5. Deploy!

<!-- README_END -->