import { useEffect, useReducer } from "react";

const initialState = {
  categories: JSON.parse(localStorage.getItem("categories")) || [],
};

const ACTIONS = {
  ADD_CATEGORY: "addCategory",
  REMOVE_CATEGORY: "removeCategory",
  ADD_UNITS: "addUnits",
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
    case ACTIONS.ADD_UNITS:
      return {
        categories: state.categories.map((category) => {
          if (category.key === action.payload.key) {
            return { ...category, UnitsNum: action.payload.units };
          } else {
            return category;
          }
        }),
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

  const addUnits = (key, units) =>
    dispatch({ type: ACTIONS.ADD_UNITS, payload: { key, units } });

  function isCompleted(arr) {
    return arr.every((obj) => {
      return (
        obj.hasOwnProperty("space") &&
        obj.hasOwnProperty("location") &&
        obj.hasOwnProperty("date") &&
        obj.hasOwnProperty("roomNum") &&
        obj.hasOwnProperty("unitsNum")
      );
    });
  }
  return {
    state,
    addCategory,
    removeCategory,
    addUnits,
    isCompleted,
  };
};

export default useCategory;
