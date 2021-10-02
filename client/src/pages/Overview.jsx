import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// Components
import { NextArrow, PrevArrow } from "../Components/CarouselArrows";
import MenuCollection from "../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../Components/Restaurant/MenuSimilarRestaurantCard";
import ReviewCard from "../Components/Restaurant/ReviewCard";
import MapView from "../Components/Restaurant/Mapview";

function Overview() {
  const { id } = useParams();

  const [menuImage, setMenuImages] = useState([
    "https://b.zmtcdn.com/data/menus/593/18233593/5b969d0a3ba13ae80c0df1e0d7447b02.jpg",
    "https://b.zmtcdn.com/data/menus/593/18233593/a181458955e1390aa366c636c2d3f0d5.jpg",
  ]);
  const [Reviews, setReviews] = useState([
    {
      userName: "Aditya",
      isRestaurantReview: true,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "mandar",
      isRestaurantReview: true,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Kushagra",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "yash",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
  ]);

  const cuisines = ["Indian", "Asian", "Italian"];
  const averageCost = 100;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((data) => (
              <span className="border border-gray-600 text-gray-600 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>${averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and service charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            <MapView
              title="McDonald's"
              phno="+919899795815"
              mapLocation={[28.6812933768556, 77.20791895432784]}
              address="41, Block UA, Jawahar Nagar, Bungalow Road, Near Kamla Nagar, New Delhi"
            />
          </div>
          <div className="mb-4 mt-8">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-5 shadow-md flex-col gap-4"
        >
          <MapView
            title="McDonald's"
            phno="+919899795815"
            mapLocation={[28.6812933768556, 77.20791895432784]}
            address="41, Block UA, Jawahar Nagar, Bungalow Road, Near Kamla Nagar, New Delhi"
          />
        </aside>
      </div>
    </>
  );
}

export default Overview;