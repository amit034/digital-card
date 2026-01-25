# PWA Icons Setup

To make your PWA installable, you need to create app icons.

## Required Icons

You need two icon files in the `public/` folder:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

## Quick Setup Options

### Option 1: Use Online Tool
1. Go to [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
2. Upload a logo/image (at least 512x512)
3. Download the generated icons
4. Place `icon-192.png` and `icon-512.png` in the `public/` folder

### Option 2: Create Simple Icons
You can create simple icons using any image editor:
- Use your logo or a simple design
- Export as PNG
- Resize to 192x192 and 512x512
- Save to `public/icon-192.png` and `public/icon-512.png`

### Option 3: Use Profile Images
Temporarily, you can copy a profile image:
```bash
# Copy profile image as placeholder (replace with proper icons later)
cp public/cards/yael-amor/profile.png public/icon-192.png
cp public/cards/yael-amor/profile.png public/icon-512.png
```

## Icon Requirements

- **Format**: PNG
- **Sizes**: 192x192 and 512x512 pixels
- **Purpose**: Should work as app icon (square, clear design)
- **Background**: Transparent or solid color

After creating the icons, rebuild your project:
```bash
npm run build
```
