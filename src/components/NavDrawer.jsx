import PropTypes from "prop-types";

import { useEffect } from "react";
import { close } from "../assets";

const Navdrawer = ({ children, toggleDrawer }) => {
  // useEffect for capturing clicks outside the menu to close the drawer.
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "navdrawer-overlay") {
        toggleDrawer();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [toggleDrawer]);

  return (
    <div
      id="navdrawer-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex"
    >
      {/* Drawer element */}
      <div
        className="h-full w-64 bg-white p-4 shadow-lg transform transition-all duration-300 translate-x-0 left-0"
        style={{ right: 0, position: "fixed" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-lg font-bold text-secondary uppercase">Menu</h1>
          <button
            onClick={toggleDrawer}
            className="text-right text-lg font-bold text-gray-600"
          >
            <img src={close} alt="close-icon" className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links as children  */}
        <div className="flex flex-col ">{children}</div>
      </div>
    </div>
  );
};
Navdrawer.propTypes = {
  children: PropTypes.node,
  toggleDrawer: PropTypes.func,
};

export default Navdrawer;
