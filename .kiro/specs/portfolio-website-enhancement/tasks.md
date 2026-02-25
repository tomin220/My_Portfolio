# Implementation Plan: Portfolio Website Enhancement

## Overview

This implementation plan breaks down the portfolio website enhancement into discrete, sequential coding tasks. The approach follows a component-by-component implementation strategy, building from core infrastructure through individual sections to final integration and optimization. Each task builds incrementally, ensuring the application remains functional at every step.

The implementation uses React 19.2.0 with Vite, JavaScript (ES6+) with JSX, and component-scoped CSS files. Testing tasks are marked as optional to allow for faster MVP delivery while maintaining the option for comprehensive test coverage.

## Tasks

- [x] 1. Set up project structure and global styles
  - Verify React + Vite project structure is in place
  - Create global CSS variables for dark theme color palette, typography scale, and spacing system
  - Set up base styles in `src/index.css` (CSS reset, smooth scroll behavior, dark background)
  - Configure responsive breakpoints (mobile: <768px, tablet: 768-1023px, desktop: ≥1024px)
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.6_

- [ ] 2. Implement Navbar component with responsive navigation
  - [x] 2.1 Create Navbar component structure and desktop layout
    - Create `src/components/Navbar.jsx` with logo/name and navigation links (Home, About, Skills, Projects, Experience, Contact)
    - Implement fixed positioning at top with dark background
    - Add smooth scroll anchor links to corresponding section IDs
    - Create `src/styles/Navbar.css` with desktop-first styling
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 12.1, 12.9_
  
  - [ ] 2.2 Add mobile menu functionality
    - Implement hamburger menu icon with toggle state using React useState hook
    - Create mobile menu overlay/dropdown with vertical navigation links
    - Add click handlers to close menu when navigation link is clicked
    - Style mobile menu for viewports <768px
    - _Requirements: 1.5, 1.6_
  
  - [ ] 2.3 Write property test for navigation scroll behavior
    - **Property 1: Navigation Link Scroll Behavior**
    - **Validates: Requirements 1.3**
  
  - [ ] 2.4 Write property test for mobile menu toggle
    - **Property 2: Mobile Menu Toggle State**
    - **Validates: Requirements 1.6**

- [ ] 3. Implement Hero section with CTAs
  - [ ] 3.1 Create Hero component structure
    - Create `src/components/Hero.jsx` with profile picture placeholder (circular, 150-200px diameter)
    - Add primary heading "Tomin Biju" below profile picture
    - Add role text "Software Developer | Web Developer | Data & Analytics Enthusiast"
    - Add introduction paragraph text
    - Add "View Projects" and "Download Resume" CTA buttons with modern gradient effects
    - Create `src/styles/Hero.css` with full viewport height, centered content, prominent typography
    - Style profile picture with circular border, subtle shadow/glow effect, and hover animation
    - Add modern glassmorphism card effects and animated gradient background (optional)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 12.2, 12.9_
  
  - [ ] 3.2 Implement CTA button functionality
    - Add click handler for "View Projects" button to scroll to Projects section
    - Add click handler for "Download Resume" button to trigger resume file download from `/public/resume.pdf`
    - Style CTA buttons with hover effects and contrasting colors
    - _Requirements: 2.6, 2.7_
  
  - [ ] 3.3 Write unit tests for Hero component
    - Test primary heading displays "Tomin Biju"
    - Test CTA buttons trigger correct actions
    - _Requirements: 2.1, 2.6, 2.7_

- [ ] 4. Implement About section with education
  - [ ] 4.1 Create About component structure
    - Create `src/components/About.jsx` with section heading "About Me"
    - Add biographical paragraph about being a final-year student at Christ University
    - Create education data object with institution, degree, period, aggregate
    - Display education card with all education details
    - Add career objective text
    - Create `src/styles/About.css` with two-column layout (desktop) and single column (mobile)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 12.3, 12.9_
  
  - [ ] 4.2 Write unit tests for About component
    - Test education information displays correctly
    - Test responsive layout at different breakpoints
    - _Requirements: 3.2, 3.3, 3.4, 3.5_

