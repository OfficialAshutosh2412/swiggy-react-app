import React, { useEffect, useState } from "react";
import ItemCarousel from "./ItemCarousel";

const Body = () => {
  //first card state
  const [firstCardData, setFirstCardData] = useState({
    title: "",
    cardZero: [],
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
    setFirstCardData(returendObject);
  }

  //onload functions
  useEffect(() => {
    DataExtraction();
  }, []);
  return (
    <main className="w-4/5 m-auto">
      <ItemCarousel cardData={firstCardData} />
    </main>
  );
};

export default Body;
