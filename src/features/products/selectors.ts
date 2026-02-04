import type { RootState } from "../../store/index";
import type { Product } from "./productsApi";

export const selectProducts = (state: RootState): Product[] =>
  state.products.items;

export const selectCategories = (state: RootState): string[] => {
  const set = new Set(
    state.products.items.map(p => p.categoryId)
  );

  return Array.from(set);
};
