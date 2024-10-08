import { create } from "zustand";
import { z } from "zod";

// Define a schema for products using Zod
export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
});

type ProductType = z.infer<typeof productSchema>;

interface CartState {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
}

const useStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));

export default useStore;
