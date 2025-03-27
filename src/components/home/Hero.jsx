import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import TextPressure from "../reactbits/TextPressure/TextPressure";

// Collection data with high-quality fashion images
const collections = [
  {
    title: "NEW ARRIVALS",
    description: "Fresh styles for the season",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Linen Blazer",
        price: "$129",
        category: "Jackets"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Silk Slip Dress",
        price: "$89",
        category: "Dresses"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Cashmere Sweater",
        price: "$149",
        category: "Tops"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Classic Jeans",
        price: "$79",
        category: "Bottoms"
      }
    ],
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100"
  },
  {
    title: "BEST SELLERS",
    description: "Customer favorites",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Evening Gown",
        price: "$199",
        category: "Dresses"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Leather Jacket",
        price: "$249",
        category: "Jackets"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Knit Cardigan",
        price: "$89",
        category: "Tops"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb595d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        name: "Summer Sundress",
        price: "$65",
        category: "Dresses"
      }
    ],
    bgColor: "bg-gradient-to-br from-rose-50 to-rose-100"
  }
];

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const heroProducts = [
    {
      id: 1,
      name: "VERSA - Sling Dress",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Elegant flowy design for summer evenings",
    },
    {
      id: 2,
      name: "LYDIA - Mock Dress",
      price: "$55.00",
      image: "https://images.unsplash.com/photo-1637264486270-3238d60aa71a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Sophisticated neckline for formal occasions",
    },
    {
      id: 3,
      name: "SERENA - Linen Wrap",
      price: "$65.00",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Breathable fabric for all-day comfort",
    },
  ];

  return (
    <section className="w-full relative">
      {/* Hero Carousel - Your original implementation */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[85vh] min-h-[600px] max-h-[1000px] relative group select-none"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          {heroProducts.map((product) => (
            <CarouselItem key={product.id}>
              <div className="p-0 h-[85vh] min-h-[600px] max-h-[1000px] relative ">
                <Card className="h-full overflow-hidden relative border-0 rounded-none">
                  <div className="absolute inset-0 z-10">
                    <img
                      src={`${product.image}?w=1600&h=1000&auto=format&fit=crop`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <CardContent className="relative h-full flex flex-col justify-end items-center z-20 p-8 lg:p-16 pb-[15vh] text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="max-w-2xl mx-auto w-full text-white space-y-6"
                    >
                      <motion.h3
                        initial={{ letterSpacing: "0.5em" }}
                        animate={{ letterSpacing: "0.2em" }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider drop-shadow-lg"
                      >
                        {product.name}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 0.6 }}
                        className="relative sm:left-20 text-lg md:text-xl opacity-90 max-w-lg font-light tracking-wider drop-shadow-md"
                      >
                        {product.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center justify-center gap-6 pt-8"
                      >
                        <span className="text-2xl md:text-3xl font-medium drop-shadow-md">
                          {product.price}
                        </span>
                        <Button
                          size="lg"
                          className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-12 py-6 text-lg uppercase tracking-wider font-bold hover:scale-105"
                        >
                          Shop Now
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 md:left-8 h-14 w-14 opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-white text-white bg-black/30 hover:bg-black/50 hover:scale-110 z-30" />
        <CarouselNext className="right-4 md:right-8 h-14 w-14 opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-white text-white bg-black/30 hover:bg-black/50 hover:scale-110 z-30" />

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {heroProducts.map((_, index) => (
            <div
              key={index}
              className="h-2.5 w-10 rounded-full bg-white/50 hover:bg-white cursor-pointer transition-all duration-300 hover:w-12"
            />
          ))}
        </div>
      </Carousel>

      {/* Shop by Collection Section - Metics Fashion Inspired */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              SHOP BY COLLECTION
            </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our curated collections for every style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`${collection.bgColor} p-6 rounded-lg`}>
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600">{collection.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {collection.products.map((product) => (
                      <Card key={product.id} className="overflow-hidden group-hover:shadow-lg transition-shadow">
                        <div className="relative aspect-square">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full relative bottom-7 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{product.name}</h4>
                              <p className="text-sm text-gray-500">{product.category}</p>
                            </div>
                            <span className="font-medium">{product.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                    >
                      View All {collection.title}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TextPressure Section */}
      <div className="relative h-[600px] bg-gray-50 flex items-center justify-center overflow-hidden">
        <TextPressure
          text="Fashion!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000"
          strokeColor="#ff0000"
          minFontSize={12}
        />
      </div>
    </section>
  );
};

export default Hero;