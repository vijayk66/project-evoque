import PropTypes from "prop-types";

InputRadio.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.any,
  onChangeFn: PropTypes.func,
  htmlForAtt: PropTypes.string,
  labelText: PropTypes.any,
  children: PropTypes.any,
};

function InputRadio({
  className,
  type,
  name,
  id,
  value,
  checked,
  onChangeFn,
  htmlForAtt,
  labelText = "",
  children,
}) {
  return (
    <div className="text-nowrap">
      <input
        className={className}
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChangeFn}
      />
      <label htmlFor={htmlForAtt}>
        {labelText}
        {children}
      </label>
    </div>
  );
}

export default InputRadio;
