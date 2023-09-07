import PropTypes from "prop-types";

Star.propTypes = {
  starCount: PropTypes.number,
  fill: PropTypes.number,
  customClass: PropTypes.string,
};

function Star({ starCount, fill, customClass }) {
  let starsArr = Array.from({ length: starCount });

  return starsArr.map((el, i) => {
    return (
      <i
        className={
          i + 1 <= fill
            ? ` bi bi-star-fill pe-2 ${customClass}`
            : "bi bi-star pe-2"
        }
        key={i}
      ></i>
    );
  });
}

export default Star;

