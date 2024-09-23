import PropTypes from "prop-types";

const IconButton = ({ icon, alt, to }) => {
  return (
    <a href={to || "#"} role="button">
      <img
        src={icon}
        alt={alt}
        className="w-8 h-8 hover:scale-110 transition-all"
      />
    </a>
  );
};
IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  to: PropTypes.string,
};

export default IconButton;
