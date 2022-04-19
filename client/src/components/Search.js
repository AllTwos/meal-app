import { useGlobalContext } from "../context";

function Search() {
  const { handleSearch, handleSubmit, search } = useGlobalContext();

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <h1>Type Your Ingredient(s) In!</h1>
        <small style={{ margin: "0.7rem", color: "grey" }}>
          *Not operational. If you're trying to use this, tell me to add api
          key.
        </small>
        <input
          onChange={handleSearch}
          name="search"
          type="text"
          value={search}
          placeholder="no space after commas"
        />
        <button className="btn" type="submit">
          Find my dinner
        </button>
      </form>
    </section>
  );
}

export default Search;
