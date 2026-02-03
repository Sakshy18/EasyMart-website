import ProductCard from "../ProductCard/ProductCard";
import type { ProductCardData } from "../ProductCard/types";

type Props = {
  products: ProductCardData[];
};

export default function ProductsGrid({ products }: Props) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-[var(--space-6)]
        md:grid-cols-3
        lg:grid-cols-5
      "
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

}
