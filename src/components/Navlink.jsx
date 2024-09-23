import PropTypes from "prop-types";

// Custom Navigation link component
// prop.inline - to turn the elemnet display to inline-block, when elements placed horizontally
const Navlink = ({ label, inline = true, to }) => {
  return (
    <li
      className={`${
        inline && "inline-block p-2.5 m-1.5"
      } px-1.5 py-0.5 rounded hover:text-ternary hover:border border-ternary text-secondary font-semibold cursor-pointer`}
    >
      <a
        href={to ? to : "#"}
        type="button"
        className="no-underline"
        style={{ userSelect: "none" }} // minor fix for mobile devices, disabled text select
      >
        {label}
      </a>
    </li>
  );
};
Navlink.propTypes = {
  label: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  to: PropTypes.string,
};

export default Navlink;
