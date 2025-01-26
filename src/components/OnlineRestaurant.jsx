import React from "react";
import RestaurantCard from "./RestaurantCard";

const OnlineRestaurant = ({ cardData: { cardOne }, wid }) => {
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold mb-3">
        Restaurants with online food delivery in Lucknow
      </h1>
      <div className="grid grid-cols-4 gap-3">
        {cardOne.map(({ info, cta }, index) => (
          <RestaurantCard key={index} infos={info} urlInfo={cta} />
        ))}
      </div>
    </div>
  );
};

export default OnlineRestaurant;
