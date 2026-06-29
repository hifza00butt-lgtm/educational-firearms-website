# Firearms Through History - Educational Website

A comprehensive, modern educational website dedicated to the history and classification of firearms. This resource is designed for learning purposes only and provides historical context about how firearm technology has evolved over centuries.

## Overview

This website explores:
- **Historical Timeline** - From early hand cannons (1320s) to modern firearms (present day)
- **Firearm Categories** - 8 major classifications with detailed descriptions
- **Famous Historical Firearms** - 7 iconic weapons that shaped history
- **Technology Evolution** - Visual timeline of technological developments
- **Safety & Responsibility** - Educational focus on proper handling and regulations
- **Educational FAQ** - Beginner-friendly questions about firearm history

## Key Features

✨ **Modern Design**
- Dark theme with gold accents for professional appearance
- Responsive layout for desktop, tablet, and mobile devices
- Smooth scrolling and subtle animations throughout
- Clean, professional typography

🎯 **Interactive Components**
- Expandable category and firearm cards
- Sticky navigation header
- Interactive timeline with alternating layout
- Technology evolution visual bars
- Accordion-style FAQ section

📚 **Educational Content**
- Comprehensive historical information
- 11-point timeline of development
- 8 firearm categories with detailed contexts
- 7 famous firearms with specifications and facts
- 4 technology evolution categories
- 8 educational FAQ questions
- Safety principles and legal information

## Sections

### 1. Hero Section
An engaging introduction explaining the significance of firearms in history, military development, technology, law enforcement, and civilian activities.

### 2. History Timeline
An interactive vertical timeline spanning from the 1320s to the present, highlighting major milestones in firearm development:
- Hand cannons emerge (1320s-1330s)
- Flintlock mechanism (1609)
- Smokeless powder (1886)
- AK-47 development (1947)
- And more...

### 3. Categories of Firearms
Eight major firearm classifications with expandable cards:
- **Handguns** - Small firearms for personal defense
- **Revolvers** - Rotating cylinder designs
- **Pistols** - Semi-automatic handguns
- **Rifles** - Long firearms with rifled barrels
- **Shotguns** - Multiple pellet or single projectile
- **Submachine Guns** - Automatic close-quarters weapons
- **Machine Guns** - Crew-served automatic weapons
- **Historical Muskets** - Early firearms foundation

### 4. Famous Historical Firearms
Detailed cards for iconic weapons including:
- Colt Single Action Army (1873)
- AK-47 (1947)
- M16 (1964)
- Lee–Enfield (1895)
- M1 Garand (1936)
- Winchester Model 1873 (1873)
- Thompson Submachine Gun (1921)

Each card includes year, origin, designer, significance, and interesting facts.

### 5. Technology Evolution
Visual breakdown of how firearm technology evolved:
- **Ignition Systems** - Match-lock to centerfire
- **Operating Systems** - Muzzle-loading to automatic
- **Ammunition Evolution** - Black powder to intermediate cartridges
- **Materials & Manufacturing** - Hand-forged to modular design

### 6. Safety & Responsibility
Educational information covering:
- Six core safety principles
- Legal regulations by jurisdiction
- Education requirements
- Responsible ownership practices

### 7. FAQ Section
Eight educational questions addressing common inquiries about firearm history, classification, and evolution.

### 8. Footer
Comprehensive educational disclaimer and legal notice emphasizing the site's educational purpose.

## Technology Stack

- **Framework**: Next.js 16 (React 19.2)
- **Styling**: Tailwind CSS v4 with custom dark theme
- **Icons**: Lucide React
- **Font**: Geist (sans-serif), Geist Mono
- **Animations**: Custom CSS keyframes with Tailwind utilities

## Color Scheme

- **Primary (Gold)**: `oklch(0.72 0.15 61.4)` - All gold accents
- **Background**: `oklch(0.08 0 0)` - Deep charcoal/black
- **Foreground**: `oklch(0.95 0 0)` - Off-white text
- **Card**: `oklch(0.12 0 0)` - Slightly lighter background
- **Muted**: `oklch(0.25 0 0)` - Neutral gray
- **Border**: 15% opacity white - Subtle dividers

## Components

### Layout Components
- `Navigation.tsx` - Sticky header with smooth scroll navigation
- `Hero.tsx` - Hero section with CTA buttons
- `Footer.tsx` - Footer with disclaimer

### Section Components
- `HistoryTimeline.tsx` - Interactive timeline with 11 events
- `Categories.tsx` - Grid of firearm category cards
- `FamousFirearms.tsx` - Cards for 7 famous firearms
- `TechnologyEvolution.tsx` - Technology categories and timeline
- `SafetyResponsibility.tsx` - Safety principles and legal info
- `FAQ.tsx` - Expandable FAQ accordion

### Card Components
- `CategoryCard.tsx` - Expandable category cards with emojis
- `FirearmCard.tsx` - Firearm cards with facts and specs

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd firearms-history
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Building for Production

```bash
pnpm build
pnpm start
```

## Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (3-column grid + full features)

## Accessibility Features

- Semantic HTML with proper heading hierarchy
- ARIA labels and roles where needed
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliant
- Smooth scroll behavior

## Performance Optimizations

- CSS animations with GPU acceleration
- Lazy loading for images and components
- Optimized font loading
- Minimal JavaScript bundle
- Efficient state management with React hooks

## Educational Disclaimer

This website is designed for **historical and educational purposes only**. It documents:
- Evolution of firearm technology
- Historical significance and impact
- Classification and taxonomy
- Role in military and law enforcement history
- Impact on civilian sports and hunting

**This website does NOT provide:**
- Instructions for manufacturing or modifying firearms
- Technical performance specifications for weapons
- Purchasing recommendations
- Content promoting violence or weapon misuse
- Legal advice on firearm ownership

## Legal Notice

Users interested in firearm ownership or use must:
1. Consult applicable local, state, and federal laws
2. Seek training from certified professionals
3. Obtain necessary licenses and permits
4. Follow all safety regulations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is an educational resource. Suggestions for improvement are welcome:
1. Verify historical accuracy
2. Ensure content maintains educational focus
3. Keep disclaimers and warnings prominent

## License

This project is provided for educational purposes. Use with appropriate disclaimers.

## Support

For issues or questions about the educational content, please open an issue with detailed information.

---

**Last Updated**: 2026
**Version**: 1.0.0
**Status**: Educational Resource - For Learning Purposes Only
