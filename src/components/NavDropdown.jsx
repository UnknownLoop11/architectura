import PropTypes from "prop-types";

import { useState } from "react";
import { expandIcon, collapseIcon } from "../assets";

// Navigation Dropdown Component
const NavDropdown = ({ children, label }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <button
      className="cursor-pointer relative inline-block m-1.5 text-secondary hover:text-ternary font-semibold transition-all"
      type="button"
      onMouseEnter={() => setShowDropdown(true)} // on hover
      onMouseLeave={() => setShowDropdown(false)} // on hover exit
    >
      <span className="flex items-center gap-x-0.5">
        {label}
        <img
          src={showDropdown ? collapseIcon : expandIcon}
          alt="expand"
          className="w-4 h-4"
        />
      </span>

      {/* NavLink elements passed as children  */}
      <div
        className={`absolute z-10 w-auto bg-primary border border-secondary p-1.5 flex flex-col items-center gap-y-0.5 transition-opacity duration-300 ${
          showDropdown ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {children}
      </div>
    </button>
  );
};
NavDropdown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

export default NavDropdown;
