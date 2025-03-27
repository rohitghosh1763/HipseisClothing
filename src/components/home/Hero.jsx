import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    const products = [
        {
            id: 1,
            name: "VERSA - Sling Dress",
            price: "$45.00",
            image: "/img.jpg",
            description: "Elegant flowy design for summer evenings",
        },
        {
            id: 2,
            name: "LYDIA - Mock Dress",
            price: "$55.00",
            image: "/img2.jpg",
            description: "Sophisticated neckline for formal occasions",
        },
        {
            id: 3,
            name: "SERENA - Linen Wrap",
            price: "$65.00",
            image: "/img3.jpg",
            description: "Breathable fabric for all-day comfort",
        },
    ];

    return (
        <section className="w-full relative select-none">
            {/* Full-width carousel with responsive height */}
            <Carousel
                plugins={[plugin.current]}
                className="w-full h-[65vh] min-h-[500px] max-h-[800px] relative group"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {products.map((product) => (
                        <CarouselItem key={product.id}>
                            <div className="p-0 h-[65vh] min-h-[500px] max-h-[800px]">
                                <Card className="h-full overflow-hidden relative border-0 rounded-none">
                                    {/* Background image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />

                                    {/* Dark overlay for better text visibility */}
                                    <div className="absolute inset-0 bg-black/30 z-10" />

                                    {/* Content container */}
                                    <CardContent className="relative h-full flex flex-col justify-center z-20 p-8 lg:p-16">
                                        <div className="max-w-2xl mx-auto w-full text-white space-y-6">
                                            {/* Product name */}
                                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                                                {product.name}
                                            </h3>

                                            {/* Product description */}
                                            <p className="text-lg md:text-xl opacity-90 max-w-lg">
                                                {product.description}
                                            </p>

                                            {/* Price and CTA */}
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
                                                <span className="text-2xl md:text-3xl font-medium">
                                                    {product.price}
                                                </span>
                                                <Button
                                                    size="lg"
                                                    className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 transition-colors px-8 py-6 text-lg"
                                                >
                                                    Shop Now
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Custom navigation arrows */}
                <CarouselPrevious className="left-4 md:left-8 h-14 w-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white bg-black/30 hover:bg-black/50" />
                <CarouselNext className="right-4 md:right-8 h-14 w-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-gray-300 text-gray-300 hover:border-white hover:text-white bg-black/30 hover:bg-black/50" />

                {/* Custom indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {products.map((_, index) => (
                        <div
                            key={index}
                            className="h-3 w-3 rounded-full bg-white/50 hover:bg-white cursor-pointer transition-all duration-300"
                        />
                    ))}
                </div>
            </Carousel>
<<<<<<< HEAD
            
=======
>>>>>>> 3936a4cb754ad78f4ca71f68593f83b8b42cfe33
        </section>
    );
};

export default Hero;
