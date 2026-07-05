export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "The Signature Stack",
    description: "Double wagyu patty, smoked cheddar, caramelized onions, and house aioli",
    price: 24,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Truffle Velvet",
    description: "Rich beef burger with truffle mayo, aged cheddar, and crisp arugula",
    price: 26,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Fire & Smoke",
    description: "Jalapeño glaze, pepper jack, pickles, and a smoky charred finish",
    price: 22,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Crispy Garden Deluxe",
    description: "Golden fried chicken breast, honey mustard, lettuce, tomato, and pickles",
    price: 20,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    name: "Blue Moon Melt",
    description: "Angus beef, blue cheese, bacon jam, and fresh arugula on a toasted bun",
    price: 23,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    name: "The House Double",
    description: "Two juicy patties, secret sauce, lettuce, tomato, and onion on a brioche bun",
    price: 21,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  },
];
