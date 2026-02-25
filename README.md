# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing skills, projects, experience, and contact information.

## Features

- **Modern Dark Theme UI** - Clean, professional design optimized for recruiters
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Navigation** - Fixed navbar with smooth scrolling to sections
- **8 Key Sections**:
  - Hero with call-to-action buttons
  - About with education and career objective
  - Skills organized by category
  - Projects showcase with links
  - Experience timeline
  - Contact form (UI only)
  - Footer with social links

## Tech Stack

- React 19
- Vite 8
- CSS Modules
- Functional Components with Hooks

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd personal_portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Replace "Your Name" with your actual name
   - Update the subtitle and description

2. **About Section** (`src/components/About.jsx`)
   - Update bio, education details, and career objective
   - Add your university name and graduation year

3. **Skills Section** (`src/components/Skills.jsx`)
   - Modify the `skillsData` object with your skills

4. **Projects Section** (`src/components/Projects.jsx`)
   - Update the `projects` array with your actual projects
   - Add GitHub and live demo links

5. **Experience Section** (`src/components/Experience.jsx`)
   - Update the `experiences` array with your internship details

6. **Contact Section** (`src/components/Contact.jsx`)
   - Replace placeholder email, LinkedIn, and GitHub links

7. **Footer** (`src/components/Footer.jsx`)
   - Update social media links

8. **Page Title** (`index.html`)
   - Change "Your Name - Portfolio" to your actual name

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf` for the download button to work.

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## Deployment

You can deploy this portfolio to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/          # CSS modules
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Experience.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx          # Main app component
├── App.css          # Global app styles
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## License

MIT License - feel free to use this template for your own portfolio!
