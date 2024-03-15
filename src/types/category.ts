import { Dispatch, SetStateAction } from "react";

export interface SelCategoryInt {
  id: number;
  name_en: string;
}

export interface CategoryInt {
  id: number;
  name_ukr: string;
  name_en: string;
  photo: string;
}

export interface CategoryObjInt {
  selectedCategories: SelCategoryInt[],
  setSelectedCategories: Dispatch<SetStateAction<SelCategoryInt[]>>,
  setActiveCategory: Dispatch<SetStateAction<number>>,
  activeCategory: number,
  categories: CategoryInt[],
}