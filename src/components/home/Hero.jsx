import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
        <section className="mx-auto max-w-7xl px-4 py-12">
            <h2 className="mb-8 text-center text-3xl font-light tracking-wide text-gray-800">
                New Arrivals
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
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
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                className="!pb-12" // Add padding for pagination
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="flex h-full flex-col">
                            <div className="relative overflow-hidden rounded-md">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={500}
                                    className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-4 flex flex-1 flex-col items-center">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {product.name}
                                </h3>
                                <p className="mt-1 text-gray-600">
                                    {product.price}
                                </p>
                                <button className="mt-4 w-full max-w-[200px] border border-gray-800 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-800 hover:text-white">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
