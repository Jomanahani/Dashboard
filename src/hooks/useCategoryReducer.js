import { useEffect, useReducer } from "react";

const initialState = {
  categories: JSON.parse(localStorage.getItem("categories")) || [],
};

const ACTIONS = {
  ADD_CATEGORY: "addCategory",
  REMOVE_CATEGORY: "removeCategory",
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CATEGORY:
      return {
        categories: [...state.categories, action.payload],
      };
    case ACTIONS.REMOVE_CATEGORY:
      return {
        categories: state.categories.filter(
          (category) => category !== action.payload
        ),
      };
    default:
      return state;
  }
};

const useCategory = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  useEffect(() => {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    dispatch({
      type: "INITIAL_CATEGORY",
      payload: { categories },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(state.categories));
  }, [state]);

  const addCategory = (category) =>
    dispatch({ type: ACTIONS.ADD_CATEGORY, payload: category });

  const removeCategory = (category) =>
    dispatch({ type: ACTIONS.REMOVE_CATEGORY, payload: category });

  return {
    state,
    addCategory,
    removeCategory,
  };
};

export default useCategory;
