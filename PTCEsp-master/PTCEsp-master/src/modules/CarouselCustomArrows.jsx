  import { Carousel } from "@material-tailwind/react";
  import { useState } from "react";

  export function CarouselCustomArrows() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
      <Carousel
        className="rounded-xl relative overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => {
                  setActiveIndex(i);
                  setActiveSlide(i);
                }}
              />
            ))}
          </div>
        )}
        onChange={(index) => setActiveSlide(index)}
      >
        <div className="h-full w-screen relative">
          <img
            src="./src/assets/Fotos/tazumal.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <h1
            className={`uppercase text-white text-3xl py-6 tracking-widest absolute bottom-4 left-1/2 transform -translate-x-1/2 ${
              activeSlide === 0 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            Tazumal
          </h1>
        </div>
        <div className="h-full w-screen relative">
          <img
            src="./src/assets/Fotos/salvador.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <h1
            className={`uppercase text-white text-3xl py-6 tracking-widest absolute bottom-4 left-1/2 transform -translate-x-1/2 ${
              activeSlide === 1 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            El Salvador del Mundo
          </h1>
        </div>
        <div className="h-full w-screen relative">
          <img
            src="./src/assets/Fotos/sanantonio.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <h1
            className={`uppercase text-white text-3xl py-6 tracking-widest absolute bottom-4 left-1/2 transform -translate-x-1/2 ${
              activeSlide === 2 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            San Antonio
          </h1>
        </div>
      </Carousel>
    );
  }
