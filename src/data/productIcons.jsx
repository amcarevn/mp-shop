import {
  FaBottleDroplet,
  FaBoxOpen,
  FaLeaf,
  FaLemon,
  FaMugHot,
  FaSeedling,
  FaSprayCanSparkles,
} from 'react-icons/fa6'

export const productIconMap = {
  bottle: FaBottleDroplet,
  coffee: FaMugHot,
  beauty: FaSprayCanSparkles,
  seedling: FaSeedling,
  citrus: FaLemon,
  leaf: FaLeaf,
}

export const defaultProductIcon = FaBoxOpen

const legacyEmojiIconMap = {
  '🧴': FaBottleDroplet,
  '☕': FaMugHot,
  '💄': FaSprayCanSparkles,
  '🥥': FaSeedling,
  '🍊': FaLemon,
  '🌿': FaLeaf,
}

/**
 * Resolve product icon component from the new icon key and legacy emoji value.
 * This keeps old cart data in localStorage rendering correctly during migration.
 */
export const getProductIcon = (iconKey, legacyEmoji) =>
  productIconMap[iconKey] || legacyEmojiIconMap[legacyEmoji] || defaultProductIcon
