import type { ProductCardData } from "./types";

type Props = {
  product: ProductCardData;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col gap-[var(--space-3)]">
      <div
        className="
          bg-[var(--color-primary-50)]
          rounded-[var(--radius-lg)]
          flex items-center justify-center
          aspect-square
        "
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      <p className="text-[0.875rem] text-[var(--color-black-900)]">
        {product.title}
      </p>

      <p className="text-[0.75rem] text-[var(--color-black-500)]">
        {product.unitPrice}
      </p>

      <div className="flex items-center gap-[var(--space-2)]">
        <span className="text-[1rem] font-semibold text-[var(--color-black-900)]">
          ${product.price.toFixed(2)}
        </span>

        {product.originalPrice && (
          <span className="text-[0.75rem] line-through text-[var(--color-black-400)]">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      <div className="flex gap-[var(--space-2)] text-[0.75rem]">
        <span className="text-[var(--color-primary-600)]">
          {product.leftCount} Left
        </span>

        <span className="text-[var(--color-black-900)]">
          {product.leftCount} Left
        </span>
      </div>
    </div>
  );
}
