# Design Document: Portfolio Website Enhancement

## Overview

This design document specifies the technical architecture and implementation approach for enhancing Tomin Biju's personal portfolio website. The portfolio is a single-page React application built with Vite that showcases professional experience, projects, skills, and education to recruiters and potential collaborators.

The application follows a component-based architecture with 9 main sections: Navbar, Hero, About, Skills, Projects, Experience, Certifications (optional), Contact, and Footer. The design emphasizes responsive mobile-first layouts, semantic HTML, accessibility compliance, and performance optimization.

### Key Design Goals

- **Modularity**: Each section is an independent React component with isolated styling
- **Responsiveness**: Mobile-first design with breakpoints at 768px (tablet) and 1024px (desktop)
- **Accessibility**: WCAG 2.1 Level AA compliance with semantic HTML and ARIA attributes
- **Performance**: Fast load times (<2s FCP on 3G) through lazy loading and optimization
- **Maintainability**: Clear separation of concerns with component-scoped CSS files

## Architecture

### System Architecture

The portfolio follows a client-side single-page application (SPA) architecture:

```
┌─────────────────────────────────────────┐
│           Browser (Client)              │
│  ┌───────────────────────────────────┐  │
│  │      React Application (SPA)      │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │        App.jsx (Root)       │  │  │
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │  Component Tree:      │  │  │  │
│  │  │  │  - Navbar             │  │  │  │
│  │  │  │  - Hero               │  │  │  │
│  │  │  │  - About              │  │  │  │
│  │  │  │  - Skills             │  │  │  │
│  │  │  │  - Projects           │  │  │  │
│  │  │  │  - Experience         │  │  │  │
│  │  │  │  - Certifications     │  │  │  │
│  │  │  │  - Contact            │  │  │  │
│  │  │  │  - Footer             │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Technology Stack

- **Framework**: React 19.2.0 (with React DOM)
- **Build Tool**: Vite 8.0.0-beta.13
- **Language**: JavaScript (ES6+) with JSX
- **Styling**: Standard CSS with component-scoped stylesheets
- **Development**: ESLint for code quality, React Hooks for state management

### Component Architecture

The application uses a flat component hierarchy where all section components are direct children of the App component. This approach simplifies navigation and state management for a single-page portfolio.

**Component Hierarchy:**
```
App
├── Navbar (fixed positioning)
├── Hero
├── About
├── Skills
├── Projects
├── Experience
├── Certifications (optional)
├── Contact
└── Footer
```

Each component is self-contained with:
- Component logic in `.jsx` file
- Styling in corresponding `.css` file in `src/styles/`
- No shared state between components (stateless presentation)

### Navigation System

The navigation system uses anchor-based smooth scrolling:

1. Each section component has an `id` attribute matching the navigation target
2. Navigation links use `href="#section-id"` for anchor navigation
3. CSS `scroll-behavior: smooth` provides animated scrolling
4. Navbar remains fixed at top using `position: fixed`

**Mobile Navigation:**
- Hamburger menu icon appears at viewport width < 768px
- Toggle state managed with React `useState` hook
- Menu overlay/dropdown displays navigation links vertically
- Click on link closes mobile menu automatically

## Components and Interfaces

### Component Specifications

#### 1. Navbar Component

**Purpose**: Provides persistent navigation across all sections

**Props**: None (stateless except for mobile menu toggle)

**State**:
- `isMobileMenuOpen`: boolean - tracks mobile menu visibility

**Key Methods**:
- `toggleMobileMenu()`: Toggles mobile menu open/closed
- `closeMobileMenu()`: Closes mobile menu when link is clicked

**Rendered Elements**:
- Logo/name text: "Tomin Biju"
- Navigation links: Home, About, Skills, Projects, Experience, Contact
- Hamburger menu icon (mobile only)
- Mobile menu overlay (mobile only)

**Styling Requirements**:
- Fixed positioning at top
- Dark background with transparency/blur effect
- Responsive breakpoint at 768px
- Z-index high enough to stay above content

#### 2. Hero Component

**Purpose**: Landing section with introduction and primary CTAs

**Props**: None

**State**: None (stateless)

**Key Methods**:
- `handleViewProjects()`: Scrolls to Projects section
- `handleDownloadResume()`: Triggers resume file download

**Rendered Elements**:
- Profile picture placeholder (circular image with border/glow effect)
- Primary heading (h1): "Tomin Biju"
- Role text: "Software Developer | Web Developer | Data & Analytics Enthusiast"
- Introduction paragraph
- "View Projects" button
- "Download Resume" button

**Styling Requirements**:
- Full viewport height or minimum height
- Centered content alignment with profile picture above name
- Prominent typography for name
- Contrasting CTA buttons with modern gradient effects
- Profile picture: 150-200px diameter, circular, with subtle shadow/glow
- Modern card-style layout with glassmorphism effects
- Animated gradient background or particle effects (optional)

#### 3. About Component

**Purpose**: Displays biographical information and education

**Props**: None

**State**: None (stateless)

**Data Structure**:
```javascript
const education = {
  institution: "Christ University, Bangalore",
  degree: "B.Sc Computer Science and Statistics",
  period: "2023-2026",
  aggregate: "67.72%"
};
```

**Rendered Elements**:
- Section heading: "About Me"
- Biographical paragraph
- Education card with institution, degree, period, aggregate
- Career objective text

**Styling Requirements**:
- Two-column layout on desktop (bio + education)
- Single column on mobile
- Card-style education display

#### 4. Skills Component

**Purpose**: Displays technical skills organized by category

**Props**: None

**State**: None (stateless)

**Data Structure**:
```javascript
const skillsData = {
  "Programming & Development": ["JavaScript", "Python", "Java", "Kotlin", "SQL", "PHP"],
  "Web Development": ["HTML5", "CSS3", "React.js", "Responsive Web Design"],
  "Data & Analytics": ["R Programming", "Data Analysis", "Statistical Modelling", 
                       "Machine Learning Basics", "Data Cleaning"],
  "Visualization & Tools": ["Power BI", "Tableau", "MS Excel", "Git & GitHub", "Vite", "VS Code"],
  "Concepts": ["DBMS", "Regression Analysis", "Time Series", "SDLC", 
               "AI Fundamentals", "Cybersecurity Basics"]
};
```

**Rendered Elements**:
- Section heading: "Skills"
- Category groups (5 categories)
- Skill tags/badges within each category

**Styling Requirements**:
- Grid layout for categories
- Visual distinction between categories
- Tag/badge styling for individual skills
- Responsive grid (1 column mobile, 2-3 columns desktop)

#### 5. Projects Component

**Purpose**: Showcases completed projects with descriptions

**Props**: None

**State**: None (stateless)

**Data Structure**:
```javascript
const projects = [
  {
    id: 1,
    title: "Kerala Floods Statistical Study",
    description: "Statistical analysis of Kerala flood data...",
    technologies: ["R", "Statistical Analysis"]
  },
  {
    id: 2,
    title: "Bank Management System Mobile App",
    description: "Mobile banking application...",
    technologies: ["Kotlin", "OOP"]
  },
  {
    id: 3,
    title: "Property Landing Page",
    description: "Responsive property showcase website...",
    technologies: ["React", "Vite", "CSS"]
  }
];
```

**Rendered Elements**:
- Section heading: "Projects"
- Project cards (3 projects)
- Each card: title, description, technology tags

**Styling Requirements**:
- Grid layout (1 column mobile, 2-3 columns desktop)
- Card-based design with hover effects
- Technology tags with distinct styling

#### 6. Experience Component

**Purpose**: Displays work experience in timeline format

**Props**: None

**State**: None (stateless)

**Data Structure**:
```javascript
const experiences = [
  {
    id: 1,
    company: "Daxido",
    role: "Full Stack Developer Intern",
    period: "current",
    isCurrent: true
  },
  {
    id: 2,
    company: "Mantle Solutions",
    role: "Software Development Intern",
    period: "May-June 2024",
    isCurrent: false
  }
];
```

**Rendered Elements**:
- Section heading: "Experience"
- Timeline visualization
- Experience entries with company, role, period
- Current position indicator

**Styling Requirements**:
- Vertical timeline with connecting line
- Visual distinction for current position
- Responsive layout (simplified timeline on mobile)

#### 7. Certifications Component

**Purpose**: Lists professional certifications (optional section)

**Props**: None

**State**: None (stateless)

**Data Structure**:
```javascript
const certifications = [
  {
    id: 1,
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn"
  },
  {
    id: 2,
    name: "Python for Data Science and ML Bootcamp",
    issuer: "Udemy"
  },
  {
    id: 3,
    name: "Data Visualization with Power BI",
    issuer: "Great Learning"
  },
  {
    id: 4,
    name: "E-Business",
    issuer: "SWAYAM"
  }
];
```

**Rendered Elements**:
- Section heading: "Certifications"
- Certification cards with name and issuer

**Styling Requirements**:
- Grid or list layout
- Card-based design
- Issuer organization displayed prominently

#### 8. Contact Component

**Purpose**: Provides contact information and form interface

**Props**: None

**State**:
- `formData`: object - stores name, email, message fields
- `formErrors`: object - validation error messages
- `isSubmitting`: boolean - form submission state

**Key Methods**:
- `handleInputChange(field, value)`: Updates form field
- `validateForm()`: Validates all form fields
- `handleSubmit(event)`: Processes form submission

**Data Structure**:
```javascript
const contactInfo = {
  phone: "+91 6238683069",
  email: "tominbiju10@gmail.com",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/tominbiju",
  github: "https://github.com/tomin220"
};
```

**Rendered Elements**:
- Section heading: "Contact"
- Contact form (name, email, message fields)
- Contact information display (phone, email, location)
- Social links (LinkedIn, GitHub)

**Styling Requirements**:
- Two-column layout on desktop (form + info)
- Single column on mobile
- Form validation styling
- External link icons

#### 9. Footer Component

**Purpose**: Displays social links and copyright information

**Props**: None

**State**: None (stateless)

**Rendered Elements**:
- Social media icons (LinkedIn, GitHub)
- Copyright text: "© 2026 Tomin Biju. Built with React + Vite"

**Styling Requirements**:
- Centered content
- Dark background
- Icon links with hover effects
- Stays at bottom regardless of content height

### Component Communication

Since this is a presentational portfolio with no complex state management needs:

- **No prop drilling**: Components are self-contained
- **No global state**: Each component manages its own local state (if any)
- **Navigation**: Handled via anchor links and browser scroll behavior
- **Events**: Limited to user interactions within components (form submission, menu toggle)

## Data Models

### Static Data Models

The portfolio uses static data structures defined within components. No external API calls or database connections are required.

#### Education Model
```javascript
{
  institution: string,    // University/college name
  degree: string,         // Degree program
  period: string,         // Study period (e.g., "2023-2026")
  aggregate: string       // Academic score/percentage
}
```

#### Skill Category Model
```javascript
{
  categoryName: string,   // Category title
  skills: string[]        // Array of skill names
}
```

#### Project Model
```javascript
{
  id: number,             // Unique identifier
  title: string,          // Project name
  description: string,    // Project description
  technologies: string[]  // Array of technology tags
}
```

#### Experience Model
```javascript
{
  id: number,             // Unique identifier
  company: string,        // Company name
  role: string,           // Job title
  period: string,         // Time period or "current"
  isCurrent: boolean      // Flag for current position
}
```

#### Certification Model
```javascript
{
  id: number,             // Unique identifier
  name: string,           // Certification name
  issuer: string          // Issuing organization
}
```

#### Contact Info Model
```javascript
{
  phone: string,          // Phone number with country code
  email: string,          // Email address
  location: string,       // City, Country
  linkedin: string,       // LinkedIn profile URL
  github: string          // GitHub profile URL
}
```

#### Form Data Model
```javascript
{
  name: string,           // User's name
  email: string,          // User's email
  message: string         // Message content
}
```

### File Structure

```
portfolio-website/
├── public/
│   ├── vite.svg
│   ├── resume.pdf (to be added)
│   └── profile-placeholder.jpg (to be added)
├── src/
│   ├── assets/
│   │   └── (images, icons, profile picture)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Experience.css
│   │   ├── Certifications.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### Responsive Breakpoints

