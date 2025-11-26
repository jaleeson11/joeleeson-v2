# PRD: Portfolio Website Redesign

## Introduction/Overview

This PRD outlines the complete redesign and rebuild of joeleeson.com as a modern, performance-focused portfolio website. The current site feels outdated and no longer reflects the skill level and professionalism expected of a senior web developer. The new site will adopt a clean, minimal aesthetic inspired by brittanychiang.com and hirok.io, while maintaining all existing content and showcasing web development work in a professional, scannable format.

**Technology Stack:** Astro, CSS Modules, SCSS

The redesign will leverage the similar structure that already exists in the current portfolio, modernizing the visual design to follow Brittany Chiang's approach: a content-first layout with generous whitespace, strong typography, subtle interactions, and a monochromatic/limited color palette that lets the work speak for itself.

---

## Goals

1. **Modernize the visual design** to reflect current web standards and professional skill level, using brittanychiang.com as primary design inspiration
2. **Achieve Lighthouse scores of 95+** across all metrics (Performance, Accessibility, Best Practices, SEO)
3. **Create a scannable, intuitive experience** that allows visitors to quickly understand capabilities and view featured work
4. **Establish a maintainable codebase** using Astro's static site generation with hardcoded/static content
5. **Ensure responsive, mobile-first design** that works beautifully across all devices
6. **Migrate all existing content** from the current site while improving presentation

---

## User Stories

### Primary Audience: Potential Employers/Recruiters

- **As a recruiter**, I want to quickly understand Joe's technical skills and experience so that I can determine if he's a good fit for open positions
- **As a hiring manager**, I want to see concrete examples of Joe's work with clear descriptions so that I can assess the quality and scope of his projects
- **As a technical interviewer**, I want to see the technologies Joe has worked with so that I can prepare relevant technical questions

### Secondary Audience: Other Developers/Peers

- **As a fellow developer**, I want to see Joe's project implementations so that I can learn from his approach and potentially collaborate
- **As a peer**, I want to connect with Joe on professional networks so that I can stay in touch and share opportunities

### General Visitors

- **As a first-time visitor**, I want to immediately understand who Joe is and what he does so that I can decide if I want to learn more
- **As a mobile user**, I want the site to load quickly and display properly on my device so that I can browse comfortably

---

## Functional Requirements

### 1. Site Structure & Navigation

1.1. The site must be a single-page layout with distinct sections for Hero, About, Featured Projects, and Contact

1.2. Navigation (if included) must provide smooth anchor links to each section

1.3. All sections must be accessible via keyboard navigation

1.4. The site must be fully responsive from 320px mobile to 4K displays

### 2. Hero/Introduction Section

2.1. Must display full name prominently with high contrast typography

2.2. Must include professional title/role

2.3. Must include a 1-2 sentence tagline describing focus area or value proposition

2.4. Section must be visually distinct and immediately establish professional tone

### 3. About Section

3.1. Must contain 2-3 paragraphs covering: what you do, your approach, and optional personal touch

3.2. Content must be written in a professional but personable tone

3.3. Text must be readable with appropriate line-height (1.5-1.7) and max-width (65-75 characters)

3.4. Must maintain consistent vertical rhythm with other sections

### 4. Featured Projects Section

4.1. Must display 5-8 projects in a visual card-based layout

4.2. Each project card must include:

- Project title (clear hierarchy)
- 2-3 sentence description focusing on impact and outcomes
- Technology stack tags (visible, scannable format)
- Screenshot or visual element
- Link to live project or repository (if applicable)

  4.3. Must migrate all existing content from current joeleeson.com, including:

- CutMy Product Visualiser
- All other current portfolio projects

  4.4. Project cards must have subtle hover states with smooth transitions (200-300ms)

  4.5. Layout must adapt responsively (grid on desktop, stacked on mobile)

  4.6. Images must be optimized and use appropriate formats (WebP with fallbacks)

  4.7. Technology tags must be consistent in styling and easily scannable

### 5. Contact Section

5.1. Must include social links for at minimum: GitHub, LinkedIn, Email

5.2. Links must be clearly visible and accessible

5.3. Must include a simple footer with copyright or relevant information

5.4. Social links must open in new tabs where appropriate

5.5. Email link must use `mailto:` protocol

### 6. Design & Visual Requirements

6.1. Must implement strong typography hierarchy with clear heading levels (h1-h3)

6.2. Must use system fonts OR modern web font (Inter/Geist)

