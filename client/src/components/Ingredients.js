import { useGlobalContext } from "../context";

function Ingredients() {
  const { measurements, ingredients } = useGlobalContext();

  return (
    <section className={ingredients.length > 0 ? "ingredients" : ""}>
      {/* ingredients */}
      {ingredients.map((ingredient, idx) => {
        const measurement1 = measurements.map((measurement, index) => {
          if (idx === index) {
            return measurement;
          }
        });
        return (
          <div className="ingredient-control" key={ingredient}>
            <p className="measurement">{measurement1}</p>
            <h3 className="ingredient">{ingredient}</h3>
          </div>
        );
      })}
    </section>
  );
}

export default Ingredients;
