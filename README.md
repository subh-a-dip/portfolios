# Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive (mobile-first)
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized
- 🚀 Ready for Vercel deployment

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Customize your content:**
   - Edit `lib/data.ts` with your personal information
   - Replace placeholder images in the `public` folder
   - Update metadata in `app/layout.tsx`

## Deployment on Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live at `your-project.vercel.app`

## Performance & SEO Tips

- **Images:** Add your project images to `public/` folder
- **Metadata:** Update SEO metadata in `app/layout.tsx`
- **Analytics:** Add Google Analytics or Vercel Analytics
- **Sitemap:** Generate sitemap for better SEO
- **Performance:** Images are optimized with Next.js Image component

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#3B82F6', // Change this to your brand color
  secondary: '#1E293B',
  accent: '#F1F5F9',
}
```

### Content
Update your information in `lib/data.ts`:
- Personal information
- Project details
- Skills and technologies
- About section content

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in components
- Custom animations: Framer Motion configurations

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## License

MIT License - feel free to use this template for your own portfolio!