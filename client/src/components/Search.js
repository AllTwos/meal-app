import { useGlobalContext } from "../context";

function Search() {
  const { handleSearch, handleSubmit, search } = useGlobalContext();

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <h1>Type Your Ingredient(s) In!</h1>
        <input
          onChange={handleSearch}
          name="search"
          type="text"
          value={search}
          placeholder="use commas, no spaces"
        />
        <button className="btn" type="submit">
          Find my dinner
        </button>
      </form>
    </section>
  );
}

export default Search;
