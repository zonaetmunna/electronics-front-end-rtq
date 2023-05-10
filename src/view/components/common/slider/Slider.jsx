import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";

const Slider = ({ products }) => {
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
          <div className="bg-white px-5 py-3 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="mt-2 font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-gray-700">{product.price}</p>
          </div>
          <style>
            {`.swiper-slide-active {
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