6.3. Must maintain consistent spacing system (e.g., 4px, 8px, 16px, 24px, 32px, 48px, 64px)

6.4. Must use high contrast ratios meeting WCAG AA standards minimum

6.5. Color palette must be monochromatic or limited (2-3 colors maximum)

6.6. Must implement subtle animations and interactions:

- Smooth hover states on interactive elements
- Transition durations of 200-300ms
- Subtle scroll-based animations (fade-in or slide-in on view)
- No excessive or distracting motion

  6.7. Must provide generous whitespace between sections and elements

  6.8. Must maintain vertical rhythm throughout the page

### 7. Performance Requirements

7.1. Must achieve Lighthouse Performance score of 95+ on mobile and desktop

7.2. Must achieve Lighthouse Accessibility score of 95+

7.3. Must achieve Lighthouse Best Practices score of 95+

7.4. Must achieve Lighthouse SEO score of 95+

7.5. Initial page load must be under 2 seconds on 3G connection

7.6. Images must be lazy-loaded where appropriate

7.7. CSS and JavaScript must be minified in production

7.8. Must implement proper caching headers

### 8. Accessibility Requirements

8.1. All interactive elements must be keyboard accessible

8.2. Must include proper semantic HTML5 elements

8.3. All images must have descriptive alt text

8.4. Must maintain proper heading hierarchy (no skipped levels)

8.5. Focus states must be visible on all interactive elements

8.6. Color must not be the only means of conveying information

8.7. Text must be resizable up to 200% without loss of functionality

### 9. SEO Requirements

9.1. Must include proper meta tags (title, description)

9.2. Must implement Open Graph tags for social sharing

9.3. Must include structured data (JSON-LD) for Person schema

9.4. Must generate sitemap.xml

9.5. Must include robots.txt

9.6. Each section must have descriptive, semantic markup

### 10. Technical Implementation

10.1. Must be built using Astro static site generator

10.2. Styling must use CSS Modules with SCSS

10.3. Content must be hardcoded/static in components (no CMS or external data sources)

10.4. Must generate fully static HTML with minimal JavaScript

10.5. Must include a package.json with all dependencies clearly listed

10.6. Must include clear README with setup instructions

10.7. Code must follow consistent formatting (recommend Prettier)

10.8. Must be deployable to modern hosting (Vercel, Netlify, etc.)

---

## Non-Goals (Out of Scope)

1. **Dark mode toggle** - Light theme only for v1, can be added in future iteration
2. **CMS integration** - Content will be hardcoded for simplicity and performance
3. **Blog or articles section** - Focus is on portfolio showcase only
4. **Complex animations** - Keeping interactions subtle and performance-focused
5. **Multi-language support** - English only for initial launch
6. **Advanced filtering/search** - With 5-8 projects, manual browsing is sufficient
7. **Contact form** - Direct links to email and social profiles only
8. **Analytics dashboard** - Basic analytics can be added separately if needed
9. **User accounts or authentication** - Public portfolio site only
10. **Backend or database** - Fully static site generation

---

## Design Considerations

### Design Inspiration

**Primary inspiration: brittanychiang.com**

- Clean, minimal aesthetic with strong typography
- Content-first approach with excellent readability
- Subtle hover effects and transitions
- Limited color palette with strategic use of accent colors
- Professional but approachable tone
- Generous whitespace and clear visual hierarchy

**Secondary inspiration: hirok.io**

- Minimal, content-first approach with generous whitespace
- Clean scannable layout

**Note:** The current joeleeson.com portfolio already follows a similar structure, so this redesign focuses on modernizing the visual treatment while maintaining the familiar layout approach.

### Typography

