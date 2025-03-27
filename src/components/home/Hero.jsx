import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Hero = () => {
    const products = [
        {
            id: 1,
            name: "VERSA - Sling Dress",
            price: "$45.00",
            image: "/img.jpg",
            description: "Elegant sling dress perfect for summer evenings",
        },
        {
            id: 2,
            name: "LYDIA - Mock Dress",
            price: "$55.00",
            image: "/img2.jpg",
            description: "Classic mock neck dress for formal occasions",
        },
        {
            id: 3,
            name: "SERENA - Linen Wrap Dress",
            price: "$65.00",
            image: "/img3.jpg",
            description: "Breathable linen wrap dress for all-day comfort",
        },
    ];

    return (
        <section className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 z-10" />
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full h-full"
            >
                <CarouselContent className="h-full">
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="h-full">
                            <div className="h-full w-full relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 md:p-12 lg:p-16">
                                    <Card className="bg-transparent border-none text-white max-w-md">
                                        <CardContent className="p-0 space-y-4">
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
                                                {product.name}
                                            </h2>
                                            <p className="text-lg text-gray-200">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center justify-between mt-6">
                                                <span className="text-2xl font-medium">
                                                    {product.price}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    className="text-white border-white hover:bg-white hover:text-black"
                                                >
                                                    Shop Now
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Custom navigation arrows */}
                <CarouselPrevious className="left-4 md:left-8 h-12 w-12 border-white text-white hover:bg-white/10" />
                <CarouselNext className="right-4 md:right-8 h-12 w-12 border-white text-white hover:bg-white/10" />

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {products.map((_, index) => (
                        <div
                            key={index}
                            className="h-2 w-2 rounded-full bg-white/50 hover:bg-white cursor-pointer"
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
            </Carousel>
            updateeeeeee
        </section>
    );
};

export default Hero;
