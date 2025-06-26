
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "/lovable-uploads/c783e513-5f46-4036-903b-6f53c53a903f.png",
    alt: "Fitness web design",
  },
  {
    src: "/lovable-uploads/849b2fb6-3c81-4f34-9d38-98af322a05c5.png",
    alt: "New York Real Estate web design",
  },
  {
    src: "/lovable-uploads/25c11bfa-ba0f-4bb7-a3f5-89a636ed06e3.png",
    alt: "Air travel web design",
  },
  {
    src: "/lovable-uploads/2fe9276a-dc16-40e2-a54e-9f6078fe1c1e.png",
    alt: "Roofing web design",
  },
];

const PhotoCarousel: React.FC = () => (
  <div className="w-full flex flex-col items-center mb-10">
    <Carousel
      className="relative w-full max-w-4xl mx-auto"
      opts={{ align: "center", dragFree: true }}
    >
      <CarouselContent className="cursor-grab select-none">
        {images.map((img, idx) => (
          <CarouselItem key={idx} className="pl-0 md:pl-4">
            <div className="overflow-hidden rounded-xl shadow-lg bg-gray-900">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[300px] sm:h-[400px] object-cover object-top transition duration-300 hover:scale-105"
                draggable={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default PhotoCarousel;
