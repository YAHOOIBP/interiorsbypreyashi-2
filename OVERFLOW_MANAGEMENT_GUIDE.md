# 🎯 Overflow Management Quick Reference Guide

**For:** Interiors By Preyashi Website Developers
**Purpose:** Prevent breaking carousels and interactive components when modifying CSS

---

## ⚠️ CRITICAL RULES

### ❌ NEVER DO THIS:
```css
/* DON'T apply overflow-x: hidden globally */
body {
  overflow-x: hidden;  /* ← BREAKS CAROUSELS */
}

section {
  overflow-x: hidden;  /* ← BREAKS HORIZONTAL ANIMATIONS */
}

* {
  overflow-x: hidden;  /* ← BREAKS EVERYTHING */
}
```

### ✅ ALWAYS DO THIS:
```css
/* Apply overflow-x at the root level only */
html {
  overflow-x: hidden;  /* ✅ Safe - controls page-wide scroll */
}

/* Let sections handle their own overflow */
section:not(.carousel-section) {
  overflow-x: clip;  /* ✅ Safe - excludes carousels */
}
```

---

## 🎠 Adding New Carousels

### Step 1: Add CSS Class to Section
```tsx
<section className="py-20 carousel-section your-carousel-name">
  {/* Your carousel content */}
</section>
```

### Step 2: Add Carousel Container
```tsx
<div className="relative carousel-container">
  <motion.div animate={{ x: offset }}>
    {/* Animated content */}
  </motion.div>
</div>
```

### Step 3: Add CSS Rules (if needed)
```css
/* In index.css */
.your-carousel-name {
  overflow: visible !important;
  position: relative;
}

.your-carousel-name .carousel-container {
  overflow: hidden !important;
  position: relative;
  width: 100%;
}
```

---

## 🔧 Debugging Overflow Issues

### Issue: Carousel Not Scrolling

**Check:**
1. Does parent section have `carousel-section` class?
2. Does container have `carousel-container` class?
3. Is there any `overflow-x: hidden` in parent elements?

**Fix:**
```tsx
// Add carousel classes
<section className="carousel-section">
  <div className="carousel-container">
    {/* Content */}
  </div>
</section>
```

### Issue: Dropdown Menu Clipped

**Check:**
1. Does header have `overflow: visible`?
2. Are there conflicting z-index values?

**Fix:**
```css
header,
header nav,
.dropdown-menu {
  overflow: visible !important;
  z-index: 9999;
}
```

### Issue: Horizontal Page Scroll

**Check:**
1. Are there elements wider than viewport?
2. Is html overflow-x: hidden set?

**Fix:**
```css
html {
  overflow-x: hidden;
  width: 100%;
}

img, video {
  max-width: 100%;
}
```

---

## 📱 Mobile-Specific Rules

### Touch Gestures
```css
.carousel-container {
  touch-action: pan-y pinch-zoom;  /* Allow vertical scroll + zoom */
  -webkit-overflow-scrolling: touch;  /* Smooth iOS scrolling */
}
```

### Mobile Carousels
```css
@media (max-width: 768px) {
  .carousel-section {
    overflow: visible !important;
  }

  .carousel-container {
    overflow: hidden !important;
  }
}
```

---

## 🎨 Common Patterns

### Pattern 1: Infinite Scroll Carousel (Client Logos)
```tsx
<section className="carousel-section client-logos-carousel">
  <div className="carousel-container">
    <motion.div
      animate={{ x: [0, -totalWidth] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...items, ...items].map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
    </motion.div>
  </div>
</section>
```

### Pattern 2: Swipe Carousel (Instagram Reels)
```tsx
<section className="carousel-section instagram-reels-carousel">
  <div
    className="carousel-container cursor-grab"
    style={{ overflow: 'hidden' }}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    <motion.div animate={{ x: offset }}>
      {items.map(item => (
        <div key={item.id}>{item.content}</div>
      ))}
    </motion.div>
  </div>
</section>
```

### Pattern 3: Dropdown Menu (Header)
```tsx
<header className="fixed top-0 z-50">
  <nav style={{ overflow: 'visible' }}>
    <div className="relative">
      <button>Services</button>
      {showDropdown && (
        <div className="absolute top-full">
          {/* Dropdown items */}
        </div>
      )}
    </div>
  </nav>
</header>
```

---

## 🧪 Testing Checklist

Before committing CSS changes:

- [ ] Test client logos carousel (infinite scroll)
- [ ] Test Instagram reels (swipe left/right)
- [ ] Test header dropdown (hover menu)
- [ ] Check mobile hamburger menu
- [ ] Verify no horizontal page scroll
- [ ] Test on mobile device (320px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1280px+ width)

---

## 🚨 Emergency Fixes

### Quick Fix: Carousel Broken
```bash
# Temporarily add to component
<div style={{ overflow: 'visible !important' }}>
  {/* Carousel */}
</div>
```

### Quick Fix: Page Scrolling Horizontally
```bash
# Add to body temporarily
<style>
  html { overflow-x: hidden !important; }
</style>
```

---

## 📚 Reference

**Main CSS File:** `src/index.css` (Lines 1564-1702)
**Carousel Components:** `src/pages/Home.tsx` (Lines 757-886)
**Header Component:** `src/components/Header.tsx`

**CSS Classes:**
- `.carousel-section` - Applied to section containing carousel
- `.carousel-container` - Applied to immediate carousel wrapper
- `.client-logos-carousel` - Specific to client logos
- `.instagram-reels-carousel` - Specific to Instagram reels

**Key Concepts:**
1. Overflow is controlled hierarchically
2. Carousels need `overflow: visible` on section
3. Carousels need `overflow: hidden` on container only
4. Header always needs `overflow: visible`
5. Mobile requires `touch-action` CSS property

---

## 🎓 Learning Resources

### CSS Overflow
- [MDN: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [MDN: overflow-clip-margin](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-clip-margin)

### Framer Motion
- [Framer Motion: Animate](https://www.framer.com/motion/animate/)
- [Framer Motion: Gestures](https://www.framer.com/motion/gestures/)

### Touch Events
- [MDN: Touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [MDN: touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action)

---

**Last Updated:** October 5, 2025
**Maintained By:** Development Team
