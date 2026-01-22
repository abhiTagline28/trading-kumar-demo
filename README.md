# Kumar Singh Trading Education Platform

A modern, responsive Next.js website for Kumar Singh's world-class trading education and mentorship platform.

## Features

- **Modern Design**: Clean, professional UI built with Tailwind CSS
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based Architecture**: Modular, reusable components
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 16 for optimal performance

## Project Structure

```
kumar-demo/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx        # Navigation header with search
│   ├── Hero.tsx         # Hero section with tagline
│   ├── TradingCategories.tsx  # Trading category cards
│   ├── PopularPrograms.tsx    # Featured programs section
│   ├── MentorshipBanner.tsx   # Mentorship CTA banner
│   ├── CommunitySection.tsx    # Community trust section
│   ├── TestimonialsCarousel.tsx # Testimonials slider
│   └── Footer.tsx       # Footer with links
└── public/              # Static assets (images, etc.)
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Adding Images

The following images need to be added to the `public/` directory:

1. **`/public/kumar-singh.jpg`** - Hero section image (Kumar Singh's portrait)
2. **`/public/trading-chart.jpg`** - Popular programs section chart graphic
3. **`/public/trader-1.jpg`** through **`/public/trader-4.jpg`** - Testimonial carousel images

You can use placeholder images during development. The components include blur placeholders for better UX.

## Components

### Header
- Responsive navigation menu
- Dropdown for "All Courses"
- Search bar
- Sign In/Sign Up links
- Mobile hamburger menu

### Hero
- Main tagline
- "CHANGE THE WAY YOU TRADE" headline
- Kumar Singh portrait
- Global mentorship support contact info

### Trading Categories
- Interactive category cards:
  - STOCKS
  - FUTURE & OPTIONS
  - COMMODITY
  - CRYPTO
  - FOREX
  - ETFS AND MORE

### Popular Programs
- Featured program showcase
- Call-to-action buttons
- Trading chart graphic

### Mentorship Banner
- Dark blue banner with mentorship messaging
- Professional, impactful design

### Community Section
- Trust messaging for traders worldwide

### Testimonials Carousel
- Interactive slider with navigation arrows
- Dot indicators
- Trader testimonials with locations

### Footer
- Resources links
- Help section
- Company information
- Location indicator
- Copyright and legal links

## Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## License

Private - Kumar Singh Global Trading Academy (OPC) Pvt. Ltd.
