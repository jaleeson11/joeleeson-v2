# Task List: Portfolio Website Redesign

**Source PRD:** `0001-prd-portfolio-redesign.md`

---

## Relevant Files

### Core Application Files

- `package.json` - Project dependencies and scripts
- `astro.config.mjs` - Astro configuration for build, output, and integrations
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Code formatting configuration
- `README.md` - Project documentation and setup instructions

### Layout & Pages

- `src/pages/index.astro` - Main portfolio page (single-page layout)
- `src/layouts/Layout.astro` - Base layout with global HTML structure, meta tags

### Components

- `src/components/Hero.astro` - Hero/introduction section component
- `src/components/About.astro` - About section component
- `src/components/Projects.astro` - Featured projects section component
- `src/components/ProjectCard.astro` - Individual project card component
- `src/components/Contact.astro` - Contact section with social links
- `src/components/Navigation.astro` - Optional navigation component for section anchors

### Styles

- `src/styles/global.scss` - Global styles, resets, base typography
- `src/styles/variables.scss` - SCSS variables for colors, spacing, breakpoints, typography
- `src/components/Hero.module.scss` - Hero section styles
- `src/components/About.module.scss` - About section styles
- `src/components/Projects.module.scss` - Projects section styles
- `src/components/ProjectCard.module.scss` - Project card styles
- `src/components/Contact.module.scss` - Contact section styles

### Data & Content

- `src/data/projects.ts` - Static project data (titles, descriptions, tech stack, images, links)
- `src/data/content.ts` - Static content for About section and other text

### Assets

- `public/favicon.svg` - Site favicon
- `public/og-image.png` - Open Graph social sharing image
- `public/images/projects/` - Directory for project screenshots
- `public/robots.txt` - Robots file for search engines
- `public/sitemap.xml` - Sitemap (or generated via Astro integration)

### Notes

- This is a static site with no test files required initially
- All content is hardcoded/static as per PRD requirements
- CSS Modules are used for component-specific styles
- Images should be placed in `public/images/` or `src/assets/` depending on optimization needs

---

## Tasks

- [x] 1.0 Project Setup & Configuration
  - [x] 1.1 Initialize Astro project with `npm create astro@latest` using minimal template
  - [x] 1.2 Install and configure SCSS support (`npm install sass`)
  - [x] 1.3 Set up TypeScript configuration (tsconfig.json should be auto-generated)
  - [x] 1.4 Install and configure Prettier for code formatting
  - [x] 1.5 Configure astro.config.mjs for static site generation and image optimization
  - [x] 1.6 Create initial project structure: `src/components/`, `src/styles/`, `src/data/`, `src/layouts/`
  - [x] 1.7 Set up Git repository and create initial commit
  - [x] 1.8 Create README.md with project overview and setup instructions

- [ ] 2.0 Design System & Global Styles
  - [x] 2.1 Create `src/styles/variables.scss` with spacing scale (4, 8, 16, 24, 32, 48, 64px), breakpoints, and color palette
  - [x] 2.2 Define typography variables (font family, sizes, weights, line-heights) in variables.scss
  - [x] 2.3 Create `src/styles/global.scss` with CSS reset (or use modern-normalize)
  - [x] 2.4 Implement base typography styles (h1-h3, body text, links) in global.scss
  - [x] 2.5 Set up consistent spacing utilities and vertical rhythm in global.scss
  - [x] 2.6 Define color palette inspired by brittanychiang.com (monochromatic with accent color)
  - [x] 2.7 Implement smooth scroll behavior and focus-visible styles
  - [x] 2.8 Add `prefers-reduced-motion` media query support for animations

- [ ] 3.0 Core Layout & Component Structure
  - [ ] 3.1 Create `src/layouts/Layout.astro` with HTML structure, head tags, and global style imports
  - [ ] 3.2 Build `src/components/Hero.astro` with name, title, and tagline
  - [ ] 3.3 Create Hero.module.scss with typography hierarchy and spacing
  - [ ] 3.4 Build `src/components/About.astro` with placeholder content structure
  - [ ] 3.5 Create About.module.scss with readable text width and line-height
  - [ ] 3.6 Build `src/components/ProjectCard.astro` with props for title, description, tech stack, image, and link
  - [ ] 3.7 Create ProjectCard.module.scss with hover states and transitions (200-300ms)
  - [ ] 3.8 Build `src/components/Projects.astro` that maps over project data and renders ProjectCard components
  - [ ] 3.9 Create Projects.module.scss with responsive grid layout (3-col desktop, 2-col tablet, 1-col mobile)
  - [ ] 3.10 Build `src/components/Contact.astro` with social links (GitHub, LinkedIn, Email) and footer
  - [ ] 3.11 Create Contact.module.scss with link styling and spacing
  - [ ] 3.12 Assemble all components in `src/pages/index.astro` as single-page layout
  - [ ] 3.13 (Optional) Create `src/components/Navigation.astro` with smooth anchor links to sections

