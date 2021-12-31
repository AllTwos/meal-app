import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/meal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          endpoint: "filter",
          params: search,
        }),
      });

      const res = await response.json();
      setMeals(res.data.meals);
      console.log(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Write Something</h1>
        <input
          onChange={handleSearch}
          name="search"
          type="text"
          value={search}
          placeholder="type food"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
