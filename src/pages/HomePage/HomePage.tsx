import Header from "../../components/Header/Header";
import { lazy, Suspense } from "react";

const ProductsGrid = lazy(
  () => import("../../components/ProductGrid/ProductsGrid"),
);

import SectionHeader from "../../shared/ui/SectionHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import type { AppDispatch } from "../../store";
import { selectSearchQuery } from "../../features/search/selectors";
import emptySearch from "../../assets/icons/nosearch.svg";
import { selectProducts } from "../../features/products/selectors";
import { loadCategories } from "../../features/categories/categoriesSlice";
import { selectCategories } from "../../features/categories/selectors";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(loadCategories());
  }, [dispatch]);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const productsByCategory = categories.map((cat) => ({
    category: cat,
    items: filteredProducts.filter((p) => p.categoryId === cat.id),
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main
        className="
          px-[1rem] py-[2rem]
          md:px-[5rem] md:py-[2rem]
        "
      >
        <div className="flex flex-col gap-[2rem]">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10">
              <img
                src={emptySearch}
                alt="No results"
                className="w-32 h-32 mb-4"
              />
              <p className="text-[var(--color-black-300)] text-lg">
                Can't find what you are looking for
              </p>
              <p className="text-[var(--color-primary-600)] text-md">
                Please try again
              </p>
            </div>
          ) : (
            productsByCategory.map((section) =>
              section.items.length ? (
                <section
                  key={section.category.id}
                  className="flex flex-col gap-[1.5rem]"
                >
                  <SectionHeader
                    title={section.category.name}
                    categoryId={section.category.id}
                  />

                  <Suspense
                    fallback={
                      <div className="py-10 w-full bg-[var(--color-stroke-light)] text-center text-[var(--color-black-400)]">
                        Loading products...
                      </div>
                    }
                  >
                    <ProductsGrid products={section.items} />
                  </Suspense>
                </section>
              ) : null,
            )
          )}
        </div>
      </main>
    </div>
  );
}
