import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { useNavigate } from "react-router-dom";

const Slider = ({ products }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      effect="cube"
      grabCursor={true}
      className="py-10 px-5"
    >
      {products?.map((product) => (
        <SwiperSlide key={product._id}>
          <div
            onClick={() => navigate("shop")}
            className="bg-white px-5 py-3 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.brand}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-2 font-medium text-gray-900 text-sm">
              {product.brand}
            </h3>
            <p className="mt-1 text-gray-700 font-medium">${product.price}</p>
          </div>
          <style>
            {`.swiper-slide-active .bg-white {
                transform: scale(1.1);
                z-index: 1;
            }`}
          </style>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
