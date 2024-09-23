import {
  bloomBG,
  bloomGif,
  heroImg,
  instagramIcon,
  xIcon,
  linkedinIcon,
  youtubeIcon,
} from "../assets";
import CustomButton from "./CustomButton";
import IconButton from "./IconButton";

const Hero = () => {
  return (
    <div className="w-5/6 lg:w-4/6 mx-auto p-5 flex flex-col lg:flex-row items-center justify-between ">
      <div className="flex flex-col gap-y-10 mb-3 items-start justify-between">
        {/* Headline and Sub-headline text  */}
        <span className="text-3xl font-primary font-extrabold text-secondary">
          Designing <br /> the Future of{" "}
          <span className="text-ternary font-secondary"> Living Spaces.</span>
        </span>
        <p className="text-sm font-medium font-secondary">
          We create <br />
          <span className="text-3xl font-bold text-ternary">
            modern, functional, and aesthetically
          </span>
          <br />
          <span className="text-base">
            inspiring spaces that elevate everyday life.
          </span>
        </p>

        {/* Call-To-Action buttons */}
        <div className="flex gap-x-8">
          <CustomButton label="Explore" variant="filled" />
          <CustomButton label="Learn More" variant="outlined" />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-x-4 mt-4">
          <IconButton icon={youtubeIcon} alt="youtube" to="#" />
          <IconButton icon={linkedinIcon} alt="linkedin" to="#" />
          <IconButton icon={xIcon} alt="x" to="#" />
          <IconButton icon={instagramIcon} alt="instagram" to="#" />
        </div>
      </div>

      {/* Hero Section with image and animated(gifs) */}
      <div className="relative w-full lg:w-auto">
        <img src={heroImg} alt="hero-image" className="w-fit lg:w-96 mx-auto" />
        <img
          src={bloomGif}
          alt="bloom-animation"
          className="absolute z-10 top-0 right-40 lg:right-0 w-32"
        />
        <img
          src={bloomBG}
          alt="bloom-background"
          className="absolute z-0 top-1/4 left-0 md:left-1/4 w-94"
        />
      </div>
    </div>
  );
};

export default Hero;
