# Nolan Figueroa's Portfolio

A modern, responsive portfolio website built with Next.js, featuring a clean and minimalist design.

## 🚀 Features

- 🎨 Modern, minimalist design with a dark theme
- 📱 Fully responsive layout that works on all devices
- 📚 Project Archive with a mosaic grid layout
- 📝 Blog section with recent posts
- 📱 Follow button linking to X.com profile
- 🏆 Floating banner with a call-to-action
- 🎨 Custom color scheme with purple accents
- 🔍 SEO-optimized content

## 🎨 Color Scheme

- Primary: Purple (`#9F2B68`)
- Accent: Light Pink (`#F19CBB`)
- Background: Dark (`#0A0118`)

## 🚀 Project Structure

```
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── FloatingBanner.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectGallery.tsx
│   │   └── TextScramble.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── projects.tsx
│   └── data/
│       └── blog.ts
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The development server will start at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Thanks to the Next.js team for their amazing framework
- Special thanks to Unsplash for providing the mock images used in the project gallery
