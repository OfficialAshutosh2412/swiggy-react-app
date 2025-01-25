import React, { useEffect, useState, Suspense } from "react";
import ItemCarousel from "./ItemCarousel";
import TopRestaurant from "./TopRestaurant";
import OnlineRestaurant from "./OnlineRestaurant";

const Body = () => {
  //first card state
  const [firstCardData, setFirstCardData] = useState({
    title: "",
    cardZero: [],
  });
  const [secondCardData, setSecondCardData] = useState({
    title: "",
    cardOne: [],
  });
  //api call function
  async function fetchApiData() {
    const res = await fetch(
      "https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=26.8205792&lng=80.8715759&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGt"
    );
    const jsonifyData = await res.json();
    return jsonifyData;
  }

  //pai data extraction
  async function DataExtraction() {
    const apiCall = await fetchApiData();
    const returendObject = {
      title: apiCall.data.cards[0].card.card.header.title,
      cardZero: apiCall.data.cards[0].card.card.imageGridCards.info,
    };
    const returendObjectTwo = {
      title: apiCall.data.cards[1].card.card.header.title,
      cardOne:
        apiCall.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    };
    setFirstCardData(returendObject);
    setSecondCardData(returendObjectTwo);
  }

  //onload functions
  useEffect(() => {
    DataExtraction();
  }, []);
  return (
    <main className="w-4/5 m-auto">
      <ItemCarousel cardData={firstCardData} />
      <div className="border-2 border-gray-100 my-4"></div>
      <TopRestaurant cardData={secondCardData} />
      <div className="border-2 border-gray-100 my-4"></div>
      {/* <OnlineRestaurant cardData={secondCardData} />
      <div className="border-2 border-gray-100 my-4"></div> */}
    </main>
  );
};

export default Body;
