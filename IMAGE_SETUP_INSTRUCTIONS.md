# MDM Group Website - Image Setup Instructions

## 📸 How to Add Your Logo and Images

### 1. **Logo Setup**
Your MDM Group logo needs to be placed in the following location:
- **Path**: `public/images/mdm-logo.png`
- **Recommended Size**: 200x200 pixels (square format)
- **Format**: PNG with transparent background (preferred) or JPG
- **Usage**: The logo appears in 3 places:
  - Header (top navigation)
  - "Why Choose Us" section 
  - Footer

### 2. **Hero Section Images**
Add 3-4 background images for the rotating hero section:
- **Paths**: 
  - `public/images/hero1.jpg`
  - `public/images/hero2.jpg`
  - `public/images/hero3.jpg`
  - `public/images/hero4.jpg`
- **Recommended Size**: 1920x1080 pixels (Full HD)
- **Format**: JPG (for better file size)
- **Content Ideas**: 
  - Pulses/grains in attractive bowls
  - Your factory/processing facility
  - Export/shipping scenes
  - Quality control processes

### 3. **Product Images**
Add images for each dal/pulse category:
- **Paths**:
  - `public/images/toor-dal.jpg`
  - `public/images/moong-dal.jpg`
  - `public/images/chana-dal.jpg`
  - `public/images/urad-dal.jpg`
  - `public/images/kabuli-chana.jpg`
  - `public/images/masoor-dal.jpg`
  - `public/images/rajma.jpg`
- **Recommended Size**: 400x300 pixels
- **Format**: JPG
- **Style**: Clean, well-lit product photos with consistent background

## 🚀 How to Add Images

### Method 1: Direct Copy
1. Copy your images to the `public/images/` folder
2. Rename them to match the exact filenames listed above
3. Refresh your website to see the changes

### Method 2: Replace Placeholder Names
If your images have different names, you can update the image paths in the code:
1. Open `src/App.js`
2. Find the `heroImages` array (lines 9-14)
3. Replace the image paths with your actual filenames
4. Find the `products` array (lines 17-25)
5. Update the image paths for each product

## 📱 Image Optimization Tips

### For Best Performance:
- **Compress images** before uploading (use tools like TinyPNG)
- **Hero images**: Keep under 500KB each
- **Product images**: Keep under 200KB each
- **Logo**: Keep under 50KB

### Recommended Tools:
- **Free**: TinyPNG, Squoosh.app
- **Photoshop**: Save for Web feature
- **Online**: Canva, GIMP

## 🎨 Image Style Guidelines

### Logo:
- Clean, professional appearance
- Good contrast against orange header background
- Square or circular format works best

### Hero Images:
- High-quality, professional photography
- Bright, appealing colors
- Show your products or facilities in best light
- Avoid cluttered backgrounds

### Product Images:
- Consistent lighting and background
- Show the actual dal/pulse clearly
- Clean, appetizing presentation
- Similar angles and composition

## 🔧 Troubleshooting

### Images Not Showing?
1. **Check file paths** - ensure exact spelling and case
2. **Check file formats** - use JPG or PNG only
3. **Clear browser cache** - Ctrl+F5 to refresh
4. **Check file sizes** - very large images may not load

### Logo Appears Blurry?
1. Use higher resolution image (at least 200x200px)
2. Ensure PNG format for crisp edges
3. Check if image has transparent background

## 📞 Need Help?
If you need assistance with image preparation or have questions about the setup, feel free to ask!

---
**Note**: After adding all images, your website will look professional and complete. The rotating hero images and product carousel will create an engaging, dynamic experience for your visitors.
