import FiltersPanel from "../../components/FilterPanel/FilterPanel";
import Header from "../../components/Header/Header";

import { lazy, Suspense } from "react";

const ProductsGrid = lazy(
  () => import("../../components/ProductGrid/ProductsGrid"),
);
const CategoriesBar = lazy(
  () => import("../../components/CategoryPillList/CategoriesBar"),
);

import BannerSkeleton from "../../shared/ui/BannerSkeleton";

const BannersRow = lazy(() => import("../../shared/ui/BannersRow"));

import SectionHeader from "../../shared/ui/SectionHeader";
import { selectCategories } from "../../features/categories/selectors";

import { selectProducts } from "../../features/products/selectors";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store";
import { fetchProducts } from "../../features/products/productsSlice";
import { loadCategories } from "../../features/categories/categoriesSlice";
import { useEffect } from "react";
import { selectSearchQuery } from "../../features/search/selectors";

import emptySearch from "../../assets/icons/nosearch.svg";
import filter from "../../assets/icons/filter.svg";
import SubCategoryPill from "../../shared/ui/SubCategoryPill";

export default function CategoriesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { categoryId } = useParams();

  const products = useSelector(selectProducts);
  const searchQuery = useSelector(selectSearchQuery) || "";
  const categories = useSelector(selectCategories);
  const activeCategory = categories.find((c) => c.id === categoryId);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(loadCategories());
  }, [dispatch]);

  const filteredProducts = products.filter(
    (p) =>
      p.categoryId === categoryId &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const isSearching = searchQuery.trim().length > 0;
  const hasNoProductsResults = filteredProducts.length === 0;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main
        className="
          px-[1rem] py-[1.5rem]
          md:px-[5rem] md:py-[1rem]
        "
      >
        <div className="flex gap-[2rem]">
          <div className="hidden md:block">
            <FiltersPanel />
          </div>

          <section className="w-full max-w-[69.625rem] flex flex-col gap-[2rem]">
            <Suspense
              fallback={
                <div className="h-[3rem] w-full bg-[var(--color-stroke-light)] flex items-center text-[var(--color-black-300)]">
                  Loading categories...
                </div>
              }
            >
              <CategoriesBar />
            </Suspense>

            <div className="md:hidden flex items-center gap-[12px] overflow-x-auto">
              <button
                className="
      w-[44px] h-[44px]
      rounded-full
      bg-[var(--color-primary-50)]
      flex items-center justify-center
      shrink-0
    "
              >
                <img src={filter} alt="filter" />
              </button>

              {categories.map((cat) => (
                <SubCategoryPill
                  key={cat.id}
                  label={cat.name}
                  active={cat.id === categoryId}
                />
              ))}
            </div>

           <div className="hidden md:block">
  <Suspense fallback={<BannerSkeleton />}>
    <BannersRow />
  </Suspense>
</div>


            <SectionHeader title={activeCategory?.name ?? ""} hideViewButton />

            {hasNoProductsResults ? (
              isSearching ? (
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
                <div className="py-[5rem] text-center">
                  <p className="text-[1.125rem] text-[var(--color-black-400)]">
                    No products in this category
                  </p>
                </div>
              )
            ) : (
              <Suspense
                fallback={
                  <div className="py-10 w-full bg-[var(--color-stroke-light)] text-center text-[var(--color-black-400)]">
                    Loading products...
                  </div>
                }
              >
                <ProductsGrid products={filteredProducts} />
              </Suspense>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
