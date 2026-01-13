/**
 * Get the full URL for an asset in the public folder
 * Handles the base URL for GitHub Pages deployment
 */
export function getAssetUrl(path) {
  // If it's already an absolute URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }
  
  // Prepend the base URL for public folder assets
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path}`
}
