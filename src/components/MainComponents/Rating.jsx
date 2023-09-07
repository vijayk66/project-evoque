import { useContext } from "react";
import Star from "../customComponents/Star";
import { ProductContext } from "../customContext/ProductContext";
import InputRadio from "../customComponents/InputRadio";

function Rating() {
  const { selectedRating, dispatch } = useContext(ProductContext);

  const handleRating = (e) => {
    dispatch({ type: "rating", payload: Number(e.target.value) });
  };

  return (
    <div>
      <h2 className="fs-4 fw-bold mb-4">Rating By</h2>
      <form className="d-flex flex-column gap-3 fs-4">
        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"allRating"}
          value={"0"}
          checked={selectedRating === 0}
          onChangeFn={handleRating}
          htmlForAtt={"allRating"}
        >
          All
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"fourstar"}
          value={"4"}
          checked={selectedRating === 4}
          onChangeFn={handleRating}
          htmlForAtt={"fourstar"}
        >
          <Star starCount={5} fill={4} customClass={"fill"} /> & above
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"3star"}
          value={"3"}
          checked={selectedRating === 3}
          onChangeFn={handleRating}
          htmlForAtt={"3star"}
        >
          <Star starCount={5} fill={3} customClass={"fill"} /> & above
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"2star"}
          value={"2"}
          checked={selectedRating === 2}
          onChangeFn={handleRating}
          htmlForAtt={"2star"}
        >
          <Star starCount={5} fill={2} customClass={"fill"} /> & above
        </InputRadio>

        <InputRadio
          className={"me-2"}
          type={"radio"}
          name={"select"}
          id={"star"}
          value={"1"}
          checked={selectedRating === 1}
          onChangeFn={handleRating}
          htmlForAtt={"star"}
        >
          <Star starCount={5} fill={1} customClass={"fill"} /> & above
        </InputRadio>
      </form>
    </div>
  );
}

export default Rating;
