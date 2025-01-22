import React, { useState } from "react";
import ItemCarousel from "./ItemCarousel";
import TopRestaurant from "./TopRestaurant";
const Carousel = ({ cardData, comp }) => {
  const [scrollValue, setScrollValue] = useState(0);
  function handleNext() {
    setScrollValue(100);
    console.log(scrollValue);
  }
  function handlePrev() {
    setScrollValue(0);
  }
  return (
    <section className=" mt-5 ">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{cardData.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className={`w-7 h-7 rounded-full shadow-md  ${
              scrollValue === 0
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-200 text-black active:bg-gray-300 active:scale-95"
            } p-1`}
          >
            <i className="fi fi-rs-arrow-small-left"></i>
          </button>
          <button
            onClick={handleNext}
            className={`w-7 h-7 rounded-full shadow-md ${
              scrollValue === 100
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-200 text-black active:bg-gray-300 active:scale-95"
            } p-1  `}
          >
            <i className="fi fi-rr-arrow-small-right"></i>
          </button>
        </div>
      </div>
      <div className=" overflow-hidden">
        <div
          style={{ translate: `-250%` }}
          className={`bg-black flex items-center gap-3 duration-500 ease-in-out`}
        >
          {comp}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
