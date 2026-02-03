export type Product = {
  id: string;
  title: string;
  image: string;
  unitPrice: string;
  price: number;
  originalPrice: number;
  leftCount: number;
  category: string;
};

export async function fetchProductsApi(): Promise<Product[]> {
  const res = await fetch("/mock/products.json");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}