- [ ] 5. Implement Skills section with categorization
  - [ ] 5.1 Create Skills component with category structure
    - Create `src/components/Skills.jsx` with section heading "Skills"
    - Define skillsData object with 5 categories: Programming & Development, Web Development, Data & Analytics, Visualization & Tools, Concepts
    - Populate each category with specified skills from requirements
    - Render category groups with skill tags/badges
    - Create `src/styles/Skills.css` with grid layout (1 column mobile, 2-3 columns desktop)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 12.4, 12.9_
  
  - [ ] 5.2 Write unit tests for Skills component
    - Test all 5 categories display correctly
    - Test all skills appear in correct categories
    - Test grid layout responsiveness
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 6. Implement Projects section with grid layout
  - [ ] 6.1 Create Projects component structure
    - Create `src/components/Projects.jsx` with section heading "Projects"
    - Define projects array with 3 projects: Kerala Floods Statistical Study, Bank Management System Mobile App, Property Landing Page
    - Each project object includes id, title, description, technologies array
    - Render project cards in grid layout with title, description, and technology tags
    - Create `src/styles/Projects.css` with responsive grid (1 column mobile, 2-3 columns desktop)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 12.5, 12.9_
  
  - [ ] 6.2 Write property test for project display completeness
    - **Property 3: Project Display Completeness**
    - **Validates: Requirements 5.4**
  
  - [ ] 6.3 Write property test for grid layout responsiveness
    - **Property 4: Grid Layout Responsiveness**
    - **Validates: Requirements 5.5**

- [ ] 7. Implement Experience section with timeline
  - [ ] 7.1 Create Experience component with timeline layout
    - Create `src/components/Experience.jsx` with section heading "Experience"
    - Define experiences array with 2 entries: Mantle Solutions (May-June 2024), Daxido (current)
    - Each experience object includes id, company, role, period, isCurrent flag
    - Render timeline visualization with vertical line connecting entries
    - Add visual distinction for current position (badge, color, or icon)
    - Create `src/styles/Experience.css` with timeline styling and responsive layout
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 12.6, 12.9_
  
  - [ ] 7.2 Write property test for experience display completeness
    - **Property 5: Experience Display Completeness**
    - **Validates: Requirements 6.4**

- [ ] 8. Implement Certifications section (optional)
  - [ ] 8.1 Create Certifications component
    - Create `src/components/Certifications.jsx` with section heading "Certifications"
    - Define certifications array with 4 entries: Career Essentials in Data Analysis, Python for Data Science and ML Bootcamp, Data Visualization with Power BI, E-Business
    - Each certification object includes id, name, issuer
    - Render certification cards in grid or list layout
    - Create `src/styles/Certifications.css` with card-based design
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ] 8.2 Write property test for certification display completeness
    - **Property 6: Certification Display Completeness**
    - **Validates: Requirements 7.5**

- [ ] 9. Implement Contact section with form and information
  - [ ] 9.1 Create Contact component structure
    - Create `src/components/Contact.jsx` with section heading "Contact"
    - Define contactInfo object with phone, email, location, LinkedIn URL, GitHub URL
    - Display contact information with icons
    - Add external link icons for LinkedIn and GitHub that open in new tab
    - Create `src/styles/Contact.css` with two-column layout (form + info on desktop), single column (mobile)
    - _Requirements: 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 12.7, 12.9_
  
  - [ ] 9.2 Implement contact form with validation
    - Add form with fields: name (text), email (email), message (textarea)
    - Implement React state for formData, formErrors, isSubmitting
    - Add handleInputChange function to update form fields
    - Implement validateForm function with validation rules: name required, email required and valid format, message required and min 10 characters
    - Add handleSubmit function with form validation and error display
    - Style form with validation error messages below fields
    - _Requirements: 8.1_
  
  - [ ] 9.3 Write property test for external links opening in new tab
    - **Property 7: External Links Open in New Tab**
    - **Validates: Requirements 8.7, 8.8**
  
  - [ ] 9.4 Write unit tests for form validation
    - Test empty name field shows error
    - Test invalid email format shows error
    - Test message too short shows error
    - Test valid form submission
    - _Requirements: 8.1_

