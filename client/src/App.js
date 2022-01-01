import Search from "./components/Search";
import Meal from "./components/Meal";
import { useGlobalContext } from "./context";
import "./css/styles.css";

function App() {
  const { meal, ingredients, error } = useGlobalContext();
  return (
    <div className="container">
      <Search />
      {error && <h1 className="error">Try again!</h1>}
      {meal && <Meal />}
    </div>
  );
}

export default App;
