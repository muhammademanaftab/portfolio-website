# Muhammad Eman Aftab - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a professional design with smooth animations, glass morphism effects, and comprehensive project showcase.

## 🚀 Live Demo

[Portfolio Website](https://your-deployment-url.com) *(Update with your actual deployment URL)*

## ✨ Features

- **Modern Design**: Professional glass morphism design with gradient backgrounds
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Custom CSS animations and transitions
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Showcase**: Detailed project cards with technology stacks
- **Skills Display**: Organized skill categories with visual icons
- **Contact Integration**: Direct links to email, phone, GitHub, and LinkedIn
- **Resume Download**: One-click resume download functionality
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Docker-ready

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/muhammademanaftab/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── resume.pdf          # Your resume file
│   └── vite.svg           # Vite logo
├── src/
│   ├── App.tsx            # Main application component
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles and Tailwind imports
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio-website .
```

### Run Docker Container

```bash
docker run -p 3000:80 portfolio-website
```

The application will be available at `http://localhost:3000`.

### Docker Compose (Optional)

```bash
docker-compose up -d
```

## 🔧 Configuration

### Customizing Content

1. **Personal Information**: Update the content in `src/App.tsx`
2. **Projects**: Modify the `projects` array with your own projects
3. **Skills**: Update the `skills` object with your technical skills
4. **Contact Information**: Update email, phone, and social media links
5. **Resume**: Replace `public/resume.pdf` with your actual resume

### Styling Customization

- **Colors**: Modify CSS variables in `src/index.css`
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize animation keyframes in `src/index.css`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

### 3. GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

### 4. Docker (Any Platform)
```bash
docker build -t portfolio-website .
docker run -p 80:80 portfolio-website
```

## 🎨 Design Features

- **Glass Morphism**: Modern glass effect cards
- **Gradient Backgrounds**: Dynamic gradient animations
- **Smooth Scrolling**: Enhanced user experience
- **Hover Effects**: Interactive element animations
- **Custom Scrollbar**: Styled scrollbar with gradients
- **Typography**: Professional font hierarchy with Inter and JetBrains Mono

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablets
- **Desktop Experience**: Enhanced desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🔍 SEO Optimized

- Meta tags for social sharing
- Semantic HTML structure
- Optimized images and assets
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muhammad Eman Aftab**
- Email: emanaftab2022@gmail.com
- Phone: +36 20 252 6795
- GitHub: [@muhammademanaftab](https://github.com/muhammademanaftab)
- LinkedIn: [muhammademanaftab](https://linkedin.com/in/muhammademanaftab)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ **Star this repository if you found it helpful!**
