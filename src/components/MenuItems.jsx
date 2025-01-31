import React, { useState } from "react";

const MenuItems = ({
  vegClassifier,
  name,
  defaultPrice,
  price,
  rating,
  ratingCountV2,
  description,
  imageId,
}) => {
  const [isMore, setIsMore] = useState(false);
  return (
    <>
      <div className="w-[70%] h-full ">
        {vegClassifier !== "NONVEG" ? (
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-4"
            />
          </div>
        ) : (
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7oKgiGVRSI8i7LGxP3JkW3h-h67U1HIerfKqSh9S8Z6dqTgUCn0IDfWoZdWvzDOMUwE&usqp=CAU"
              alt=""
              className="w-4"
            />
          </div>
        )}

        <h1 className="font-bold text-gray-600 text-lg">{name}</h1>
        <h2 className=" text-black font-bold">
          ₹&nbsp;{defaultPrice / 100 || price / 100}
        </h2>
        {rating !== undefined ? (
          <div className="flex items-center my-2">
            <div
              className={`
                    ${rating > 4 ? "text-green-900" : ""}
                    ${rating >= 4 && rating <= 4.5 ? "text-green-700" : ""}
                    ${rating >= 3 && rating <= 4 ? "text-green-500" : ""}
                    ${rating >= 2.5 && rating < 3 ? "text-orange-300" : ""}
                    ${rating >= 2 && rating < 2.5 ? "text-orange-500" : ""}
                    ${rating < 2 ? "text-red-500" : ""}
                    flex items-center font-bold text-sm`}
            >
              <i class="fi fi-ss-star text-xs pt-0.5"></i>
              <div>&nbsp;{rating || ""}</div>
            </div>

            <span className="text-sm font-semibold">({ratingCountV2})</span>
          </div>
        ) : (
          ""
        )}
        <div className="w-full flex items-end justify-start text-sm text-gray-500">
          <p className={`${isMore ? "" : "line-clamp-2"}`}>{description}</p>
          <span>
            <button className="font-bold" onClick={() => setIsMore(!isMore)}>
              {description.length > 190 ? (isMore ? "less" : "more") : ""}
            </button>
          </span>
        </div>
      </div>
      <div className="w-[30%] relative h-full flex justify-center items-start">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          alt=""
          className="w-[150px] h-[150px] object-cover object-center rounded-xl"
        />
        <button className="border-2 border-gray-200 px-10 py-2 rounded-xl font-bold uppercase absolute bottom-[50px] left-1/2 -translate-x-1/2 text-green-500 bg-white drop-shadow shadow-gray-500">
          add
        </button>
      </div>
    </>
  );
};

export default MenuItems;
