# CSS Practice Repository 🎨

## Overview

This repository documents my CSS learning journey. I was weak in CSS, so I created this structured practice plan to master the fundamentals and build real projects. Each day focuses on different CSS concepts and techniques.

---

## 📚 Repository Structure

```
css/
├── readme.md                 (This file)
├── 1 st day/                 (Text Styling & Layout Basics)
│   ├── index.html
│   └── style.css
├── 2 nd day/                 (Shapes & Circular Designs)
│   ├── index.html
│   └── style.css
└── 3 rd day(mini project)/   (Multi-page Portfolio Site)
    ├── index.html
    ├── career.html
    ├── project.html
    └── style.css
```

---

## 🎯 Daily Learning Breakdown

### **Day 1: Text Styling & Layout Basics**

**File:** `1 st day/`

**Concepts Learned:**

- Box model fundamentals (`margin`, `padding`, `border`, `box-sizing`)
- Text styling:
  - `text-align` (centering content)
  - `text-decoration` (underline)
  - `font-size` (changing text size)
  - `font-weight` (bold text)
- Color properties (`color`, `background-color`)
- Container styling (`width`, `border-style`, `border-color`, `border-radius`)
- Unit measurements (`rem`, `ch`)

**Project:** "Hero Arts" article page

- Created a clean article layout with sections
- Used `box-sizing: border-box` for consistent sizing
- Applied `width: 50ch` for readable text column width
- Styled headings with underlines and numbering
- Built responsive padding and margins

**Key CSS Techniques:**

```css
/* Universal reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Container constraint */
.container {
  margin: auto;
  width: 50ch;
  padding: 0.5rem;
}
```

---

### **Day 2: Shapes & Circular Designs**

**File:** `2 nd day/`

**Concepts Learned:**

- `border-radius: 50%` (creating circles)
- `box-shadow` (adding depth and shadows)
- Layout positioning with `margin: auto`
- Height and width constraints for circles
- Nested styling (circles within circles)
- Percentage-based sizing

**Project:** Circular design with nested mini-circles

- Created a bordered circle with double border style
- Added shadow effects to the main circle
- Positioned mini circles inside using nested divs
- Applied aqua background to mini circles
- Demonstrated box-shadow with offset values

**Key CSS Techniques:**

```css
/* Perfect circle */
.container {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: 5px 5px black;
}

/* Nested circles */
.circle {
  background-color: rgb(221, 17, 17);
  border-radius: inherit;
}
```

---

### **Day 3: Mini Project - Personal Portfolio Site**

**File:** `3 rd day(mini project)/`

**Concepts Learned:**

- **Flexbox Layout:**
  - `display: flex`
  - `justify-content: space-between`
  - `gap` for spacing between flex items
- **Navigation Styling:**
  - Link decorations (`:hover`, `:visited` pseudo-classes)
  - `cursor: pointer`
  - `text-decoration: none`
- **Typography:**
  - `font-family` (cursive, Impact, Trebuchet MS)
  - `text-transform: uppercase`
  - `text-align: justify`
- **Advanced Spacing:**
  - Percentage-based margins (`margin: 5%`)
  - Em-based padding (`padding: 0.5em`)
- **Card Styling:**
  - Multiple border styles (solid, double)
  - Border radius with different styles
  - Responsive card layouts

**Pages & Components:**

#### **Home Page (index.html)**

- About Us section
- Hero content area with justified text
- Styled with double border and rounded corners

#### **Career Page (career.html)**

- Job cards displaying multiple positions
- Full Stack Dev position
- Sales Executive position
- Each card styled consistently with borders and spacing

#### **Projects Page (project.html)**

- Currently under development ("in update")
- Navigation structure in place

#### **Navigation (All Pages)**

- Flexbox header with logo and navigation menu
- Navigation styling with hover effects
- Visited link color tracking
- Responsive spacing using `gap`

**Key CSS Techniques:**

```css
/* Flexbox Navigation */
header {
  display: flex;
  justify-content: space-between;
  background-color: bisque;
  border-radius: 1em;
}

nav {
  display: flex;
  gap: 1em;
}

/* Hover Effects */
nav a:hover {
  color: rgba(0, 0, 0, 0.486);
  text-decoration: underline;
}

/* Card Styling */
.jobCard {
  border-style: solid;
  border-radius: 1em;
  padding: 1em;
  margin: auto;
}
```

---

## 📊 CSS Features Covered

| Feature             | Day     | Usage                         |
| ------------------- | ------- | ----------------------------- |
| Box Model           | 1       | Margins, padding, borders     |
| Flexbox             | 3       | Navigation layout             |
| Border Radius       | 2, 3    | Circles and rounded corners   |
| Pseudo-classes      | 3       | `:hover`, `:visited`          |
| Color & Backgrounds | 1, 2, 3 | RGB colors, hex values        |
| Typography          | 1, 3    | Font sizes, families, styling |
| Shadows             | 2       | Box shadows for depth         |
| Units               | 1, 2, 3 | px, rem, em, ch, %            |
| Borders             | 1, 2, 3 | Solid, double, dotted styles  |
| Spacing             | 1, 2, 3 | Margins, padding, gaps        |

---

## 🚀 Key Learnings & Takeaways

✅ **Box Model Mastery** - Understanding margin, padding, and border interactions
✅ **Layout Techniques** - From simple containers to flexbox layouts
✅ **Visual Design** - Using borders, shadows, and colors effectively
✅ **Responsive Sizing** - Using relative units (rem, em, ch)
✅ **Component Styling** - Creating reusable card and navigation components
✅ **User Interaction** - Hover effects and visual feedback for links

---

## 💡 Next Steps to Improve

- [ ] Learn CSS Grid for more complex layouts
- [ ] Implement media queries for responsive design
- [ ] Practice animations and transitions
- [ ] Work with CSS variables for theming
- [ ] Build more complex multi-section websites
- [ ] Complete the Projects page
- [ ] Practice with external resources and modern frameworks

---

## 📝 Notes

- All files use semantic HTML structure
- CSS is linked externally (best practice)
- Universal reset applied for consistent cross-browser styling
- Color scheme: Earthy tones with accent colors
- Typography uses web-safe fonts with fallbacks

---

**Last Updated:** May 13, 2026
**Status:** 🔄 Ongoing Learning
**Difficulty:** Beginner → Intermediate
