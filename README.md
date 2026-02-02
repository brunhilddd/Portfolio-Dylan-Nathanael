# UI/UX Designer Portfolio

A professional portfolio website showcasing UI/UX design work with a Systems Analyst background.

## Features

- **Clean, Modern Design**: Dark theme with sophisticated purple and cyan accent colors
- **Responsive Layout**: Fully responsive across all devices (desktop, tablet, mobile)
- **Smooth Animations**: Subtle, performance-optimized animations that enhance user experience
- **Content-Focused**: Clear hierarchy and readability prioritized throughout
- **SEO Optimized**: Proper meta tags, semantic HTML, and heading structure

## Sections

1. **Hero Section**: Concise introduction highlighting role as UI/UX Designer with Systems Analyst mindset
2. **About Me**: Four key value propositions presented in card format
3. **Case Studies**: Three detailed project showcases with problem, process, and results
4. **Experience Timeline**: Year-over-year professional journey visualization
5. **Skills Board**: Categorized skills and tools in an organized bulletin board layout
6. **Contact**: Multiple contact methods and functional contact form

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **Google Fonts**: Inter and Space Grotesk for modern typography

## Design Philosophy

This portfolio emphasizes:
- **Readability**: Clear typography and spacing
- **Simplicity**: No unnecessary complexity or clutter
- **Content Focus**: Design serves the content, not the other way around
- **Subtle Motion**: Animations enhance rather than distract

## Customization

### Update Personal Information

1. **Contact Details**: Edit the contact section in `index.html` (lines 580-600)
2. **Social Links**: Update LinkedIn and GitHub URLs
3. **Email**: Replace `your.email@example.com` with your actual email

### Modify Content

- **Case Studies**: Edit the case study sections in `index.html` (lines 200-450)
- **Experience**: Update timeline items to reflect your journey
- **Skills**: Add or remove skills in the skills board section

### Color Scheme

All colors are defined as CSS variables in `styles.css` (lines 1-30). Modify these to change the entire color scheme:

```css
--color-primary: #6366f1;
--color-accent: #06b6d4;
```

## Running Locally

Simply open `index.html` in a modern web browser. No build process or server required.

For development with live reload, you can use:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then navigate to `http://localhost:8000`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies except Google Fonts
- Optimized animations using CSS transforms
- Lazy loading ready for images
- Minimal JavaScript footprint

## License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.

---

**Created with systems thinking and user empathy** 💜
