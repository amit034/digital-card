/**
 * Cards Registry
 * ===============
 * Import and register all card data files here.
 * Each card will be accessible at /{slug}
 */

import yaelAmor from './yael-amor'

// Register all cards by their slug
const cards = {
  'yael-amor': yaelAmor,
}

// Get card by slug
export const getCard = (slug) => cards[slug] || null

// Get all cards
export const getAllCards = () => Object.values(cards)

// Get all slugs
export const getAllSlugs = () => Object.keys(cards)

// Default card (first one or specify)
export const defaultCard = yaelAmor

export default cards
