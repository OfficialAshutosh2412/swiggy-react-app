import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const TopRestaurant = ({ cardData: { title, cardOne } }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollingIndex = 330;
  function handleNext() {
    scrollValue === scrollingIndex
      ? setScrollValue(scrollingIndex)
      : setScrollValue((prev) => prev + 30);
  }
  function handlePrev() {
    scrollValue === 0 ? setScrollValue(0) : setScrollValue((prev) => prev - 30);
  }
  return (
    <section className=" mt-5 ">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
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
              scrollValue === scrollingIndex
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
          style={{ translate: `-${scrollValue}%` }}
          className={` flex items-center gap-3 duration-500 ease-in-out`}
        >
          <div className="flex whitespace-nowrap mt-3">
            {cardOne.map(({ info }) => (
              <RestaurantCard infos={info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRestaurant;
