import { useState } from "react";

const ItemCarousel = ({ cardData: { title, cardZero } }) => {
  const [scrollValue, setScrollValue] = useState(0);
  function handleNext() {
    scrollValue === 128
      ? setScrollValue(128)
      : setScrollValue((prev) => prev + 32);
  }
  function handlePrev() {
    scrollValue === 0 ? setScrollValue(0) : setScrollValue((prev) => prev - 32);
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
              scrollValue === 128
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
          className={`flex items-center gap-3 duration-500 ease-in-out mt-1`}
        >
          {cardZero.map(({ id, imageId }) => (
            <img
              key={id}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
              className="w-28"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemCarousel;
