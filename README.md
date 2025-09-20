# Interiors By Preyashi - Premium Interior Design Website

A world-class, premium interior design portfolio website for Interiors By Preyashi, founded by Preyashi More Birmiwal - Interior Designer, Vastu Consultant, and Vedic Numerologist with 7+ years of experience.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Database**: Firebase Firestore
- **Deployment**: Netlify-ready

## Google Ads Compliance & SEO

### Build Commands
```bash
# Development
npm run dev

# Production Build
npm run build

# Preview Production Build
npm run preview
```

### Manual Deployment Instructions

#### Netlify Deployment
1. Run `npm run build` to create the `dist` folder
2. Upload the entire `dist` folder to Netlify
3. Configure redirects: Netlify will automatically use the `_redirects` file in the `dist` folder
4. Set build command: `npm run build`
5. Set publish directory: `dist`

#### Vercel Deployment
1. Run `npm run build` to create the `dist` folder
2. Upload the `dist` folder to Vercel
3. Configure as a Single Page Application
4. Set build command: `npm run build`
5. Set output directory: `dist`

#### Generic Static Host
1. Run `npm run build`
2. Upload all contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)
4. Ensure `robots.txt` and `sitemap.xml` are accessible at the root

### SEO Features
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Located at `/robots.txt`
- **Meta Tags**: Complete meta tags, Open Graph, and Twitter Cards on all pages
- **Structured Data**: JSON-LD structured data for better search results
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Mobile-First**: Responsive design optimized for mobile devices

### Performance Optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **Lazy Loading**: Images and components load on demand
- **Compression**: Built-in asset compression and minification
- **Caching**: Optimized caching headers for static assets

## Logo and Favicon Guidelines

### Logo Requirements
- **Format**: PNG with transparent background (logo.png)
- **Size**: Minimum 300x300px, recommended 500x500px or higher
- **Quality**: High resolution (300 DPI for print compatibility)
- **Aspect Ratio**: Square (1:1) or horizontal rectangle (3:2 or 4:3)
- **File Location**: `public/`
- **Naming Convention**: `logo.png`

### Favicon Requirements
- **Format**: PNG
- **Sizes**: 16x16, 32x32, 48x48, 64x64 pixels (ICO should contain multiple sizes)
- **File Location**: `public/`
- **Naming Convention**: `favicon.png`
- **Additional**: `appletouchicon.png` (180x180px) for iOS devices

### Implementation
1. Place logo file in `public/`
2. Place favicon in `public/`
3. Update `index.html` to reference favicon
4. Update logo references in Header and Footer components

## Founder Photo Guidelines

### Photo Requirements
- **Format**: JPEG (preferred) or PNG
- **Quality**: High resolution, minimum 800x1000px
- **Aspect Ratio**: 4:5 (portrait) or 3:4
- **File Size**: Optimized for web (under 500KB)
- **File Location**: `public/images/team/`
- **Naming Convention**: `preyashi-founder.jpg`

### SEO and Accessibility
- **Alt Text**: "Preyashi More Birmiwal - Interior Designer, Vastu Consultant, and Vedic Numerologist"
- **Loading**: Use lazy loading for performance
- **Responsive**: Ensure proper scaling across devices

## Instagram Integration

### Updating Instagram Reels
1. Navigate to `src/pages/Home.tsx`
2. Find the "Follow Our Journey" section
3. Update the `instagramReels` array with new reel URLs
4. Each reel object should contain:
   ```typescript
   {
     id: 'unique-id',
     url: 'https://www.instagram.com/reel/REEL_ID',
     thumbnail: 'thumbnail-image-url',
     title: 'Reel description'
   }
   ```

### Current Instagram Reels
- https://www.instagram.com/reel/DMFY-N7ycuf
- https://www.instagram.com/reel/DG4-b0sSZGP
- https://www.instagram.com/reel/DLE2bnJSrhP
- https://www.instagram.com/reel/C_DprW9PrNi
- https://www.instagram.com/reel/C_dZ34uv6rM
- https://www.instagram.com/reel/CeTMFuvphOq
- https://www.instagram.com/reel/C_fx6UfPAfw

## Blog Management

### Adding New Blog Posts
1. Navigate to `src/pages/Blog.tsx`
2. Add new post object to the `blogPosts` array:
   ```typescript
   {
     id: unique_number,
     title: 'Post Title',
     excerpt: 'Brief description',
     content: 'Full content with markdown formatting',
     author: 'Preyashi More Birmiwal',
     date: 'YYYY-MM-DD',
     readTime: 'X min read',
     category: 'Category Name',
     image: 'image-url'
   }
   ```

### SEO Meta Tags
Each blog post automatically generates:
- Title tag with post title
- Meta description from excerpt
- Open Graph tags for social sharing
- Schema markup for rich snippets

## Portfolio Management

### Updating Portfolio Images
1. Navigate to `src/pages/Portfolio.tsx`
2. Update the `projects` array with new project data
3. Each project should include:
   ```typescript
   {
     id: unique_number,
     title: 'Project Title',
     category: 'completed' | 'ongoing',
     location: 'City, State',
     year: 'YYYY',
     type: 'Project Type',
     description: 'Detailed description',
     images: ['image1-url', 'image2-url', 'image3-url'],
     features: ['Feature 1', 'Feature 2']
   }
   ```

