/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

import { useState } from "react";
import { arrowLeft, arrowRight } from "../assets";

const Carousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === testimonials.length - 1 ? 0 : prevState + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? testimonials.length - 1 : prevState - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg bg-accent bg-opacity-40 md:px-10 py-16">
      {/* Carousel Container */}
      <h1 className="text-2xl font-primary font-bold text-center mb-10 mx-4">
        Trusted by millions of users worldwide
      </h1>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Carousel Items */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="px-8 md:px-16 py-5 flex flex-col gap-y-2.5 items-center mx-10 mb-10 border-2 rounded-lg border-ternary">
                <p className="text-secondary italic">"{testimonial.desc}"</p>
                <div className="flex flex-row items-center gap-x-4">
                  <img
                    src={testimonial.img}
                    alt="user-img"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="flex flex-col gap-y-1">
                    <span className="text-base font-semibold font-primary leading-none">
                      {testimonial.name}
                    </span>
                    <span className="text-xs font-secondary leading-none">
                      {testimonial.title}, {testimonial.org}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="bg-white bg-opacity-50 p-2 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        <img src={arrowLeft} alt="arrow-left" />
      </button>
      <button
        onClick={nextSlide}
        className="bg-white bg-opacity-50 p-2 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        <img src={arrowRight} alt="arrow-right" width={20} />
      </button>

      {/* Carousel Indicators */}

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-x-2 p-5">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full bg-ternary bg-opacity-50 ${
              index === currentIndex ? "bg-opacity-100" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
Carousel.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default Carousel;
