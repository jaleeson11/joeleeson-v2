# Joe Leeson - Portfolio Website

A modern, performance-focused portfolio website built with Astro, showcasing web development projects with a clean, minimal aesthetic.

## Project Overview

This is a complete redesign of joeleeson.com, featuring:

- **Modern design** inspired by brittanychiang.com and hirok.io
- **Performance-first** approach targeting Lighthouse scores of 95+
- **Fully static** site generation for optimal speed
- **Responsive design** that works beautifully on all devices
- **Accessible** following WCAG AA standards

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.1
- **Styling**: SCSS with CSS Modules
- **TypeScript**: Strict mode enabled
- **Code Quality**: Prettier for consistent formatting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jaleeson11/joeleeson.git

# Navigate to project directory
cd joeleeson

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Code Formatting

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── projects/          # Project screenshots
├── src/
│   ├── components/            # Astro components
│   ├── data/                  # Static content data
│   ├── layouts/               # Layout components
│   ├── pages/                 # Pages (routes)
│   │   └── index.astro        # Homepage
│   └── styles/                # Global SCSS files
├── tasks/                     # Project planning docs
├── astro.config.mjs           # Astro configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## Design System

- **Typography**: System fonts with fallbacks for optimal performance
- **Spacing**: Consistent 8px scale (4, 8, 16, 24, 32, 48, 64)
- **Colors**: Monochromatic palette with strategic accent color
- **Animations**: Subtle transitions (200-300ms) with reduced-motion support

## Development Workflow

This project follows a structured task-based workflow:

1. **PRD**: Product Requirements Document in `tasks/0001-prd-portfolio-redesign.md`
2. **Task List**: Detailed breakdown in `tasks/tasks-0001-prd-portfolio-redesign.md`
3. **Commits**: Conventional commit format (`feat:`, `fix:`, `chore:`, etc.)

## Deployment

The site is configured for static deployment to platforms like:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- Any static hosting service

Site URL: `https://joeleeson.com`

## License

© 2025 Joe Leeson. All rights reserved.

## Contact

- **GitHub**: [@jaleeson11](https://github.com/jaleeson11)
- **LinkedIn**: [Joe Leeson](https://linkedin.com/in/joeleeson)
- **Email**: contact@joeleeson.com
