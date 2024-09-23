import PropTypes from "prop-types";

const CustomButton = ({
  label,
  variant,
  type = "button",
  customStyles,
  handleClick,
}) => {
  const buttonStyle = {
    filled:
      "bg-ternary border border-ternary text-primary hover:border hover:border-secondary hover:scale-105 transition-all",
    outlined:
      "border border-secondary text-secondary hover:text-ternary hover:border-ternary hover:scale-105 transition-all",
  };

  return (
    <button
      className={`px-2 py-1 rounded text-sm md:text-base font-semibold font-primary ${buttonStyle[variant]} ${customStyles} `}
      type={type}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  customStyles: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CustomButton;
