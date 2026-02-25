# Portfolio Customization Guide

Follow these steps to personalize your portfolio with your information.

## Quick Start Checklist

### 1. Hero Section (`src/components/Hero.jsx`)
```jsx
// Line 8: Replace with your name
<span className="highlight">Your Name</span>

// Line 10: Update your role
<h2 className="hero-subtitle">Frontend / Full Stack Developer</h2>

// Line 11-14: Write your introduction
<p className="hero-description">
  Your personal introduction here...
</p>
```

### 2. About Section (`src/components/About.jsx`)
```jsx
// Lines 9-17: Update your bio
<p>Your first paragraph about yourself...</p>
<p>Your second paragraph about experience...</p>

// Lines 22-24: Update education
<h4>BSc Computer Science and Statistics</h4>
<p className="education-details">University Name • Expected Graduation: 2025</p>
<p>Relevant Coursework: ...</p>

// Lines 30-35: Update career objective
<p>Your career goals...</p>
```

### 3. Skills Section (`src/components/Skills.jsx`)
```jsx
// Lines 5-11: Modify your skills
const skillsData = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Your Skills'],
  Backend: ['Node.js', 'Express', 'Your Skills'],
  Database: ['SQL', 'MySQL', 'Your Skills'],
  Mobile: ['Kotlin', 'Your Skills'],
  Tools: ['Git', 'GitHub', 'Your Tools']
};
```

### 4. Projects Section (`src/components/Projects.jsx`)
```jsx
// Lines 5-29: Replace with your projects
const projects = [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-link.com'
  },
  // Add more projects...
];
```

### 5. Experience Section (`src/components/Experience.jsx`)
```jsx
// Lines 5-28: Update your internships
const experiences = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Month Year - Month Year',
    responsibilities: [
      'What you did...',
      'Your achievements...',
      'Technologies used...',
    ]
  },
  // Add more experiences...
];
```

### 6. Contact Section (`src/components/Contact.jsx`)
```jsx
// Line 28: Update email
<a href="mailto:your.email@example.com">

// Line 32: Update LinkedIn
<a href="https://linkedin.com/in/yourprofile">

// Line 36: Update GitHub
<a href="https://github.com/yourusername">
```

### 7. Footer (`src/components/Footer.jsx`)
```jsx
// Lines 10-18: Update social links
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>

// Line 21: Your name appears automatically in copyright
```

### 8. Page Title (`index.html`)
```html
<!-- Line 7: Update page title -->
<title>Your Actual Name - Portfolio</title>
```

### 9. Add Your Resume
- Place your resume PDF in the `public/` folder
- Name it `resume.pdf`
- The download button in Hero section will work automatically

## Color Customization

Want to change the color scheme? Update these CSS variables:

### Primary Blue Colors
- `#60a5fa` - Light blue (hover states, accents)
- `#3b82f6` - Medium blue (buttons, links)
- `#2563eb` - Dark blue (button hover)

### Background Colors
- `#0f172a` - Dark background
- `#1e293b` - Medium dark sections
- `#0a0f1a` - Footer background

### Text Colors
- `#f1f5f9` - Primary text (headings)
- `#cbd5e1` - Secondary text (paragraphs)
- `#94a3b8` - Tertiary text (subtle text)

Search and replace these hex codes across all CSS files to change the theme.

## Tips

1. **Keep it concise** - Recruiters spend 6-10 seconds on initial review
2. **Use action verbs** - Started, Built, Implemented, Developed
3. **Quantify achievements** - "Improved performance by 30%"
4. **Update regularly** - Add new projects and skills as you learn
5. **Test responsiveness** - Check on mobile, tablet, and desktop
6. **Optimize images** - If you add images, compress them first
7. **Proofread** - Check for typos and grammar errors

## Need Help?

- Check the main README.md for setup instructions
- All components are in `src/components/`
- All styles are in `src/styles/`
- The project uses functional React components with hooks
