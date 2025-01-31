import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OfferCard from "./OfferCard";
import MenuItemCard from "./MenuItemCard";
import MenuCategoryCard from "./MenuCategoryCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const mainID = id
    .split("")
    .filter((chars) => !isNaN(chars))
    .splice(-6)
    .join("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);
  const scrollingIndex = 120;
  function handleNext() {
    scrollValue === scrollingIndex
      ? setScrollValue(scrollingIndex)
      : setScrollValue((prev) => prev + 30);
    console.log(scrollValue);
  }
  function handlePrev() {
    scrollValue === 0 ? setScrollValue(0) : setScrollValue((prev) => prev - 30);
  }

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
    setDiscountData(
      apiData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    let filtered =
      (apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (data) => data?.card?.card?.itemCards || data?.card?.card?.categories
      );
    setMenu(filtered);
  }
  useEffect(() => {
    dataExtractionMethod(mainID);
  }, []);

  return (
    <>
      <div>
        <div className="w-[800px] m-auto bg-danger-100">
          <div>
            <p className="text-xs font-semibold mt-6 text-slate-400">
              <span className="hover:text-slate-500">
                <Link to={"/"}>Home</Link>
              </span>{" "}
              {"/"}{" "}
              <span className="hover:text-slate-500">
                <Link to={"/"}>{restaurantData?.city}</Link>
              </span>{" "}
              {"/"}{" "}
              <span className="text-slate-700">{restaurantData?.name}</span>
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
          {/* offers */}
          <div className="flex justify-between items-center mt-5">
            <div>
              <h3 className="text-lg font-bold pl-3">Deals for you</h3>
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
              <div className="flex whitespace-nowrap mt-3 gap-5">
                {discountData.map(({ info }, index) => (
                  <OfferCard data={info} key={index} />
                ))}
              </div>
            </div>
          </div>
          {/* menu */}
          <div className="mt-14">
            <h1 className=" flex items-center justify-center gap-2 text-gray-500">
              <i className="fi fi-bs-leaf -rotate-[135deg] text-xs"></i>
              <p className="uppercase text-md tracking-widest font-semibold">
                Menu
              </p>
              <i className="fi fi-bs-leaf text-xs rotate-[45deg] pt-1"></i>
            </h1>
            {/* search bar */}
            <div className="bg-gray-100 text-gray-500 p-2 text-md py-3 w-full rounded-xl font-bold relative text-center mt-3 cursor-pointer">
              <p>Search for dishes</p>
              <i className="fi fi-rr-search absolute top-1/2 -translate-y-1/2 bottom-0 right-2"></i>
            </div>
            <div>
              {menu.map(
                (
                  {
                    card: {
                      card: { itemCards, title, categories },
                    },
                  },
                  index
                ) => (
                  <div key={index}>
                    {itemCards ? (
                      <MenuItemCard
                        title={title}
                        menuData={itemCards}
                        index={index}
                      />
                    ) : (
                      <MenuCategoryCard
                        title={title}
                        menuData={categories}
                        index={index}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