- [ ] 10. Implement Footer component
  - [ ] 10.1 Create Footer component
    - Create `src/components/Footer.jsx` with social media icons for LinkedIn and GitHub
    - Add copyright text "© 2026 Tomin Biju. Built with React + Vite"
    - Implement external links that open in new tab
    - Create `src/styles/Footer.css` with centered content, dark background, icon hover effects
    - Ensure footer stays at bottom regardless of content height
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 12.8, 12.9_
  
  - [ ] 10.2 Write unit tests for Footer component
    - Test copyright text displays correctly
    - Test social links open in new tab
    - _Requirements: 9.2, 9.3_

- [ ] 11. Integrate all components in App.jsx
  - Import all components (Navbar, Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer)
  - Render components in correct order within App component
  - Add section IDs to each component wrapper for anchor navigation (e.g., id="about", id="skills")
  - Import all component CSS files
  - Test smooth scrolling between sections
  - Verify mobile menu closes when navigating
  - _Requirements: 1.3, 12.1-12.8_

- [ ] 12. Checkpoint - Verify core functionality
  - Test navigation between all sections
  - Test mobile menu toggle and navigation
  - Test CTA buttons (View Projects, Download Resume)
  - Test form validation
  - Test external links open in new tab
  - Ensure all tests pass, ask the user if questions arise

- [ ] 13. Implement responsive design refinements
  - [ ] 13.1 Add responsive breakpoint styles
    - Review all component CSS files for mobile (<768px), tablet (768-1023px), desktop (≥1024px) breakpoints
    - Ensure single-column layout on mobile for all sections
    - Ensure grid layouts adapt correctly (1 column mobile, 2-3 columns desktop)
    - Test layout adaptation speed (<300ms on viewport change)
    - _Requirements: 10.1, 10.2, 10.3, 10.6_
  
  - [ ] 13.2 Prevent horizontal scrolling and ensure text readability
    - Add CSS to prevent horizontal overflow on all viewport widths
    - Verify body text sizes remain between 14px-18px across all breakpoints
    - Test on actual mobile devices or browser dev tools
    - _Requirements: 10.4, 10.5_
  
  - [ ] 13.3 Write property test for no horizontal scrolling
    - **Property 8: No Horizontal Scrolling**
    - **Validates: Requirements 10.4**
  
  - [ ] 13.4 Write property test for body text size constraints
    - **Property 9: Body Text Size Constraints**
    - **Validates: Requirements 10.5**

- [ ] 14. Implement accessibility features
  - [ ] 14.1 Add semantic HTML and ARIA attributes
    - Ensure all components use semantic HTML5 elements (header, nav, main, section, footer)
    - Add alt text to all images (if any)
    - Verify heading hierarchy (h1 for Hero name, h2 for section headings, no skipped levels)
    - Add aria-label to hamburger menu icon and other icon-only buttons
    - _Requirements: 13.1, 13.2, 13.3, 13.4_
  
  - [ ] 14.2 Ensure keyboard accessibility and color contrast
    - Test all interactive elements (buttons, links, form inputs) are keyboard accessible
    - Verify tab order is logical
    - Check color contrast ratios meet 4.5:1 minimum for normal text
    - Add focus styles for keyboard navigation
    - _Requirements: 13.5, 13.6_
  
  - [ ] 14.3 Write property test for image alt text presence
    - **Property 13: Image Alt Text Presence**
    - **Validates: Requirements 13.2**
  
  - [ ] 14.4 Write property test for heading hierarchy order
    - **Property 14: Heading Hierarchy Order**
    - **Validates: Requirements 13.3**
  
  - [ ] 14.5 Write property test for icon button accessibility labels
    - **Property 15: Icon Button Accessibility Labels**
    - **Validates: Requirements 13.4**
  
  - [ ] 14.6 Write property test for keyboard accessibility
    - **Property 16: Keyboard Accessibility**
    - **Validates: Requirements 13.5**
  
  - [ ] 14.7 Write property test for color contrast compliance
    - **Property 17: Color Contrast Compliance**
    - **Validates: Requirements 13.6**

