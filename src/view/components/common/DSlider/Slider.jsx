import React from "react";
import { useNavigate } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

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
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      {products?.map((product) => (
        <SwiperSlide key={product._id}>
          <div
            onClick={() => navigate("shop")}
            className="bg-white px-5 py-3 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.brand?.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="mt-2 font-medium text-gray-900 text-sm">
              {product?.brand?.name}
            </h3>
            <p className="mt-1 text-gray-700 font-medium">${product.price}</p>
          </div>
          <style>
            {`
              .swiper-slide-active .bg-white {
                transform: scale(1.1);
                z-index: 1;
              }
            `}
          </style>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
