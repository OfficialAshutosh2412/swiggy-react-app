import React, { useState } from "react";
import MenuItems from "./MenuItems";

const MenuItemCard = ({ menuData, title, index }) => {
  const [hide, setHide] = useState(true);
  return (
    <div key={index}>
      <h1
        className="flex items-center justify-between mt-3 mb-3 font-bold text-lg capitalize cursor-pointer"
        onClick={() => setHide(!hide)}
      >
        {title} ({menuData.length})<i className="fi fi-ss-angle-down"></i>
      </h1>
      <div>
        {menuData.map(
          ({
            card: {
              info: {
                id,
                imageId,
                name,
                defaultPrice,
                price,
                ratings: {
                  aggregatedRating: { rating, ratingCountV2 },
                },
                description,
                itemAttribute: { vegClassifier },
              },
            },
          }) => {
            return (
              <div
                key={id}
                className={`border-b-2 border-gray-300 flex items-center gap-2 w-full h-[220px] mt-8 ${
                  hide ? "" : "hidden"
                }`}
              >
                <MenuItems
                  vegClassifier={vegClassifier}
                  name={name}
                  defaultPrice={defaultPrice}
                  price={price}
                  rating={rating}
                  ratingCountV2={ratingCountV2}
                  description={description}
                  imageId={imageId}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
