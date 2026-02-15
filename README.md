<div align="center">
  <img src="https://thomas-dev-portfolio.vercel.app/complete-circle.png" alt="Thomas Dev Portfolio Logo" width="200"/>
  
  # Thomas Schrödinger Dev Portfolio
  
  <p align="center">
    A modern, multilingual developer portfolio showcasing projects, skills, and professional experience
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=flat&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)

  [Live Demo](https://thomas-dev-portfolio.vercel.app) • [Report Bug](https://github.com/Thomas465xd/Thomas-Dev-Portfolio/issues) • [Request Feature](https://github.com/Thomas465xd/Thomas-Dev-Portfolio/issues)

</div>

---

## 📖 About The Project

This is a professional developer portfolio built with cutting-edge web technologies. It features a clean, modern design with dark mode support, smooth animations, and full internationalization support for English, German, and Spanish languages.

The portfolio includes sections for projects, blog posts, photography, and a contact form, providing a comprehensive showcase of technical skills and creative work.

### ✨ Key Features

- 🌍 **Multi-language Support** - English, German, and Spanish (i18next)
- 🎨 **Dark/Light Theme** - Seamless theme switching with next-themes
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Next.js 15 and Turbopack
- 🎭 **Smooth Animations** - Interactive UI with Motion/Framer Motion
- 📧 **Contact Form** - Integrated email functionality with EmailJS
- 🖼️ **Image Optimization** - Cloudinary integration for efficient media handling
- 📊 **Analytics** - Vercel Analytics integration
- ♿ **Accessible** - Built with accessibility best practices
- 🔍 **SEO Optimized** - Comprehensive meta tags and Open Graph support

---

## 🛠️ Built With

### Core Technologies

- **[Next.js 15.5.9](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework

### Key Libraries & Tools

- **Internationalization**
  - i18next - Translation framework
  - react-i18next - React bindings for i18next
  - next-i18n-router - Route-based language switching

- **UI & Animation**
  - Motion (Framer Motion) - Animation library
  - Lucide React - Icon library
  - React Icons - Additional icon sets
  - @headlessui/react - Unstyled accessible components
  - Swiper - Touch slider

- **State Management & Data Fetching**
  - Zustand - Lightweight state management
  - TanStack React Query - Server state management
  - Axios - HTTP client

- **Forms & Validation**
  - React Hook Form - Form management
  - Zod - Schema validation
  - @emailjs/browser - Email service integration

- **Media & Assets**
  - Cloudinary - Cloud-based image management
  - next-cloudinary - Next.js integration for Cloudinary

- **Additional Features**
  - next-themes - Theme management
  - react-toastify - Toast notifications
  - sweetalert2 - Beautiful alerts
  - react-type-animation - Typing animation effect
  - react-floating-whatsapp - WhatsApp integration
  - @vercel/analytics - Analytics tracking

---

## 📁 Project Structure

```
Thomas-Dev-Portfolio/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── (home)/            # Main sections
│   │   │   ├── blog/          # Blog page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── photography/   # Photography gallery
│   │   │   ├── projects/      # Projects showcase
│   │   │   ├── layout.tsx     # Home layout
│   │   │   └── page.tsx       # Homepage
│   │   ├── api/               # API routes
│   │   ├── [...slug]/         # Catch-all route
│   │   ├── globals.css        # Global styles
│   │   ├── i18n.ts            # i18n initialization
│   │   └── layout.tsx         # Root layout
│   ├── favicon.ico
│   ├── manifest.ts            # PWA manifest
│   ├── opengraph-image.png    # OG image
│   ├── robots.ts              # Robots.txt generation
│   └── sitemap.ts             # Sitemap generation
├── components/
│   ├── home/                  # Homepage components
│   ├── providers/             # Context providers
│   ├── skeletons/             # Loading skeletons
│   └── ui/                    # Reusable UI components
├── src/
│   ├── contexts/              # React contexts
│   ├── hooks/                 # Custom React hooks
│   ├── locales/               # Translation files
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Utility functions
├── public/
│   ├── files/                 # Static files
│   └── website/               # Website assets
├── lib/                       # Library configurations
├── i18nConfig.ts              # i18n configuration
├── middleware.ts              # Next.js middleware for i18n
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── Dockerfile                 # Docker configuration
└── vercel.json                # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thomas465xd/Thomas-Dev-Portfolio.git
   cd Thomas-Dev-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add necessary environment variables for:
   - EmailJS configuration
   - Cloudinary credentials
   - Any other API keys required

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

---

## 🌐 Internationalization

The portfolio supports three languages:
- 🇬🇧 English (default)
- 🇩🇪 German (Deutsch)
- 🇪🇸 Spanish (Español)

Language routing is handled automatically via middleware, with translations stored in the `src/locales` directory.

---

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy!

The site is currently deployed at: [https://thomas-dev-portfolio.vercel.app](https://thomas-dev-portfolio.vercel.app)

### Docker Deployment

Alternatively, you can deploy using Docker:

```bash
docker build -t thomas-portfolio .
docker run -p 3000:3000 thomas-portfolio
```

---

## 📸 Screenshots

Visit the [live demo](https://thomas-dev-portfolio.vercel.app) to see the portfolio in action!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Thomas465xd/Thomas-Dev-Portfolio/issues).

---

## 📝 License

This project is proprietary and confidential. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit permission from the owner.

---

## 👤 Author

**Thomas Schrödinger**

- Portfolio: [thomas-dev-portfolio.vercel.app](https://thomas-dev-portfolio.vercel.app)
- GitHub: [@Thomas465xd](https://github.com/Thomas465xd)

---

## 🙏 Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Hosted on [Vercel](https://vercel.com)

---

<div align="center">
  Made with ❤️ and ☕ by Thomas Schrödinger
</div>
