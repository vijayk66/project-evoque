import { useContext } from "react";
import InputRadio from "../customComponents/InputRadio";
import { ProductContext } from "../customContext/ProductContext";

function DevelopedBy() {
  const { developedBy, dispatch } = useContext(ProductContext);

  const handleRating = (e) => {
    dispatch({ type: "developed", payload: Number(e.target.value) });
  };

  return (
    <div className="col-4 col-sm-5">
      <h2 className="fs-4 fw-bold mb-4 text-nowrap">Developed By</h2>
      <form className="d-flex flex-column gap-3 fs-4">
        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"developedByAll"}
          value={"0"}
          checked={developedBy === 0}
          onChangeFn={handleRating}
          htmlForAtt={"developedByAll"}
        >
          All
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"Investor"}
          value={"1"}
          checked={developedBy === 1}
          onChangeFn={handleRating}
          htmlForAtt={"Investor"}
        >
          Investor
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"Traders"}
          value={"2"}
          checked={developedBy === 2}
          onChangeFn={handleRating}
          htmlForAtt={"Traders"}
        >
          Traders
        </InputRadio>
        <InputRadio
          className={"me-2 text-nowrap"}
          type={"radio"}
          name={"select"}
          id={"Strategist"}
          value={"3"}
          checked={developedBy === 3}
          onChangeFn={handleRating}
          htmlForAtt={"Strategist"}
        >
          Strategist
        </InputRadio>
      </form>
    </div>
  );
}

export default DevelopedBy;