### Image Requirements
- **Format**: JPEG or WebP
- **Size**: 1200x800px (3:2 aspect ratio)
- **Quality**: High resolution, optimized for web
- **File Location**: Use external URLs or `public/images/portfolio/`

## Content Updates

### Updating Site-Wide Content
1. **Header/Navigation**: Edit `src/components/Header.tsx`
2. **Footer**: Edit `src/components/Footer.tsx`
3. **Home Page**: Edit `src/pages/Home.tsx`
4. **About Page**: Edit `src/pages/About.tsx`
5. **Services**: Edit `src/pages/Services.tsx`
6. **Contact Info**: Update in multiple files (Contact.tsx, Footer.tsx)

### Social Media Links
Update social media URLs in:
- `src/components/Footer.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`

Current social links:
- Instagram: https://www.instagram.com/interiorsbypreyashi/
- Facebook: https://www.facebook.com/pmdesignsss
- LinkedIn: https://www.linkedin.com/in/preyashi-birmiwal-8a058a15b/

## SPA Routing Configuration

### Ensuring Direct URL Access
The website uses React Router for SPA routing. To ensure all pages load correctly:

1. **Development**: Routes work automatically with React Router
2. **Production (Netlify)**: 
   - Create `public/_redirects` file with: `/* /index.html 200`
   - This ensures all routes redirect to index.html for client-side routing

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`
4. Add to sitemap if needed

## Firebase Configuration

### Lead Form Setup
The contact form uses Firebase Firestore to store leads with auto-incrementing IDs (IBP-0001, IBP-0002, etc.).

### Firebase Config Location
- Configuration: `src/lib/firebase.ts`
- Form handling: `src/pages/Contact.tsx`

### Lead Data Structure
```typescript
{
  id: 'IBP-0001',
  name: string,
  phone: string,
  email: string,
  projectType: string,
  message: string,
  timestamp: Date,
  status: 'new'
}
```

## SEO Optimization

### Current SEO Features
- Meta tags for all pages
- Open Graph tags for social sharing
- Schema markup for FAQ and blog posts
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML structure
- Alt tags for all images

### Regional SEO Keywords
The website is optimized for:
- Tinsukia, Dibrugarh, Jorhat, Guwahati
- Namsai, Tezu, Duliajan, Upper Assam
- Arunachal Pradesh, Northeast India

## Performance Optimization

### Current Optimizations
- Lazy loading for images
- Code splitting with React.lazy()
- Optimized bundle size
- Compressed images
- Efficient CSS with Tailwind
- Smooth animations with Framer Motion

### Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Test on various devices and connections

## Deployment

### Netlify Deployment
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables if needed
5. Configure custom domain if applicable

### Environment Variables
Create `.env` file for local development:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
```

## Maintenance

### Regular Updates
- Update Instagram reels monthly
- Add new blog posts regularly
- Update portfolio with completed projects
- Monitor and respond to contact form submissions
- Update testimonials and reviews

### Technical Maintenance
- Keep dependencies updated
- Monitor Firebase usage
- Check for broken links
- Optimize images regularly
- Monitor site performance

## Support

For technical support or questions about updating the website, refer to this documentation or contact the development team.

## Design System

### Color Palette
The website uses a warm, premium color palette inspired by the logo:

**Primary Colors:**
- Yellow-500: #eab308 (Primary accent)
- Orange-500: #f97316 (Secondary accent)
- Orange-600: #ea580c (Hover states)
- Orange-700: #c2410c (Text/navigation)
- Orange-800: #9a3412 (Dark text)

**Background Colors:**
- Yellow-50: #fefce8 (Light backgrounds)
- Orange-50: #fff7ed (Light backgrounds)
- Yellow-100: #fef3c7 (Subtle highlights)
- Orange-100: #ffedd5 (Subtle highlights)

**Gradients:**
- Primary: `from-yellow-500 to-orange-500`
- Hover: `from-yellow-600 to-orange-600`
- Light: `from-yellow-100 to-orange-100`

### Typography
The website uses modern, clean sans-serif fonts:

**Primary Font:** Inter
- Used for body text, navigation, and UI elements
- Weights: 300, 400, 500, 600, 700
- Line height: 1.7 for body text

**Heading Font:** Montserrat
- Used for headings, hero text, and brand elements
- Weights: 400, 500, 600, 700
- Line height: 1.3 for headings

**Font Classes:**
- `.font-inter` - Inter font family
- `.font-montserrat` - Montserrat font family
- `.font-serif` - Alias for Montserrat (legacy compatibility)

### Updating Fonts
To update fonts across the website:
1. Update Google Fonts link in `index.html`
2. Modify font-family declarations in `src/index.css`
3. Update font classes as needed
4. Test across all pages and components

### Updating Colors
To update the color palette:
1. Modify color classes in Tailwind components
2. Update CSS custom properties if using any
3. Test contrast ratios for accessibility
4. Ensure consistency across all pages

---

**Built with ❤️ by NIRVIAN** - https://www.nirvian.com