- Use modern, readable font (system font stack OR Inter/Geist, similar to Brittany Chiang's approach)
- Strong hierarchy: clear distinction between h1, h2, h3, and body text
- Body text: 16-18px with 1.5-1.7 line-height
- Max-width for text blocks: 65-75 characters for optimal readability
- Consider using slightly larger font sizes for better readability (following modern trends)

### Color Palette

- Monochromatic or limited palette (2-3 colors) inspired by brittanychiang.com
- High contrast for text (black/near-black on white/off-white or vice versa)
- Single accent color for links, interactive elements, and strategic emphasis
- Let the project visuals and screenshots provide color variety
- Consider using subtle background color variations to distinguish sections

### Spacing & Layout

- Consistent spacing scale (4, 8, 16, 24, 32, 48, 64px)
- Generous whitespace between sections (64-96px on desktop)
- Maintain vertical rhythm throughout
- Use CSS Grid for project cards, Flexbox for smaller components
- Follow brittanychiang.com's approach to content width and margins

### Interactions

- Hover states on all interactive elements (subtle color/transform changes)
- Smooth transitions (200-300ms, ease-in-out)
- Subtle scroll-based animations (intersection observer for fade-in effects)
- No autoplay, parallax, or aggressive animations
- Ensure all animations respect `prefers-reduced-motion`
- Consider subtle lift effect on project cards on hover (similar to Brittany Chiang)

### Responsive Breakpoints

- Mobile: 320px - 767px (stacked layout)
- Tablet: 768px - 1023px (2-column grid)
- Desktop: 1024px+ (3-column grid or appropriate layout)

---

## Technical Considerations

### Framework Choice: Astro

Astro is ideal for this project because:

- Generates fully static HTML with zero JavaScript by default
- Excellent performance out of the box
- Component-based architecture with CSS Modules support
- Built-in image optimization
- Simple deployment to modern hosting platforms

### File Structure (Recommended)

```
src/
├── components/
│   ├── Hero.astro
│   ├── About.astro
│   ├── Projects.astro
│   ├── ProjectCard.astro
│   └── Contact.astro
├── layouts/
│   └── Layout.astro
├── styles/
│   ├── global.scss
│   └── variables.scss
├── data/
│   └── projects.ts (static project data)
└── pages/
    └── index.astro
```

### Image Optimization

- Use Astro's `<Image>` component for automatic optimization
- Provide multiple sizes for responsive images
- Use WebP format with PNG/JPG fallbacks
- Lazy-load images below the fold

### Build & Deployment

- Static build output suitable for any hosting platform
- Recommended: Vercel or Netlify for automatic deployments
- Git-based workflow with main branch auto-deploy

### Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Last 2 versions of major browsers
- Mobile Safari and Chrome

---

## Success Metrics

### Performance Metrics

1. **Lighthouse scores of 95+** across all categories (Performance, Accessibility, Best Practices, SEO)
2. **First Contentful Paint (FCP)** under 1.5 seconds on 3G
3. **Time to Interactive (TTI)** under 2.5 seconds on 3G
4. **Cumulative Layout Shift (CLS)** under 0.1

### User Experience Metrics

5. **Mobile usability** - Site is fully functional and attractive on mobile devices
6. **Accessibility compliance** - Passes automated and manual accessibility tests
7. **Professional impression** - Design reflects senior-level web development skills

### Technical Metrics

8. **Build performance** - Site builds and deploys in under 2 minutes
9. **Bundle size** - Total page weight under 500KB (excluding images)
10. **Maintainability** - Easy to add/update projects without refactoring

### Business Metrics (Long-term)

11. **Increased engagement** - Track time on site and pages viewed (if analytics added)
12. **Professional opportunities** - Site successfully represents skills to employers/clients
13. **Positive feedback** - Receives compliments from peers on design and implementation

---

## Open Questions

1. **Content Writing:** Who will write the About section copy? Do you have existing text to migrate or need to write fresh?

2. **Professional Photography:** Do you need a professional headshot for the Hero section, or will it be text-only?

3. **Project Screenshots:** Are all project screenshots ready, or do they need to be created/updated?

4. **Domain & Hosting:** Is the domain already owned? Which hosting platform will be used (Vercel, Netlify, other)?

5. **Analytics:** Should Google Analytics, Plausible, or another analytics solution be integrated from launch?

6. **Favicon & Metadata:** Do you have brand assets (favicon, social sharing image) or do these need to be created?

7. **Project Filtering:** With 5-8 projects, do you want all visible at once, or should there be a "show more" interaction?

8. **External Links:** Should project links open in new tabs or same tab?

9. **Social Proof:** Should the site include testimonials, GitHub stats, or other credibility indicators?

10. **Resume/CV:** Should there be a downloadable PDF resume linked from the site?

---

## Next Steps

1. **Content Audit:** Review all existing joeleeson.com content and identify what needs to be migrated
2. **Content Preparation:** Write or update About section, project descriptions, and ensure all text is ready
3. **Asset Collection:** Gather all project screenshots, logos, and visual assets
4. **Environment Setup:** Initialize Astro project with required dependencies
5. **Implementation:** Begin building according to the functional requirements outlined above

---

**Document Version:** 1.0
**Date Created:** 2025-11-26
**Last Updated:** 2025-11-26
