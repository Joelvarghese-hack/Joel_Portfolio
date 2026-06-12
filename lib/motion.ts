/** Shared hover and press micro-interaction for inner page elements. */
export const pressable = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 22 },
} as const;

export const cardHover = {
  whileHover: { y: -4 },
  transition: { type: "spring", stiffness: 300, damping: 24 },
} as const;
