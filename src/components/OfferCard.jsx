import React, { useEffect, useState } from "react";

const OfferCard = ({ data: { header, offerLogo, couponCode, restId } }) => {
  // states variables
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  if (couponCode === undefined) {
    useEffect(() => {
      async function updateTimer() {
        const res = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8205792&lng=80.8715759&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const jsonData = await res.json();
        const newExpiryTime =
          jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.offers[0]?.info?.expiryTime;
        const date = new Date(newExpiryTime);
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        setHrs(hours);
        setMins(minutes);
        setSecs(seconds);
      }
      updateTimer();
      const timeInterval = setInterval(updateTimer, 1000);
      return () => clearInterval(timeInterval);
    }, []);
  }

  return (
    <div className="flex items-center w-[300px] whitespace-nowrap border gap-3 border-gray-300 rounded-3xl p-2 py-4">
      <div>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`}
          className="w-[50px]"
          alt=""
        />
      </div>
      <div>
        <div>
          <h1 className="font-extrabold text-md text-black">{header}</h1>
        </div>
        <div className="text-sm text-gray-500 font-semibold">
          {couponCode === undefined
            ? `ENDS IN ${hrs.toString().padStart(2, "0")}h : ${mins
                .toString()
                .padStart(2, "0")}m : ${secs.toString().padStart(2, "0")}s`
            : couponCode}
        </div>

        <p></p>
      </div>
    </div>
  );
};

export default OfferCard;
