import { useEffect, useState } from "react";
import { menuIcon, logo } from "../assets";
import Navlink from "./Navlink";
import NavDropdown from "./NavDropdown";
import CustomButton from "./CustomButton";
import Navdrawer from "./Navdrawer";

// Navigation links and labels
const NavBody = () => {
  return (
    <>
      <Navlink label="Home" to="/" />
      <Navlink label="About" />
      <NavDropdown label="Services">
        <Navlink label="Design" inline={false} />
        <Navlink label="Build" inline={false} />
        <Navlink label="Renovate" inline={false} />
      </NavDropdown>
      <NavDropdown label="Projects">
        <Navlink label="Residential" inline={false} />
        <Navlink label="Commercial" inline={false} />
      </NavDropdown>
      <Navlink label="Contact" />
    </>
  );
};

// Main Header Component
const Header = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [showDrawer, setShowDrawer] = useState(false);

  // useEffect to handle and store the device width resize state
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle drawer function
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <header>
        <div className="flex flex-row sm:mx-3 justify-between lg:justify-around items-center p-2.5 m-1.5 shadow-lg bg-primary">
          <div className="flex items-center gap-x-2">
            {/* Navigation Drawer logo button (for tablets and smaller devices) */}
            {deviceWidth < 1024 && (
              <div className="m-0.5">
                <button className="" onClick={toggleDrawer}>
                  <img src={menuIcon} alt="menu" />
                </button>
              </div>
            )}

            <img src={logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-secondary text-xl md:text-2xl font-bold">
              Architectura
            </h1>
          </div>

          {/* Main Navbar element */}
          <nav className="flex gap-x-8 items-center justify-between">
            {/* Navigation links are made visible in the header,
             (for larger devices such as laptops,Desktops, etc.) */}
            {deviceWidth >= 1024 && (
              <ul>
                <NavBody />
              </ul>
            )}

            <div className="flex gap-x-3.5 mr-5 lg:mr-0">
              <CustomButton label="Login" variant="outlined" />
              <CustomButton label="Sign Up" variant="filled" />
            </div>
          </nav>
        </div>
      </header>

      {/* Navigation Drawer component for smaller devices */}
      {showDrawer && (
        <Navdrawer toggleDrawer={toggleDrawer}>
          <ul className="flex flex-col gap-y-3 items-center">
            <NavBody />
          </ul>
        </Navdrawer>
      )}
    </>
  );
};

export default Header;
