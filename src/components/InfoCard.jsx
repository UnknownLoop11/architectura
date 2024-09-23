import PropTypes from "prop-types";

const InfoCard = ({ title, children }) => {
  return (
    <div className="sm:w-full md:w-1/2 p-1.5 border-2 border-ternary">
      <p className="font-primary text-lg font-semibold text-center border-b border-ternary">
        {title}
      </p>
      <div className="p-1 text-sm font-secondary">{children}</div>
    </div>
  );
};
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default InfoCard;
