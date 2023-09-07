import { useContext } from "react";
import { ProductContext } from "../customContext/ProductContext";

function Sort() {
  const { selectedSort, dispatch } = useContext(ProductContext);

  const handleChange = (e) => {
    dispatch({ type: "sorting", payload: Number(e.target.value) });
  };

  return (
    <form className="d-flex  justify-content-end align-items-center gap-3 fs-4">
      <label className="input-label w-50 fw-semibold text-end">
        Sort By :{" "}
      </label>
      <select
        className="form-select w-auto shadow-lg border-0 fs-4"
        value={selectedSort}
        onChange={handleChange}
      >
        <option value="1">Newly Added</option>
        <option value="2">Top Rated</option>
        <option value="3">Top Performing</option>
        <option value="4">Name</option>
        <option value="5">Price Low to High</option>
        <option value="6">Price High to Low</option>
      </select>
    </form>
  );
}

export default Sort;
