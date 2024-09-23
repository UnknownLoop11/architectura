import PropTypes from "prop-types";

const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col items-center gap-y-1.5 w-72 shadow-lg rounded-b-2xl">
      <img
        src={img}
        alt={title}
        className="w-full bg-accent h-52 rounded-t-3xl"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <hr className="w-full " />
      <p className="text-gray-500 px-2.5 py-3.5">{description}</p>
    </div>
  );
};
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServiceCard;