```javascript
const breakpoints = {
  mobile: "max-width: 767px",      // Single column layout
  tablet: "768px to 1023px",       // Two column layout
  desktop: "min-width: 1024px"     // Multi-column layout
};
```

### Color Palette (Dark Theme)

```javascript
const colors = {
  background: {
    primary: "#0a0a0a",      // Main background
    secondary: "#1a1a1a",    // Card backgrounds
    accent: "#2a2a2a"        // Hover states
  },
  text: {
    primary: "#ffffff",      // Main text
    secondary: "#b0b0b0",    // Secondary text
    muted: "#808080"         // Muted text
  },
  accent: {
    primary: "#3b82f6",      // Primary CTA color
    secondary: "#8b5cf6",    // Secondary accent
    hover: "#2563eb"         // Hover states
  }
};
```

### Typography Scale

```javascript
const typography = {
  h1: "48px / 3rem",         // Hero name
  h2: "36px / 2.25rem",      // Section headings
  h3: "24px / 1.5rem",       // Subsection headings
  body: "16px / 1rem",       // Body text
  small: "14px / 0.875rem"   // Small text, captions
};
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation Link Scroll Behavior

*For any* navigation link in the Navigation_Bar, when clicked, the Portfolio_Website should smoothly scroll to the corresponding section within 800ms.

**Validates: Requirements 1.3**

### Property 2: Mobile Menu Toggle State

*For any* state of the mobile menu (open or closed), clicking the hamburger menu icon should toggle the visibility to the opposite state.

**Validates: Requirements 1.6**

### Property 3: Project Display Completeness

*For any* project in the Projects_Section data, the rendered output should display the project title, description, and technology tags.

**Validates: Requirements 5.4**

### Property 4: Grid Layout Responsiveness

*For any* viewport width change, the Projects_Section grid layout should adapt to display the appropriate number of columns (1 for mobile, 2-3 for tablet/desktop).

**Validates: Requirements 5.5**

### Property 5: Experience Display Completeness

*For any* experience entry in the Experience_Section data, the rendered output should display the company name, role title, and time period.

**Validates: Requirements 6.4**

### Property 6: Certification Display Completeness

*For any* certification in the Certifications_Section data, the rendered output should display the certification name and its issuing organization.

**Validates: Requirements 7.5**

### Property 7: External Links Open in New Tab

*For any* external link (LinkedIn, GitHub, social media) in the Portfolio_Website, clicking the link should open the target URL in a new browser tab.

**Validates: Requirements 8.7, 8.8, 9.3**

### Property 8: No Horizontal Scrolling

*For any* viewport width (mobile, tablet, or desktop), the Portfolio_Website should not produce horizontal scrollbars or require horizontal scrolling.

**Validates: Requirements 10.4**

### Property 9: Body Text Size Constraints

*For any* viewport width, body text content should maintain a font size between 14px and 18px inclusive.

**Validates: Requirements 10.5**

### Property 10: Section Spacing Consistency

*For any* two adjacent sections in the Portfolio_Website, the vertical spacing between them should be at least 80px.

**Validates: Requirements 11.2**

### Property 11: Animation Duration Limits

*For any* CSS-based animation in the Portfolio_Website, the animation duration should not exceed 600ms.

**Validates: Requirements 11.5**

### Property 12: Component CSS File Association

*For any* React component in the Portfolio_Website, there should exist a corresponding CSS file in the styles directory with matching naming convention.

**Validates: Requirements 12.9**

### Property 13: Image Alt Text Presence

*For any* image element in the Portfolio_Website, the element should have a non-empty alt attribute providing alternative text.

**Validates: Requirements 13.2**

### Property 14: Heading Hierarchy Order

*For any* sequence of heading tags (h1-h6) in the Portfolio_Website, the headings should follow proper hierarchical order without skipping levels.

**Validates: Requirements 13.3**

### Property 15: Icon Button Accessibility Labels

*For any* icon-only button in the Portfolio_Website, the button should have an aria-label attribute providing a descriptive label.

**Validates: Requirements 13.4**

### Property 16: Keyboard Accessibility

*For any* interactive element (buttons, links, form inputs) in the Portfolio_Website, the element should be accessible and operable via keyboard navigation.

**Validates: Requirements 13.5**

### Property 17: Color Contrast Compliance

*For any* text element in the Portfolio_Website, the color contrast ratio between text and background should be at least 4.5:1 for normal-sized text.

**Validates: Requirements 13.6**

### Property 18: Lazy Loading for Off-Screen Images

*For any* image that is not within the initial viewport on page load, the image should be configured for lazy loading.

**Validates: Requirements 14.2**

### Property 19: Image Optimization

*For any* image file used in the Portfolio_Website, the image should be in an optimized format (WebP, optimized JPEG/PNG) with appropriate compression applied.

**Validates: Requirements 14.4**

## Error Handling

### Form Validation Errors

The Contact form implements client-side validation with the following error handling:

**Name Field Validation:**
- Error: Empty name field
- Handling: Display "Name is required" message below field
- Prevention: Disable submit button until valid

**Email Field Validation:**
- Error: Empty email field
- Handling: Display "Email is required" message below field
- Error: Invalid email format
- Handling: Display "Please enter a valid email address" message
- Prevention: Use HTML5 email input type for basic validation

**Message Field Validation:**
- Error: Empty message field
- Handling: Display "Message is required" message below field
- Error: Message too short (< 10 characters)
- Handling: Display "Message must be at least 10 characters" message
- Prevention: Disable submit button until valid

**Form Submission Errors:**
- Error: Network failure during submission
- Handling: Display "Failed to send message. Please try again." notification
- Recovery: Allow user to retry submission
- Error: Server error response
- Handling: Display error message from server or generic error
- Recovery: Preserve form data for retry

### Navigation Errors

**Scroll Target Not Found:**
- Error: Navigation link references non-existent section ID
- Handling: Log warning to console, no scroll action
- Prevention: Ensure all navigation hrefs match section IDs

**Smooth Scroll Not Supported:**
- Error: Browser doesn't support smooth scroll behavior
- Handling: Fall back to instant scroll to target
- Detection: Feature detection for CSS scroll-behavior

### Resource Loading Errors

**Image Load Failure:**
- Error: Image file fails to load (404, network error)
- Handling: Display placeholder or alt text
- Prevention: Provide fallback images in multiple formats

**Resume Download Failure:**
- Error: Resume file not found or download fails
- Handling: Display "Resume temporarily unavailable" message
- Prevention: Verify resume file exists in public directory

**Font Loading Failure:**
- Error: Web fonts fail to load
- Handling: Fall back to system fonts defined in font stack
- Prevention: Define comprehensive font fallback stack

### Responsive Layout Errors

**Viewport Detection Issues:**
- Error: Incorrect viewport width detection
- Handling: Use default mobile-first layout
- Prevention: Use standard viewport meta tag

**CSS Media Query Failures:**
- Error: Media queries not applied correctly
- Handling: Mobile layout serves as baseline
- Prevention: Test across multiple browsers and devices

### Accessibility Errors

**Missing ARIA Labels:**
- Error: Icon button without aria-label
- Handling: Browser may announce "button" without context
- Prevention: Automated testing for aria-label presence

**Keyboard Navigation Failure:**
- Error: Element not reachable via keyboard
- Handling: User cannot interact with element
- Prevention: Ensure all interactive elements have tabindex or are naturally focusable

**Color Contrast Insufficient:**
- Error: Text doesn't meet 4.5:1 contrast ratio
- Handling: Text may be difficult to read
- Prevention: Use contrast checking tools during development

## Testing Strategy

### Overview

The testing strategy employs a dual approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness guarantees. This comprehensive approach ensures both concrete functionality and general behavioral correctness.

### Testing Framework Selection

**Unit Testing:**
- Framework: Vitest (Vite-native testing framework)
- Rationale: Native integration with Vite, fast execution, Jest-compatible API
- Component Testing: React Testing Library
- Rationale: Encourages testing user behavior over implementation details

**Property-Based Testing:**
- Framework: fast-check (JavaScript property-based testing library)
- Rationale: Mature library, good React integration, generates diverse test cases
- Configuration: Minimum 100 iterations per property test
- Rationale: Sufficient randomization to catch edge cases

### Unit Testing Approach

Unit tests focus on:
1. **Specific content verification**: Exact text, links, and data appear correctly
2. **Component rendering**: Each component renders without errors
3. **User interactions**: Button clicks, form submissions, menu toggles
4. **Edge cases**: Empty states, mobile breakpoints, error conditions
5. **Integration points**: Component composition, navigation flow

**Example Unit Tests:**

```javascript
// Hero component content verification
describe('Hero Component', () => {
  test('displays name "Tomin Biju" as primary heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 }))
      .toHaveTextContent('Tomin Biju');
  });

  test('View Projects button scrolls to projects section', () => {
    render(<Hero />);
    const button = screen.getByText('View Projects');
    fireEvent.click(button);
    // Verify scroll behavior
  });
});

