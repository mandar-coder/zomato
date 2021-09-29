import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

function RestaurantCard(props) {
  const [isPro] = useState(true);
  const [isOff] = useState(true);

  return (
    <Link to={`/restaurant/212432ffsdfa}`} className="w-full md:w-1/2 lg:w-1/3">
      <div className="bg-white p-4 mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-xl ">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex items-start flex-col gap-2">
              {props.isPro && (
                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                  Pro extra 10% off
                </span>
              )}

              {props.isOff && (
                <span className="bg-zomato-600 text-white px-2 py-1 rounded text-sm">
                  $20 OFF
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded mr-3">
              {props.durationOfDelivery} min
            </span>
          </div>
          <img
            src="https://b.zmtcdn.com/data/pictures/chains/4/19661324/959304c2344b505fcbb87fbc3496644d_o2_featured_v2.jpg"
            alt="food"
            className="w-full h-full rounded-2xl object-center object-cover"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">The Indo-Asian Kitchen</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
              {props.restaurantReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
          <p>{props.cuisine.join(", ")}</p>
        <p>${props.averageCost} for one </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;