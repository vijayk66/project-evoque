import PropTypes from "prop-types";

Button.propTypes = {
  btnStyle: PropTypes.string,
  children: PropTypes.any,
  onClickFn: PropTypes.func,
};

function Button({ btnStyle, children, onClickFn = () => {} }) {
  return (
    <button className={btnStyle} onClick={onClickFn}>
      {children}
    </button>
  );
}

export default Button;
