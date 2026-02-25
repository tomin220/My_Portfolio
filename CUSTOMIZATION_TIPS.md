# Quick Customization Tips

## 🎨 Change the Color Theme

### Option 1: Change to Blue Theme
In `src/index.css`, update the gradient variables:

```css
--color-accent-gradient: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
--color-accent-gradient-2: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
--color-accent-gradient-3: linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%);
```

### Option 2: Change to Green Theme
```css
--color-accent-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
--color-accent-gradient-2: linear-gradient(135deg, #34d399 0%, #10b981 100%);
--color-accent-gradient-3: linear-gradient(135deg, #6ee7b7 0%, #34d399 100%);
```

### Option 3: Change to Orange/Red Theme
```css
--color-accent-gradient: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
--color-accent-gradient-2: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
--color-accent-gradient-3: linear-gradient(135deg, #fdba74 0%, #fb923c 100%);
```

## 🔧 Adjust Animation Speed

### Make Animations Faster
In `src/index.css`:
```css
--duration-fast: 200ms;    /* was 300ms */
--duration-normal: 400ms;  /* was 600ms */
```

### Make Animations Slower (More Dramatic)
```css
--duration-fast: 400ms;    /* was 300ms */
--duration-normal: 800ms;  /* was 600ms */
```

## 💫 Adjust Glassmorphism Intensity

### Stronger Blur Effect
In any component CSS file, change:
```css
backdrop-filter: blur(20px);  /* was blur(10px) */
```

### Lighter Blur Effect
```css
backdrop-filter: blur(5px);   /* was blur(10px) */
```

## 🎯 Modify Hover Effects

### Stronger Lift Effect
In component CSS files:
```css
transform: translateY(-15px) scale(1.05);  /* was -10px and 1.02 */
```

### Subtle Lift Effect
```css
transform: translateY(-5px) scale(1.01);   /* was -10px and 1.02 */
```

## 🌟 Adjust Glow Effects

### Stronger Glow
```css
box-shadow: 0 20px 80px rgba(102, 126, 234, 0.5);  /* increased spread and opacity */
```

### Subtle Glow
```css
box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15); /* decreased spread and opacity */
```

## 📝 Update Personal Information

### 1. Hero Section
Edit `src/components/Hero.jsx`:
- Change name in `<span className="highlight">`
- Update role text
- Modify description paragraph

### 2. About Section
Edit `src/components/About.jsx`:
- Update biographical text
- Change education details
- Modify career objective

### 3. Skills
Edit `src/components/Skills.jsx`:
- Add/remove skill categories
- Update skill lists

### 4. Projects
Edit `src/components/Projects.jsx`:
- Add new projects to the array
- Update project details
- Change GitHub links

### 5. Experience
Edit `src/components/Experience.jsx`:
- Add new experience entries
- Update company names and roles
- Modify responsibilities

### 6. Contact
Edit `src/components/Contact.jsx`:
- Update phone number
- Change email address
- Modify social links

## 🎨 Change Font

### Option 1: Use Google Fonts
1. Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update `src/index.css`:
```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Option 2: Use System Fonts
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

## 🔄 Disable Animations (Accessibility)

Add to `src/index.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📱 Adjust Mobile Breakpoints

In `src/index.css`, change:
```css
/* Current: Mobile < 768px */
@media (max-width: 767px) { ... }

/* Change to: Mobile < 640px */
@media (max-width: 639px) { ... }
```

## 🎭 Add More Gradient Variations

In component CSS files, try these gradients:

### Sunset
```css
background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
```

### Ocean
```css
background: linear-gradient(135deg, #667eea 0%, #00d4ff 100%);
```

### Forest
```css
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
```

### Candy
```css
background: linear-gradient(135deg, #ff6b9d 0%, #c06c84 100%);
```

## 🚀 Performance Tips

### Reduce Blur for Better Performance
```css
backdrop-filter: blur(5px);  /* instead of 10-20px */
```

### Simplify Animations on Mobile
```css
@media (max-width: 768px) {
  .card:hover {
    transform: translateY(-5px);  /* simpler than scale + translate */
  }
}
```

### Disable Background Animations on Mobile
```css
@media (max-width: 768px) {
  .hero::before {
    animation: none;
  }
}
```

## 🎯 Quick Color Reference

Replace these colors throughout the CSS files:

| Current | Blue | Green | Orange | Pink |
|---------|------|-------|--------|------|
| #667eea | #3b82f6 | #10b981 | #f97316 | #ec4899 |
| #764ba2 | #1e40af | #059669 | #dc2626 | #db2777 |
| #a78bfa | #60a5fa | #34d399 | #fb923c | #f472b6 |

## 📦 Add New Sections

1. Create component: `src/components/NewSection.jsx`
2. Create styles: `src/styles/NewSection.css`
3. Import in `src/App.jsx`
4. Add to component tree
5. Update navbar links

## 🔍 Debug Tips

### Check if Animations Work
Open browser DevTools → Performance tab → Record while interacting

### Check Glassmorphism Support
```javascript
if (CSS.supports('backdrop-filter', 'blur(10px)')) {
  console.log('Glassmorphism supported!');
}
```

### Check Gradient Support
All modern browsers support gradients, but test in target browsers.

## 💡 Pro Tips

1. **Consistency**: Keep gradient directions consistent (135deg)
2. **Timing**: Use the same timing function for related animations
3. **Colors**: Stick to 2-3 main gradient combinations
4. **Spacing**: Maintain consistent padding/margins
5. **Testing**: Test on real devices, not just browser DevTools

## 🎉 Have Fun!

The design is fully customizable. Experiment with:
- Different color combinations
- Animation timings
- Hover effects
- Layout variations
- Typography choices

Remember: The best portfolio is one that reflects your personality while maintaining professionalism!
