import { createContext, useContext } from "react";
import useCategory from "../hooks/useCategoryReducer";

const CategoryContext = createContext(null);

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

const CategoryProvider = ({ children }) => {
  const categories = useCategory();
  return (
    <CategoryContext.Provider value={categories}>{children}</CategoryContext.Provider>
  );
};

export default CategoryProvider;
