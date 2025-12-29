# Joe Leeson

A minimal, performance-focused developer portfolio built with Astro and Sass.

**Live site:** [joeleeson.com](https://joeleeson.com)

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** Sass with CSS Modules
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) with Lucide and Simple Icons
- **Fonts:** IBM Plex Sans via Fontsource
- **Deployment:** Vercel

## Getting Started

```bash
# Clone the repository
git clone https://github.com/jaleeson11/joeleeson.git
cd joeleeson

# Install dependencies
npm install

# Start development server
npm run dev
```

The site runs at `http://localhost:4321`

## Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run format`  | Format code with Prettier |

## Styling Architecture

The project uses a combination of CSS custom properties and Sass:

- **CSS custom properties** for runtime theming (colours, spacing, typography)
- **Sass partials** for reusable mixins and shared styles
- **CSS Modules** for component-scoped styles

## License

MIT - feel free to use this as a starting point for your own portfolio.

## Author

**Joe Leeson** - [GitHub](https://github.com/jaleeson11) · [LinkedIn](https://linkedin.com/in/joeleeson)
