import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  const mainID = id
    .split("")
    .filter((chars) => !isNaN(chars))
    .splice(-6)
    .join("");

  async function fetchMenu(mainID) {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8205792&lng=80.8715759&restaurantId=${mainID}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await res.json();
    return data;
  }
  async function dataExtractionMethod(mainID) {
    const apiData = await fetchMenu(mainID);

    apiData?.data?.cards.map((items) => {
      console.log(items);
    });
  }
  useEffect(() => {
    dataExtractionMethod(mainID);
  }, []);

  return (
    <>
      <div>RestaurantMenu : : : {mainID}</div>
      <div>{}</div>
    </>
  );
};

export default RestaurantMenu;
