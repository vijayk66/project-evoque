import { useContext } from "react";
import { ProductContext } from "../customContext/ProductContext";
import InputRadio from "../customComponents/InputRadio";

function ApplicationType() {
  const { selectedAppType, dispatch } = useContext(ProductContext);

  const handleRating = (e) => {
    dispatch({ type: "appType", payload: Number(e.target.value) });
  };

  return (
    <div>
      <h2 className="fs-4 fw-bold mb-4">Application type</h2>
      <form className="d-flex flex-column gap-3 fs-4">
        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"allApplication"}
          value={"0"}
          checked={selectedAppType === 0}
          onChangeFn={handleRating}
          htmlForAtt={"allApplication"}
        >
          All
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"webBased"}
          value={"1"}
          checked={selectedAppType === 1}
          onChangeFn={handleRating}
          htmlForAtt={"webBased"}
        >
          Web based applications
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"mobileBased"}
          value={"2"}
          checked={selectedAppType === 2}
          onChangeFn={handleRating}
          htmlForAtt={"mobileBased"}
        >
          Mobile based applications
        </InputRadio>
      </form>
    </div>
  );
}

export default ApplicationType;
