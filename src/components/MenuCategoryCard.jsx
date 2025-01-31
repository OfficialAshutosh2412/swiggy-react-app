import React from "react";
import MenuItems from "./MenuItems";

const MenuCategoryCard = ({ title, menuData, index }) => {
  // menuData.map(({ title, itemCards }) => {
  //   return itemCards.map(({ card: { info } }) => {
  //     console.log(info.name);
  //   });
  // });
  return (
    <div key={index} className="">
      <h1 className="flex items-center justify-between mt-5 font-bold text-lg capitalize w-full">
        {title}
      </h1>
      <div>
        {menuData.map(({ title, itemCards }) => {
          return (
            <div className="">
              <h2 className="text-sm font-bold justify-between items-center">
                {title}({itemCards.length})
                <i className="fi fi-ss-angle-down"></i>
              </h2>
              <div className={``}>
                {itemCards.map(
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
                  }) => (
                    <div
                      key={id}
                      className={`border-b-2 border-gray-300 flex items-center gap-2 w-full h-[220px] mt-8`}
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
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div>
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
                className={`border-b-2 border-gray-300 flex items-center gap-2 w-full h-[220px] mt-8`}
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
      </div> */}
    </div>
  );
};

export default MenuCategoryCard;
