import { useEffect, useReducer } from "react";

const initialState = {
  categories: JSON.parse(localStorage.getItem("categories")) || [],
};

const ACTIONS = {
  ADD_CATEGORY: "addCategory",
  REMOVE_CATEGORY: "removeCategory",
  ADD_UNITS: "addUnits",
  ADD_LOCATION: "addLocation",
  ADD_DATE: "addDate",
  ADD_SPACE: "addSpace",
  ADD_ROOMS: "addRooms",
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
    case ACTIONS.ADD_LOCATION:
      return {
        categories: state.categories.map((category) => {
          if (category.key === action.payload.key) {
            return { ...category, location: action.payload.location };
          } else {
            return category;
          }
        }),
      };
    case ACTIONS.ADD_DATE:
      return {
        categories: state.categories.map((category) => {
          if (category.key === action.payload.key) {
            return { ...category, date: action.payload.date };
          } else {
            return category;
          }
        }),
      };
    case ACTIONS.ADD_SPACE:
      return {
        categories: state.categories.map((category) => {
          if (category.key === action.payload.key) {
            return { ...category, space: action.payload.space };
          } else {
            return category;
          }
        }),
      };
    case ACTIONS.ADD_ROOMS:
      return {
        categories: state.categories.map((category) => {
          if (category.key === action.payload.key) {
            return { ...category, roomNum: action.payload.roomNum };
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

  console.log("categories", state.categories);

  const addCategory = (category) =>
    dispatch({ type: ACTIONS.ADD_CATEGORY, payload: category });

  const removeCategory = (category) =>
    dispatch({ type: ACTIONS.REMOVE_CATEGORY, payload: category });

  const addUnits = (key, units) =>
    dispatch({ type: ACTIONS.ADD_UNITS, payload: { key, units } });

  const addLocation = (key, location) =>
    dispatch({ type: ACTIONS.ADD_LOCATION, payload: { key, location } });

  const addDate = (key, date) =>
    dispatch({ type: ACTIONS.ADD_DATE, payload: { key, date } });

  const addSpace = (key, space) =>
    dispatch({ type: ACTIONS.ADD_SPACE, payload: { key, space } });

  const addRooms = (key, roomNum) =>
    dispatch({ type: ACTIONS.ADD_ROOMS, payload: { key, roomNum } });
    
  function isCompleted(arr) {
    return arr.every((obj) => {
      return (
        obj.hasOwnProperty("space") &&
        obj.hasOwnProperty("location") &&
        obj.hasOwnProperty("date") &&
        obj.hasOwnProperty("roomNum") &&
        obj.hasOwnProperty("UnitsNum") 
      );
    });
  }
  return {
    state,
    addCategory,
    removeCategory,
    addUnits,
    addLocation,
    addDate,
    addSpace,
    addRooms,
    isCompleted,
  };
};

export default useCategory;
