# Design Guidelines for Srujan's Portfolio Website

## Design Approach
**Reference-Based**: Drawing inspiration from modern portfolio sites and tech company aesthetics (Linear's typography, Stripe's restraint, with custom glassmorphism treatment)

## Visual Style
- **Aesthetic**: Clean, minimal, sophisticated with glassmorphism effects and subtle gradients
- **Mood**: Premium, professional, modern (NOT flashy or over-designed)
- **Typography**: Inter or Poppins font family
- **Color Palette**:
  - Primary: #1e3a8a (deep blue)
  - Secondary: #334155 (slate gray)
  - Accent: #f59e0b (amber/gold)
  - Success: #10b981 (green)
  - Background: #ffffff (white), #f8fafc (light gray)
  - Text: #1e293b (dark slate), #64748b (medium gray)

## Layout System
- **Spacing Units**: Tailwind's p-20, py-24, gap-6, space-y-8
- **Max Width**: 1200px centered (max-w-6xl)
- **Section Spacing**: 100px between major sections
- **Card Spacing**: 24px gaps in grids
- **Padding**: 80px vertical, 20px horizontal on mobile
- **Border Radius**: 12px for cards, 8px for buttons
- **Shadows**: Subtle, layered box shadows for depth

## Responsive Breakpoints
- Mobile: Single column, hamburger menu (640px)
- Tablet: 2-column grid (768px)
- Desktop: 3-4 column grid (1024px+)

## Component Library

### Navigation
- Fixed navigation bar with smooth scrolling
- Scroll-triggered show/hide with smooth transitions
- Links: Home, About, Skills, Experience, Publications, Projects, Hobbies, Contact
- Hamburger menu on mobile
- Dark/light mode toggle (default light, localStorage persistence)

### Hero Section
- Abstract geometric pattern or neural network visualization background (NO photos)
- Animated gradient text treatment
- Typing effect or fade-in animation
- Two CTA buttons: "View My Work" and "Get In Touch" with blurred backgrounds over imagery
- Subtle parallax effect

### Content Cards
- Glassmorphism effects with backdrop blur
- Hover: lift effect (translateY) with enhanced shadow
- Border radius: 12px
- Staggered entrance animations

### Skill Cards
- Modern tech icons from Lucide React
- Progress bars or circular indicators
- Smooth fill animations
- Grid layout: responsive columns

### Project Cards
- 4 projects in responsive grid
- Icon illustrations (NOT stock photos): workflow diagrams, eye tracking visuals, document generation graphics
- "View Details" buttons
- Hover effects with scale and shadow transitions
- External link icons for research papers

### Publication Cards
- Elegant card design with external link icons
- IEEE conference information prominently displayed
- Clickable links opening in new tabs

### Contact Form
- Fields: Name, Email, Subject, Message
- Validation with smooth error messages
- "Send Message" button with loading state
- Social media icons with hover effects (LinkedIn, GitHub, Instagram)

## Animations & Interactions
- **Scroll Animations**: Intersection Observer API for fade-in and slide-up effects
- **Micro-interactions**: All buttons and cards have scale, shadow, color transitions (transition: all 0.3s ease)
- **Hero**: Typing effect or gradient animation on tagline
- **Background**: Floating/bobbing decorative geometric elements
- **Stagger**: Delay animations for cards (skill cards, project cards)
- **Loading**: Initial page load animation
- **Smooth Scrolling**: scroll-behavior: smooth

## Images
**No Stock Photos**: Use SVG illustrations, abstract geometric patterns, neural network visualizations, and Lucide React icons throughout.

- **Hero Background**: Abstract geometric patterns or neural network visualization
- **Project Icons**: Workflow diagrams, connected nodes, eye tracking graphics, document visuals
- **Background Elements**: Gradient meshes, floating geometric shapes, dot patterns
- All visuals match color scheme (blues, grays, amber accents)

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Proper heading hierarchy
- Form validation feedback
- Keyboard navigation support
- All links open in new tabs where appropriate