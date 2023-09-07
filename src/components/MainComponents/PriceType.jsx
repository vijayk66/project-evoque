import { useContext } from "react";
import { ProductContext } from "../customContext/ProductContext";
import InputRadio from "../customComponents/InputRadio";

function PriceType() {
  const { selectedPrice, dispatch } = useContext(ProductContext);

  const handleRating = (e) => {
    dispatch({ type: "price", payload: Number(e.target.value) });
  };

  return (
    <div className="col-4 col-sm-5 ">
      <h2 className="fs-4 fw-bold mb-4">Price Type</h2>
      <form className="d-flex flex-column gap-3 fs-4">
        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"allPriceType"}
          value={"0"}
          checked={selectedPrice === 0}
          onChangeFn={handleRating}
          htmlForAtt={"allPriceType"}
        >
          All
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"trailAccess"}
          value={"1"}
          checked={selectedPrice === 1}
          onChangeFn={handleRating}
          htmlForAtt={"trailAccess"}
        >
          Trial Access
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"freeAccess"}
          value={"2"}
          checked={selectedPrice === 2}
          onChangeFn={handleRating}
          htmlForAtt={"freeAccess"}
        >
          Free
        </InputRadio>
      </form>
    </div>
  );
}

export default PriceType;
