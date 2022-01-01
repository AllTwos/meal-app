const reducer = (state, action) => {
  if (action.type === "SEARCH") {
    return {
      ...state,
      search: action.payload,
    };
  }

  if (action.type === "NO_FOOD") {
    return {
      ...state,
      search: "",
      meal: {},
      ingredients: [],
      measurements: [],
      mealInfo: {},
      error: true,
    };
  }

  if (action.type === "DISPLAY_MEAL") {
    console.log(action.payload);
    const randMeal = Math.floor(Math.random() * action.payload.length);

    return {
      ...state,
      search: "",
      meal: action.payload[randMeal],
      error: false,
      ingredients: [],
      measurements: [],
      mealInfo: {},
      ingrButton: true,
    };
  }

  if (action.type === "INGREDIENTS") {
    const fullIngr = [];
    const measurements = [];

    //gives me an array of full ingredients discarding empty values
    for (let ingr in action.payload) {
      if (ingr.includes("strIngredient") && action.payload[ingr] !== "") {
        fullIngr.push(action.payload[ingr]);
      }
      if (ingr.includes("strMeasure") && action.payload[ingr] !== "") {
        if (action.payload[ingr] !== " ") {
          measurements.push(action.payload[ingr]);
        }
      }
    }

    console.log(action.payload);
    console.log(fullIngr);
    console.log(measurements);

    return {
      ...state,
      ingredients: fullIngr,
      mealInfo: action.payload,
      measurements,
      ingrButton: false,
    };
  }
};

export default reducer;
