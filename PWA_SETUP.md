# PWA (Progressive Web App) Setup

Your digital card application is now configured as a PWA and can be installed on iOS and Android devices!

## What's Included

✅ **Web App Manifest** (`public/manifest.json`)
- Defines app name, icons, colors, and display mode
- Enables "Add to Home Screen" functionality

✅ **Service Worker** (`public/sw.js`)
- Enables offline functionality
- Caches resources for faster loading
- Automatically registered on page load

✅ **PWA Meta Tags**
- Added to all generated pages
- iOS-specific meta tags for better iPhone support
- Theme color configuration

✅ **Icons**
- Placeholder icons created (192x192 and 512x512)
- Replace with your branded icons (see `scripts/generate-icons.md`)

## Installation Instructions

### On Android (Chrome)
1. Visit your card page (e.g., `https://e-cards.co.il/cards/yael-amor/`)
2. Tap the menu (3 dots) → "Add to Home screen" or "Install app"
3. Confirm installation
4. The app will appear on your home screen

### On iOS (Safari)
1. Visit your card page
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Customize the name if desired
5. Tap "Add"
6. The app will appear on your home screen

## Customization

### Update Icons
Replace the placeholder icons in `public/`:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

See `scripts/generate-icons.md` for detailed instructions.

### Update Manifest
Edit `public/manifest.json` to customize:
- App name and description
- Theme colors
- Display mode (standalone, fullscreen, etc.)

### Service Worker
The service worker (`public/sw.js`) caches resources for offline use. You can customize:
- Which files to cache
- Cache version (update `CACHE_NAME` to force refresh)
- Offline fallback behavior

## Testing

1. **Build the project**: `npm run build`
2. **Test locally**: 
   - Open Chrome DevTools → Application → Manifest (check for errors)
   - Check Service Worker registration in Console
3. **Test on device**:
   - Deploy to your server
   - Visit on mobile device
   - Try "Add to Home Screen"

## Browser Support

- ✅ Chrome/Edge (Android & Desktop)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (Android)
- ✅ Samsung Internet

## Notes

- The app works offline after first visit (cached resources)
- Each card page (`/cards/{slug}/`) is installable independently
- Icons should be square and work well at small sizes
- Theme color matches your design system (#818cf8)
