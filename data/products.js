export const PRODUCTS = {
  necklace: Array.from({ length: 10 }, (_, i) => ({
    id: `N${i + 1}`,
    name: `Pearl Necklace ${i + 1}`,
    price: 120
  })),
  earrings: Array.from({ length: 10 }, (_, i) => ({
    id: `E${i + 1}`,
    name: `Elegant Earrings ${i + 1}`,
    price: 90
  })),
  bracelet: Array.from({ length: 10 }, (_, i) => ({
    id: `B${i + 1}`,
    name: `Charm Bracelet ${i + 1}`,
    price: 70
  }))
};
