import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ infos, urlInfo }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    aggregatedDiscountInfoV3,
    costForTwo,
    locality,
  } = infos;
  const { link } = urlInfo;
  const urlID = link.split("/").at(-1);
  return (
    <Link to={`/restaurant-menu/${urlID}`} key={id}>
      <div
        className={`w-52 m-2 break-words text-wrap hover:scale-110 duration-300 ease-in-out`}
      >
        <div
          className="h-28 w-full bg-no-repeat bg-center object-cover bg-cover rounded-xl overflow-hidden text-white font-bold capitalize"
          style={{
            backgroundImage: `Url("https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}")`,
          }}
        >
          <h1 className="h-full flex w-full items-end bg-gradient-to-t from-black from-1% to-trransparent to-40% pl-3">
            <span>
              {aggregatedDiscountInfoV3
                ? aggregatedDiscountInfoV3?.header +
                  aggregatedDiscountInfoV3?.subHeader
                : costForTwo}
            </span>
          </h1>
        </div>
        <div className=" pl-1 w-full">
          <h3 className="text-sm text-gray-700 font-semibold mt-3 capitalize line-clamp-1">
            {name}
          </h3>
          <p className="flex items-center justify-start text-gray-700 font-semibold">
            <span className="">
              <i className="fi fi-sr-circle-star text-green-600 text-xs"></i>
            </span>
            <span className="text-sm pl-1">{avgRating}</span>
            <span className="pl-2" style={{ fontSize: "4pt" }}>
              <i className="fi fi-ss-circle"></i>
            </span>
            <span className="text-sm pl-2">{sla?.slaString}</span>
          </p>
          <p className="text-gray-700/70 text-xs capitalize w-full line-clamp-1 ">
            {cuisines.join(", ")}
          </p>
          <p className="text-gray-700/70 text-xs capitalize font-semibold">
            <i className="fi fi-sr-marker text-red-500"></i>
            {locality}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
