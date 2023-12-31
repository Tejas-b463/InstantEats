import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constant";
import { RESTAURANT_MENU } from "../utils/constant";

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU)
      .then((response) => response.json())
      .then(
        (result) =>
          result?.data?.cards[4].card.card.gridElements.infoWithStyle
            .restaurants
      );
    setRestaurant(data);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {restaurant?.map((restaurant) => (
        <div key={restaurant.info.id}
        className="bg-gray-300 p-4 m-4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md shadow-md"
        >
          <img
            className="w-full h-auto mb-4 rounded-md"
            src={RESTAURANT_MENU_IMAGE_URL + restaurant.info.cloudinaryImageId}
          />
          <h2 className="text-lg font-semibold mb-2">{restaurant.info.name}</h2>
          <div>{restaurant.info.avgRating}</div>
          <p className="text-gray-600 mb-4">{restaurant.info.sla?.deliveryTime}</p>
          <span className="text-gray-600 mb-4">{restaurant.info.cuisines?.join(", ")}</span>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
