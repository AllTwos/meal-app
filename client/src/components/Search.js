import { useGlobalContext } from "../context";

function Search() {
  const { handleSearch, handleSubmit, search } = useGlobalContext();

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <h1>This Will Be Dinner Today!</h1>
        <input
          onChange={handleSearch}
          name="search"
          type="text"
          value={search}
          placeholder="use commas with no spaces for multi ingredients"
        />
        <small></small>
        <button className="btn" type="submit">
          Find my dinner
        </button>
      </form>
    </section>
  );
}

export default Search;
