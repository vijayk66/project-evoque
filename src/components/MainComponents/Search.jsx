import { useContext, useRef } from "react";
import { ProductContext } from "../customContext/ProductContext";

function Search() {
  const { query, dispatch } = useContext(ProductContext);
  const inputSearch = useRef(null);

  function handleChange(value) {
    dispatch({ type: "searchQuery", payload: value });
  }

  return (
    <form
      className="border rounded-2 py-2 w-100 d-flex"
      onSubmit={(e) => e.preventDefault()}
    >
      <i className="bi bi-search  px-3 fs-4 col-2 text-center"></i>
      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        className="border-0 inputFocus fs-4 text-truncate col-10 pe-2"
        type="search"
        placeholder="Search for products"
        ref={inputSearch}
      />
    </form>
  );
}

export default Search;
