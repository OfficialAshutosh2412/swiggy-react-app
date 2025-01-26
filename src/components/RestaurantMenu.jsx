import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const mainID = id
    .split("")
    .filter((chars) => !isNaN(chars))
    .splice(-6)
    .join("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [discoutnData, setDiscountData] = useState([]);

  async function fetchMenu(mainID) {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8205792&lng=80.8715759&restaurantId=${mainID}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    return data;
  }
  async function dataExtractionMethod(mainID) {
    const apiData = await fetchMenu(mainID);
    //info
    setRestaurantData(apiData?.data?.cards[2]?.card?.card?.info);
    console.log(restaurantData);
    setDiscountData(
      apiData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setMenu(
      apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card
    );
  }
  useEffect(() => {
    dataExtractionMethod(mainID);
  }, []);

  return (
    <>
      <div>
        <div className="w-[800px] m-auto bg-danger-100">
          <p className="text-xs font-semibold mt-6 text-slate-400">
            <span className="hover:text-slate-500">
              <Link to={"/"}>Home</Link>
            </span>{" "}
            {"/"}{" "}
            <span className="hover:text-slate-500">
              <Link to={"/"}>{restaurantData?.city}</Link>
            </span>{" "}
            {"/"} <span className="text-slate-700">{restaurantData?.name}</span>
          </p>
          <h1 className="text-2xl font-bold mt-6 ml-3">
            {restaurantData?.name}
          </h1>
          <div className="w-full h-auto bg-gradient-to-t from-gray-300 rounded-[30px] p-4 pt-0 mt-6">
            <div className="flex-col w-full  bg-white rounded-[30px] p-4 border border-gray-300">
              <div className="flex items-center gap-1 font-bold text-lg">
                <span className="pt-1">
                  <i className="fi fi-sr-circle-star text-green-600"></i>
                </span>
                <span>{restaurantData?.avgRating}</span>
                <span>({restaurantData?.totalRatingsString})</span>
                <span className="text-gray-500">
                  <i className="fi fi-ss-circle text-[4px] px-1"></i>
                </span>
                <span>{restaurantData?.costForTwoMessage}</span>
              </div>
              <p className="text-orange-400 font-semibold underline">
                {restaurantData?.cuisines?.join(", ")}
              </p>
              <div className="flex items-center gap-1 mt-3">
                <div className="flex flex-col items-center w-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-[2px] h-6 bg-gray-300"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="text-sm">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Outlet</span>
                    <span>{restaurantData?.locality}</span>
                    <span className="text-red-300 cursor-pointer text-md hover:text-red-600">
                      ▾
                    </span>
                  </p>
                  <p className="font-semibold pt-3">
                    {restaurantData?.sla?.slaString}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
