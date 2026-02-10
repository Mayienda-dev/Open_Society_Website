# OSTORG Website

A mobile-first, multi-page website for Open Society and Transformative Organization (OSTORG).

## Website Structure

This is a fully responsive, 6-page website built with Bootstrap 5, featuring:

### Pages

1. **index.html** - Home page with hero section, mission/vision/goal, and service overview
2. **about.html** - Detailed information about OSTORG, background, location, and team
3. **programs.html** - Comprehensive programs, objectives, and services offered
4. **impact.html** - Expected impact, statistics, and photo gallery slideshow
5. **leadership.html** - Organizational hierarchy with team members
6. **contact.html** - Contact information with clickable email/phone links

### Files

- **styles.css** - Main custom CSS with mobile-first responsive design
- **leadership-styles.css** - Additional CSS for leadership page
- **script.js** - JavaScript for animations, interactions, and slideshow
- **team-photo.jpg** - Organization team photo
- All HTML files are linked together with consistent navigation

## New Features

### Photo Gallery Slideshow (Impact Page)
- Auto-rotating slideshow with 15 photo slots
- 10-second intervals between slides
- Manual navigation with arrow buttons
- Click indicators to jump to specific photos
- Play/Pause button to control auto-play
- Keyboard navigation (Arrow keys, Spacebar)
- Responsive design for all devices

### Leadership Page
- Tree-like organizational structure
- 2 top-tier positions (Chairperson, Vice Chairperson)
- 4 bottom-tier positions (Secretary, Treasurer, 2 Committee Members)
- Photo placeholders for each leader
- Contact information (phone & email) for each position

### Contact Features
- Clickable email addresses (opens email client)
- Clickable phone numbers (opens dialer on mobile)
- Contact person placeholder fields

## How to Use

### Adding Photos

**Team Photo (Already Added):**
- File: `team-photo.jpg` (already in place)

**Leadership Photos:**
Replace these placeholder files with actual photos:
- `leader-placeholder-1.jpg` → Chairperson
- `leader-placeholder-2.jpg` → Vice Chairperson  
- `leader-placeholder-3.jpg` → Secretary
- `leader-placeholder-4.jpg` → Treasurer
- `leader-placeholder-5.jpg` → Committee Member 1
- `leader-placeholder-6.jpg` → Committee Member 2

**Gallery Photos (Impact Page):**
Replace these files with actual activity photos:
- `gallery-1.jpg` through `gallery-15.jpg`

**Important:** After replacing placeholder images:
1. Open the respective HTML file
2. Find the `<img src="...">` tag
3. Change `style="display: none;"` to `style="display: block;"`
4. Or remove the `.slide-image-placeholder` or `.leader-image-placeholder` div

### Updating Content

**Photo Descriptions (impact.html):**
Edit the text in brackets `[Description of photo X]` with actual descriptions of what's happening in each photo.

**Leadership Information (leadership.html):**
Update the placeholder text:
- Names: Replace "Chairperson Name", "Member Name", etc.
- Emails: Replace placeholder emails
- Phone numbers: Replace "+254 XXX XXX XXX" with actual numbers

**Contact Person (contact.html):**
Update the bracketed placeholders:
- `[Contact Person Name]`
- `[contact@ostorg.org]`
- `[+254 XXX XXX XXX]`

## Deployment

### Pre-Deployment Checklist
1. ✅ Replace all placeholder images with actual photos
2. ✅ Update all bracketed text with real information
3. ✅ Test all email and phone links
4. ✅ Test slideshow functionality
5. ✅ Check mobile responsiveness on different devices
6. ✅ Verify all internal links work

### Optimization Tips
- **Image Optimization:** Compress all images before uploading (recommended tools: TinyPNG, Squoosh)
- **Recommended Image Sizes:**
  - Team photo: 1200x800px, under 200KB
  - Leadership photos: 400x400px, under 100KB each
  - Gallery photos: 1000x700px, under 200KB each
- **File Naming:** Use lowercase, hyphens instead of spaces

### Hosting Options

**Free Hosting (Recommended for start):**
1. **GitHub Pages**
   - Create repository
   - Upload all files
   - Enable GitHub Pages in settings
   - Free custom domain support

2. **Netlify**
   - Drag and drop folder
   - Automatic deployment
   - Free SSL certificate
   - Custom domain support

3. **Vercel**
   - Similar to Netlify
   - Fast deployment
   - Free tier available

**Paid Hosting:**
- Traditional web hosting (cPanel)
- Upload files via FTP to public_html or www folder

### Post-Deployment
1. Test all pages on actual devices
2. Check loading speed (use Google PageSpeed Insights)
3. Verify all images load correctly
4. Test email/phone links on mobile devices
5. Share website link and gather feedback

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies (Loaded via CDN)

- Bootstrap 5.3.2
- Bootstrap Icons 1.11.1
- Google Fonts (Playfair Display, Source Sans 3)
- AOS (Animate On Scroll) 2.3.1

All dependencies are loaded from CDNs, so no installation is required.

## Performance Features

- Optimized for fast loading
- CDN-hosted libraries for better caching
- Minimal JavaScript for enhanced performance
- Mobile-optimized layouts
- Lazy-loading ready (can be added if needed)

## Technical Notes

**Slideshow Timing:**
- Auto-advance: 10 seconds per slide
- To change: Edit `10000` in script.js (value is in milliseconds)
- Example: 5 seconds = `5000`, 15 seconds = `15000`

**Color Scheme:**
- Primary: Forest Green (#2C5F2D)
- Secondary: Moss (#97BC62)
- Accent: Gold (#F9E795)

To modify colors, edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2C5F2D;
    --secondary-color: #97BC62;
    --accent-color: #F9E795;
}
```

## Support

For questions about the website:
- Review this README
- Check HTML comments in files
- Test changes locally before uploading

## License

This website was created for OSTORG - Open Society and Transformative Organization.

---

**Built with care for vulnerable children and youth in Kisii County, Kenya**
