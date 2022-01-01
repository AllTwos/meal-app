import { useGlobalContext } from "../context";
import Ingredients from "./Ingredients";

function Meal() {
  const {
    meal: { strMeal, strMealThumb },
    handleIngredients,
    ingrButton,
    ingredients,
    mealInfo,
  } = useGlobalContext();

  return (
    <section className={strMeal ? "meal" : ""}>
      <div className="grid">
        <div className="meal-snap">
          <h1>{strMeal}</h1>
          <img src={strMealThumb} alt={strMeal} />
        </div>
        {ingrButton ? (
          <button className="btn" onClick={handleIngredients}>
            Show Ingredients
          </button>
        ) : (
          <></>
        )}
        {ingredients.length > 0 && <div>{<Ingredients />}</div>}
      </div>

      {ingredients.length > 0 && (
        <div className="directions mt-2">
          <h1>Directions</h1>
          <p>{mealInfo.strInstructions}</p>
        </div>
      )}
    </section>
  );
}

export default Meal;
