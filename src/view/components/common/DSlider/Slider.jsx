import React from "react";
import { useNavigate } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ products }) => {
  // hooks
  const navigate = useNavigate();

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="py-10 px-5 relative"
    >
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full p-2"></div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full p-2"></div>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
