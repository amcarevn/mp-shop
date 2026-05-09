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

export const getProductIcon = (iconKey, legacyEmoji) =>
  productIconMap[iconKey] || legacyEmojiIconMap[legacyEmoji] || defaultProductIcon