- [ ] 15. Implement performance optimizations
  - [ ] 15.1 Add lazy loading for images
    - Add loading="lazy" attribute to all images not in initial viewport
    - Optimize image formats (use WebP with fallbacks, compress images)
    - _Requirements: 14.2, 14.4_
  
  - [ ] 15.2 Configure production build optimizations
    - Verify Vite config minifies CSS and JavaScript in production builds
    - Ensure CSS is bundled into single file
    - Test production build with `npm run build`
    - Verify First Contentful Paint <2s on 3G (use Lighthouse or WebPageTest)
    - _Requirements: 14.1, 14.3, 14.5_
  
  - [ ] 15.3 Write property test for lazy loading
    - **Property 18: Lazy Loading for Off-Screen Images**
    - **Validates: Requirements 14.2**
  
  - [ ] 15.4 Write property test for image optimization
    - **Property 19: Image Optimization**
    - **Validates: Requirements 14.4**

- [ ] 16. Implement SEO optimizations
  - [ ] 16.1 Add meta tags and SEO elements
    - Update `index.html` with title tag "Tomin Biju - Software Developer Portfolio"
    - Add meta description (max 160 characters) summarizing portfolio content
    - Add meta keywords relevant to software development and data analytics
    - Verify single h1 tag per page (Hero section name)
    - Add Open Graph meta tags for social media sharing (og:title, og:description, og:image, og:url)
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_
  
  - [ ] 16.2 Create robots.txt file
    - Create `public/robots.txt` allowing search engine indexing
    - _Requirements: 15.6_

- [ ] 17. Add styling refinements and polish
  - [ ] 17.1 Refine visual consistency
    - Review all sections for consistent spacing (minimum 80px between sections)
    - Ensure maximum content width of 1200px on desktop with horizontal centering
    - Verify dark theme color palette consistency across all components
    - _Requirements: 11.2, 11.3, 11.4, 11.6_
  
  - [ ] 17.2 Add animations and transitions
    - Add CSS transitions for hover effects on buttons, links, cards
    - Ensure all animation durations ≤600ms
    - Add smooth transitions for mobile menu open/close
    - Test animation performance on mobile devices
    - _Requirements: 11.5_
  
  - [ ] 17.3 Write property test for section spacing consistency
    - **Property 10: Section Spacing Consistency**
    - **Validates: Requirements 11.2**
  
  - [ ] 17.4 Write property test for animation duration limits
    - **Property 11: Animation Duration Limits**
    - **Validates: Requirements 11.5**
  
  - [ ] 17.5 Write property test for component CSS file association
    - **Property 12: Component CSS File Association**
    - **Validates: Requirements 12.9**

- [ ] 18. Final checkpoint - Comprehensive testing
  - Run all unit tests and property tests
  - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
  - Test on actual mobile devices (iOS and Android)
  - Run Lighthouse audit (target: >90 for all metrics)
  - Test with screen reader (verify accessibility)
  - Verify all requirements are met
  - Ensure all tests pass, ask the user if questions arise

- [ ] 19. Prepare for deployment
  - Add resume.pdf file to `public/` directory
  - Add profile picture or placeholder image to `public/` or `src/assets/` directory
  - Create production build with `npm run build`
  - Test production build locally
  - Verify all assets load correctly (including profile picture)
  - Document any deployment-specific configuration needed
  - _Requirements: 2.7_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The implementation follows a component-by-component approach for clear progress tracking
- All components use JavaScript (ES6+) with JSX and React 19.2.0
- Styling uses standard CSS with component-scoped stylesheets
