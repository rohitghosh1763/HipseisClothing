import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
    const products = [
        {
            id: 1,
            name: "VERSA - Sling Dress",
            price: "$45.00",
            image: "/img.jpg",
        },
        {
            id: 2,
            name: "LYDIA - Mock Dress",
            price: "$55.00",
            image: "/img2.jpg",
        },
        {
            id: 3,
            name: "SERENA - Linen Wrap Dress",
            price: "$65.00",
            image: "/img3.jpg",
        },
        {
            id: 4,
            name: "ELENA - Shift Dress",
            price: "$50.00",
            image: "/img.jpg",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
                New Arrivals
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="product-carousel"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="group">
                        <div className="relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600">{product.price}</p>
                                <button className="mt-2 px-4 py-2 mb-10 bg-black text-white hovertion-colors">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
