# MDM Group Assets Directory

## Logo Integration Guide

### Required Logo File
Place your company logo in this directory with the filename: `logo.png`

**Recommended specifications:**
- Format: PNG (with transparent background preferred)
- Size: 300x150 pixels (or similar aspect ratio)
- Resolution: 300 DPI for crisp display
- Background: Transparent or white

### Logo Placement Locations
Your logo will appear in **3 key locations** as requested:

1. **Header Navigation** - Top left corner, 50px height
2. **Why Choose Us Section** - Center showcase, 100px height  
3. **Footer** - Company branding, 60px height

### Hero Section Images
Create the following hero images for the dynamic slideshow:

1. `hero1.jpg` - Pulses/grains in bulk display
2. `hero2.jpg` - Modern processing facility
3. `hero3.jpg` - Quality testing/certification scene
4. `hero4.jpg` - Global export/shipping scene

**Hero image specifications:**
- Format: JPG
- Size: 1920x1080 pixels (Full HD)
- Aspect ratio: 16:9
- File size: Under 500KB each for fast loading

### Product Images
Create individual product images:

1. `toor-dal.jpg` - Toor Dal
2. `moong-dal.jpg` - Moong Dal
3. `chana-dal.jpg` - Chana Dal
4. `urad-dal.jpg` - Urad Dal
5. `kabuli-chana.jpg` - Kabuli Chana
6. `masoor-dal.jpg` - Masoor Dal
7. `rajma.jpg` - Rajma

**Product image specifications:**
- Format: JPG
- Size: 400x300 pixels
- Aspect ratio: 4:3
- Background: Clean white or natural
- File size: Under 100KB each

### Fallback Handling
The website includes automatic fallback handling:
- If logo.png is not found, it displays "MDM GROUP Since 1989" text
- If product images are not found, placeholder images with product names are shown
- If hero images are not found, a beautiful gradient background is displayed

### File Structure
```
public/assets/
├── logo.png (Your company logo)
├── hero1.jpg (Hero slideshow image 1)
├── hero2.jpg (Hero slideshow image 2)
├── hero3.jpg (Hero slideshow image 3)
├── hero4.jpg (Hero slideshow image 4)
├── toor-dal.jpg (Product image)
├── moong-dal.jpg (Product image)
├── chana-dal.jpg (Product image)
├── urad-dal.jpg (Product image)
├── kabuli-chana.jpg (Product image)
├── masoor-dal.jpg (Product image)
└── rajma.jpg (Product image)
```

### Quick Start
1. Place your logo as `logo.png` in this directory
2. Add hero images (hero1.jpg through hero4.jpg)
3. Add product images with the exact filenames listed above
4. Refresh your website to see the images

### Notes
- All images should be optimized for web use
- Use descriptive alt text for accessibility
- Maintain consistent lighting and style across product images
- Hero images should convey trust, quality, and professionalism
