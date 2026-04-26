# Naufal Hakim Syahputra - Portfolio

A modern, high-performance portfolio website built with **Svelte 5** and **Tailwind CSS 4**. Designed for speed, accessibility, and clean aesthetics.

## 🚀 Features

- **Svelte 5 Runes**: Leveraging the latest reactivity system for optimal performance.
- **Tailwind CSS 4**: Modern, CSS-first styling with custom dark mode variants.
- **Storybook 8**: Comprehensive component documentation and playground.
- **Dynamic Data**: All content is driven by a single `resume.json` file for easy updates.
- **Responsive Design**: Mobile-first layout with smooth transitions and interactions.
- **Dark Mode**: Fully integrated theme support with system preference detection.
- **Cloudflare Ready**: Pre-configured with `@sveltejs/adapter-cloudflare` for edge deployment.
- **SEO Optimized**: Dynamic meta tags and Open Graph support for better visibility.

## 🛠 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide Svelte](https://lucide.dev/)
- **Components**: Atomic Design structure (Atoms, Molecules, Organisms)
- **Documentation**: [Storybook](https://storybook.js.org/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🏃 Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

### Storybook

Run the component library documentation:

```bash
npm run storybook
```

### Build & Preview

Prepare for production:

```bash
npm run build
npm run preview
```

## 📄 Data Management

The entire portfolio content is managed in `src/lib/data/resume.json`. To update your information, simply modify this file:

- **Personal Info**: Name, headline, social links.
- **Work Experience**: Company details, roles, and achievements.
- **Education**: Academic history and certifications.
- **Projects**: Portfolio items with images and technology tags.
- **Skills**: Categorized technical expertise.

## 🌐 Deployment

This project is configured for **Cloudflare Pages**.

1. Push your code to GitHub.
2. Connect your repository to Cloudflare Pages.
3. Use the following build settings:
   - **Framework Preset**: SvelteKit
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `.svelte-kit/cloudflare` (managed by the adapter)

---

Built with ❤️ by Naufal Hakim Syahputra