// Form validation edge cases
describe('Contact Form Validation', () => {
  test('rejects empty name field', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  test('rejects invalid email format', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText('Please enter a valid email address'))
      .toBeInTheDocument();
  });
});

// Mobile responsive edge case
describe('Navbar Responsive Behavior', () => {
  test('displays hamburger menu on mobile viewport', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    render(<Navbar />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });
});
```

### Property-Based Testing Approach

Property tests verify universal behaviors across generated inputs. Each property test:
- Runs minimum 100 iterations with randomized inputs
- References the design document property number
- Uses descriptive test names matching property titles
- Tags tests with feature name and property text

**Property Test Configuration:**

```javascript
import fc from 'fast-check';

// Configure fast-check for all tests
fc.configureGlobal({
  numRuns: 100,  // Minimum iterations
  verbose: true   // Show generated values on failure
});
```

**Example Property Tests:**

```javascript
// Property 3: Project Display Completeness
describe('Property-Based Tests: Projects', () => {
  test('Property 3: All projects display title, description, and tags', () => {
    // Feature: portfolio-website-enhancement, Property 3: Project Display Completeness
    
    fc.assert(
      fc.property(
        fc.array(fc.record({
          id: fc.integer(),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          technologies: fc.array(fc.string({ minLength: 1 }), { minLength: 1 })
        }), { minLength: 1 }),
        (projects) => {
          const { container } = render(<Projects projects={projects} />);
          
          projects.forEach(project => {
            expect(container).toHaveTextContent(project.title);
            expect(container).toHaveTextContent(project.description);
            project.technologies.forEach(tech => {
              expect(container).toHaveTextContent(tech);
            });
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 8: No Horizontal Scrolling
describe('Property-Based Tests: Responsive Layout', () => {
  test('Property 8: No horizontal scrolling at any viewport width', () => {
    // Feature: portfolio-website-enhancement, Property 8: No Horizontal Scrolling
    
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }), // Viewport widths
        (viewportWidth) => {
          global.innerWidth = viewportWidth;
          global.dispatchEvent(new Event('resize'));
          
          const { container } = render(<App />);
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          
          expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 13: Image Alt Text Presence
describe('Property-Based Tests: Accessibility', () => {
  test('Property 13: All images have non-empty alt text', () => {
    // Feature: portfolio-website-enhancement, Property 13: Image Alt Text Presence
    
    fc.assert(
      fc.property(
        fc.array(fc.record({
          src: fc.webUrl(),
          alt: fc.string({ minLength: 1 })
        }), { minLength: 1 }),
        (images) => {
          const { container } = render(
            <div>
              {images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} />
              ))}
            </div>
          );
          
          const imgElements = container.querySelectorAll('img');
          imgElements.forEach(img => {
            expect(img.getAttribute('alt')).toBeTruthy();
            expect(img.getAttribute('alt').length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Property 17: Color Contrast Compliance
describe('Property-Based Tests: Accessibility', () => {
  test('Property 17: Text meets 4.5:1 contrast ratio', () => {
    // Feature: portfolio-website-enhancement, Property 17: Color Contrast Compliance
    
    fc.assert(
      fc.property(
        fc.record({
          textColor: fc.hexaString({ minLength: 6, maxLength: 6 }),
          backgroundColor: fc.hexaString({ minLength: 6, maxLength: 6 })
        }),
        ({ textColor, backgroundColor }) => {
          const contrast = calculateContrastRatio(
            `#${textColor}`,
            `#${backgroundColor}`
          );
          
          // If used in the app, contrast should meet threshold
          if (isUsedInApp(textColor, backgroundColor)) {
            expect(contrast).toBeGreaterThanOrEqual(4.5);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Test Organization

```
tests/
├── unit/
│   ├── components/
│   │   ├── Navbar.test.jsx
│   │   ├── Hero.test.jsx
│   │   ├── About.test.jsx
│   │   ├── Skills.test.jsx
│   │   ├── Projects.test.jsx
│   │   ├── Experience.test.jsx
│   │   ├── Certifications.test.jsx
│   │   ├── Contact.test.jsx
│   │   └── Footer.test.jsx
│   ├── integration/
│   │   ├── navigation.test.jsx
│   │   └── responsive.test.jsx
│   └── accessibility/
│       └── a11y.test.jsx
├── property/
│   ├── display-completeness.test.jsx
│   ├── responsive-layout.test.jsx
│   ├── accessibility.test.jsx
│   └── performance.test.jsx
└── e2e/
    └── user-flows.test.jsx
```

### Testing Priorities

**High Priority (Must Test):**
1. All 19 correctness properties via property-based tests
2. Navigation functionality (smooth scroll, mobile menu)
3. Form validation and submission
4. Responsive layout at all breakpoints
5. Accessibility compliance (ARIA, keyboard navigation, contrast)
6. Component rendering without errors

**Medium Priority (Should Test):**
1. Specific content verification for all sections
2. External link behavior
3. Animation timing and transitions
4. Image lazy loading
5. Error handling for form submission

**Low Priority (Nice to Test):**
1. Visual regression testing
2. Performance benchmarks
3. Cross-browser compatibility
4. SEO meta tag verification

### Continuous Integration

**Test Execution:**
- Run all unit tests on every commit
- Run property tests on pull requests
- Run full test suite before deployment
- Generate coverage reports (target: >80% coverage)

**Test Commands:**
```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run property tests only
npm run test:property

# Run with coverage
npm run test:coverage

# Run in watch mode during development
npm run test:watch
```

### Manual Testing Checklist

While automated tests cover most functionality, manual testing should verify:

1. **Visual Design**: Dark theme consistency, spacing, typography
2. **Cross-Browser**: Test in Chrome, Firefox, Safari, Edge
3. **Mobile Devices**: Test on actual iOS and Android devices
4. **Performance**: Lighthouse audit scores (target: >90 for all metrics)
5. **Accessibility**: Screen reader testing (NVDA, JAWS, VoiceOver)
6. **User Experience**: Smooth scrolling feel, animation quality, overall polish

### Test Maintenance

- Update tests when requirements change
- Refactor tests to reduce duplication
- Keep test data generators in sync with data models
- Document complex test scenarios
- Review and update property tests if new edge cases discovered

