import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  search: "",
  meal: {},
  ingredients: [],
  mealInfo: {},
  measurements: [],
  error: false,
  ingrButton: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchInfo = async (endpoint, params) => {
    try {
      let location = window.location.href;
      if (location.includes("localhost")) {
        location = "http://localhost:5000";
      }
      const response = await fetch(`${location}/api/meal`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          endpoint: endpoint,
          params: params,
        }),
      });

      const res = await response.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    dispatch({ type: "SEARCH", payload: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchInfo("filter", state.search);
      const data = res.data.meals;
      if (!data) {
        console.log("NO FOOD!");
        dispatch({ type: "NO_FOOD" });
      } else {
        dispatch({ type: "DISPLAY_MEAL", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleIngredients = async () => {
    try {
      const res = await fetchInfo("lookup", state.meal.idMeal);
      const data = res.data.meals[0];
      dispatch({ type: "INGREDIENTS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, handleSubmit, handleIngredients }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
