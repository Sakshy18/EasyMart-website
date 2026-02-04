import categories from "../../../public/mock/categories.json";

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export const fetchCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories as Category[]);
    }, 300);
  });
};
