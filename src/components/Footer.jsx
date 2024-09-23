import { youtubeIcon, xIcon, linkedinIcon, instagramIcon } from "../assets";
import IconButton from "./IconButton";

const Footer = () => {
  return (
    <footer className="bg-accent p-8">
      <div className="flex flex-col md:flex-row  gap-4 items-center justify-around">
        <div className="">
          <h1 className=" text-sm font-primary font-black">
            Architectura, Pvt Ltd.
          </h1>
          <span className=" font-secondary text-xs text-spanretty">
            Crafting spaces that elevate life. We specialize in residential,
            commercial, and interior design services.
          </span>
          <ul className="font-semibold mt-2">
            <li className="text-xs font-secondary">+1 234 567 890</li>
            <li className="text-xs font-secondary">
              123 Main Street, New York, NY 10001
            </li>
            <li className="text-xs font-secondary">contact@architectura.com</li>
          </ul>
        </div>

        <div className="mt-3 mb-3 flex flex-row gap-x-8 md:gap-x-20 justify-around w-full md:w-auto">
          <div className="flex flex-col gap-y-2.5 border-l border-secondary pl-2">
            <h1 className="font-secondary text-base lg:text-xl font-bold underline">
              Quick Links
            </h1>
            <div className=" flex flex-col">
              <a href="/">
                <span className="text-sm font-secondary font-semibold">
                  Home
                </span>
              </a>
              <a href="#">
                <span className="text-sm font-secondary font-semibold">
                  Services
                </span>
              </a>
              <a href="#">
                <span className="text-sm font-secondary font-semibold">
                  Projects
                </span>
              </a>
              <a href="#">
                <span className="text-sm font-secondary font-semibold">
                  About Us
                </span>
              </a>
              <a href="#">
                <span className="text-sm font-secondary font-semibold">
                  Portfolio
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col border-l border-secondary pl-2">
            <h1 className="font-secondary text-base lg:text-xl font-bold underline">
              Projects
            </h1>
            <ul className="mt-5">
              <li>
                <span className="text-sm font-secondary font-semibold">
                  Residential
                </span>
              </li>
              <li>
                <span className="text-sm font-secondary font-semibold">
                  Commercial
                </span>
              </li>
              <li>
                <span className="text-sm font-secondary font-semibold">
                  Interior Design
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-2">
          <IconButton icon={youtubeIcon} />
          <IconButton icon={xIcon} />
          <IconButton icon={linkedinIcon} />
          <IconButton icon={instagramIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