- [ ] 4.0 Content Migration & Data Preparation
  - [ ] 4.1 Audit existing joeleeson.com and document all projects to migrate
  - [ ] 4.2 Create `src/data/projects.ts` with TypeScript interface for project data structure
  - [ ] 4.3 Add CutMy Product Visualiser project data (title, description, tech stack, image path, link)
  - [ ] 4.4 Add remaining 4-7 projects from existing portfolio to projects.ts
  - [ ] 4.5 Collect and optimize all project screenshots (WebP format with PNG/JPG fallbacks)
  - [ ] 4.6 Save optimized images to `public/images/projects/` directory
  - [ ] 4.7 Create `src/data/content.ts` with About section text (2-3 paragraphs)
  - [ ] 4.8 Write Hero section tagline (1-2 sentences)
  - [ ] 4.9 Verify all links (project URLs, social profiles) are correct and working
  - [ ] 4.10 Update component imports to use real data from projects.ts and content.ts

- [ ] 5.0 Performance Optimization & SEO
  - [ ] 5.1 Install Astro image optimization integration (`@astrojs/image` or built-in `astro:assets`)
  - [ ] 5.2 Update ProjectCard component to use Astro's `<Image>` component with proper sizes and formats
  - [ ] 5.3 Implement lazy loading for project images below the fold
  - [ ] 5.4 Add meta tags to Layout.astro (title, description, viewport, charset)
  - [ ] 5.5 Implement Open Graph meta tags for social sharing (og:title, og:description, og:image, og:url)
  - [ ] 5.6 Add Twitter Card meta tags
  - [ ] 5.7 Create and add structured data (JSON-LD) for Person schema to Layout.astro
  - [ ] 5.8 Create `public/favicon.svg` (or .ico) and link in Layout.astro
  - [ ] 5.9 Create `public/og-image.png` for social sharing (1200x630px)
  - [ ] 5.10 Create `public/robots.txt` with appropriate directives
  - [ ] 5.11 Install and configure `@astrojs/sitemap` integration for automatic sitemap generation
  - [ ] 5.12 Add semantic HTML5 elements throughout components (header, main, section, article, footer)
  - [ ] 5.13 Ensure proper heading hierarchy (no skipped levels)

- [ ] 6.0 Testing, Accessibility & Deployment
  - [ ] 6.1 Test all interactive elements with keyboard navigation (Tab, Enter, Space)
  - [ ] 6.2 Verify all images have descriptive alt text
  - [ ] 6.3 Test color contrast ratios using browser DevTools or online tools (WCAG AA minimum)
  - [ ] 6.4 Ensure focus states are visible on all interactive elements
  - [ ] 6.5 Test responsive design at mobile (320px), tablet (768px), and desktop (1024px+) breakpoints
  - [ ] 6.6 Run Lighthouse audit in Chrome DevTools for Performance, Accessibility, Best Practices, SEO
  - [ ] 6.7 Address any Lighthouse issues to achieve 95+ scores across all categories
  - [ ] 6.8 Test site with screen reader (VoiceOver on Mac, NVDA on Windows) for basic navigation
  - [ ] 6.9 Verify smooth scroll and animations respect `prefers-reduced-motion`
  - [ ] 6.10 Test all external links open correctly (GitHub, LinkedIn, project links)
  - [ ] 6.11 Set up deployment on Vercel or Netlify (connect Git repository)
  - [ ] 6.12 Configure custom domain (joeleeson.com) if not already set up
  - [ ] 6.13 Enable automatic deployments from main branch
  - [ ] 6.14 Test production build locally with `npm run build && npm run preview`
  - [ ] 6.15 Deploy to production and verify all functionality works on live site
  - [ ] 6.16 Run final Lighthouse audit on live production URL
  - [ ] 6.17 (Optional) Set up analytics (Google Analytics, Plausible, or similar)

---

**Status:** Phase 2 Complete - All sub-tasks generated
