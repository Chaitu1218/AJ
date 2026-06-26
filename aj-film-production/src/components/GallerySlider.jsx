import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import img3 from "../assets/3.jpg";
import img42 from "../assets/42.jpg";
import img31 from "../assets/31.jpg";
import img55 from "../assets/55.jpg";

function GallerySlider() {
  const navigate = useNavigate();

  const items = [
    {
      id: "1",
      title: "Two Souls, One Heart",
      image_url: img3,
      category: "Pre-wedding",
    },
    {
      id: "2",
      title: "A couple that laughs together, lasts together.",
      image_url: img42,
      category: "Coupleshoot",
    },
    {
      id: "3",
      title: "The golden hour of love",
      image_url: img31,
      category: "Wedding",
    },
    {
      id: "4",
      title: "Elegance in Every Frame",
      image_url: img55,
      category: "Portrait",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const openGallery = () => {
    navigate("/gallery");
  };

  if (items.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        No gallery images found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      {/* Slider */}

      <div
        onClick={openGallery}
        className="relative w-full h-[250px] md:h-[340px] lg:h-[420px] overflow-hidden rounded-2xl cursor-pointer shadow-xl"
      >

        {/* Images */}

        {items.map((item, index) => (
          <img
            key={item.id}
            src={item.image_url}
            alt={item.title}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/30" />

        {/* Text */}

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">

          <p className="uppercase tracking-[4px] text-white/80 text-sm mb-2">
            {items[currentIndex].category}
          </p>

          <h2 className="text-white text-2xl md:text-4xl font-bold">
            {items[currentIndex].title}
          </h2>

        </div>

        {/* Previous */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            previousSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition"
        >
          <ChevronLeft />
        </button>

        {/* Next */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition"
        >
          <ChevronRight />
        </button>

      </div>

      {/* Indicators */}

      <div className="flex justify-center gap-3 mt-6">

        {items.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? "w-10 h-2 bg-white"
                : "w-2 h-2 bg-gray-500"
            }`}
          />

        ))}

      </div>

    </div>
  );
}

export default GallerySlider;
