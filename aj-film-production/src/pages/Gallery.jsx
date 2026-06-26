import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ================= Images =================

import img2 from "../assets/5.JPG";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img6 from "../assets/6.JPG";

import img11 from "../assets/11.JPG";
import img12 from "../assets/12.JPG";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.JPG";
import img16 from "../assets/16.JPG";
import img17 from "../assets/17.JPG";
import img18 from "../assets/18.JPG";

import img20 from "../assets/20.JPG";
import img21 from "../assets/21.JPG";
import img22 from "../assets/22.JPG";
import img23 from "../assets/23.JPG";
import img24 from "../assets/24.jpg";
import img25 from "../assets/25.jpg";
import img26 from "../assets/26.JPG";
import img27 from "../assets/27.JPG";
import img28 from "../assets/28.jpg";
import img29 from "../assets/29.JPG";
import img30 from "../assets/30.JPG";
import img31 from "../assets/31.JPG";
import img32 from "../assets/32.JPG";
import img33 from "../assets/33.JPG";
import img34 from "../assets/34.JPG";
import img35 from "../assets/35.JPG";
import img36 from "../assets/36.JPG";
import img37 from "../assets/37.JPG";
import img38 from "../assets/38.JPG";
import img40 from "../assets/40.JPG";
import img41 from "../assets/41.JPG";
import img42 from "../assets/42.JPG";
import img43 from "../assets/43.JPG";
import img44 from "../assets/44.JPG";
import img45 from "../assets/45.JPG";
import img46 from "../assets/46.JPG";
import img47 from "../assets/47.JPG";
import img48 from "../assets/48.JPG";
import img49 from "../assets/49.JPG";
import img50 from "../assets/50.JPG";
import img51 from "../assets/51.JPG";
import img52 from "../assets/52.JPG";
import img53 from "../assets/53.JPG";
import img54 from "../assets/54.JPG";
import img55 from "../assets/55.JPG";
import img56 from "../assets/56.JPG";

function Gallery() {
  const [selected, setSelected] = useState(null);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // ================= PRE WEDDING =================

  const prewed = [
    { id: "5", image_url: img2 },
    { id: "3", image_url: img3 },
    { id: "4", image_url: img4 },
    { id: "6", image_url: img6 },
  ];

  // ================= HALDI =================

  const haldiMehndi = [
    { id: "11", image_url: img11 },
    { id: "12", image_url: img12 },
    { id: "13", image_url: img13 },
    { id: "14", image_url: img14 },
    { id: "15", image_url: img15 },
    { id: "16", image_url: img16 },
    { id: "17", image_url: img17 },
    { id: "18", image_url: img18 },
  ];

  // ================= WEDDING =================

  const wedding = [
    { id: "20", image_url: img20 },
    { id: "21", image_url: img21 },
    { id: "22", image_url: img22 },
    { id: "23", image_url: img23 },
    { id: "24", image_url: img24 },
    { id: "25", image_url: img25 },
    { id: "26", image_url: img26 },
    { id: "27", image_url: img27 },
    { id: "28", image_url: img28 },
    { id: "29", image_url: img29 },
    { id: "30", image_url: img30 },
    { id: "31", image_url: img31 },
    { id: "32", image_url: img32 },
    { id: "33", image_url: img33 },
    { id: "34", image_url: img34 },
    { id: "35", image_url: img35 },
    { id: "36", image_url: img36 },
    { id: "37", image_url: img37 },
    { id: "38", image_url: img38 },
    { id: "40", image_url: img40 },
    { id: "41", image_url: img41 },
    { id: "42", image_url: img42 },
    { id: "43", image_url: img43 },
    { id: "44", image_url: img44 },
    { id: "45", image_url: img45 },
    { id: "46", image_url: img46 },
    { id: "47", image_url: img47 },
    { id: "48", image_url: img48 },
    { id: "49", image_url: img49 },
    { id: "50", image_url: img50 },
    { id: "51", image_url: img51 },
    { id: "52", image_url: img52 },
    { id: "53", image_url: img53 },
    { id: "54", image_url: img54 },
    { id: "55", image_url: img55 },
    { id: "56", image_url: img56 },
  ];

    const allImages = [...prewed, ...haldiMehndi, ...wedding];

  const currentIndex = selected
    ? allImages.findIndex((img) => img.id === selected.id)
    : -1;

  const showPrev = () => {
    if (currentIndex > 0) {
      setSelected(allImages[currentIndex - 1]);
    }
  };

  const showNext = () => {
    if (currentIndex < allImages.length - 1) {
      setSelected(allImages[currentIndex + 1]);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStart - touchEnd;

    if (swipeDistance > 50) {
      showNext();
    }

    if (swipeDistance < -50) {
      showPrev();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 pb-10 pt-28">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Gallery
        </h1>

        <p className="text-center text-gray-500 mb-12">
          Explore our collection.
        </p>

        {/* ================= PRE WEDDING ================= */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Pre-Wedding
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-16">

          {prewed.map((item) => (

            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
            >

              <div className="aspect-square overflow-hidden">

                <img
                  src={item.image_url}
                  alt={item.id}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          ))}

        </div>

        {/* ================= HALDI & MEHNDI ================= */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Haldi & Mehndi
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-16">

          {haldiMehndi.map((item) => (

            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
            >

              <div className="aspect-square overflow-hidden">

                <img
                  src={item.image_url}
                  alt={item.id}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          ))}

        </div>

        {/* ================= WEDDING ================= */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Wedding
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">

          {wedding.map((item) => (

            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
            >

              <div className="aspect-square overflow-hidden">

                <img
                  src={item.image_url}
                  alt={item.id}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>

          ))}

        </div>
              </div>

      {/* ================= LIGHTBOX ================= */}

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}

          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
          >
            <X size={28} />
          </button>

          {/* Previous */}

          {currentIndex > 0 && (
            <button
              onClick={showPrev}
              className="hidden md:flex absolute left-6 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Selected Image */}

          <img
            src={selected.image_url}
            alt="Gallery"
            draggable={false}
            className="max-w-full max-h-[90vh] object-contain rounded-lg select-none"
          />

          {/* Next */}

          {currentIndex < allImages.length - 1 && (
            <button
              onClick={showNext}
              className="hidden md:flex absolute right-6 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Counter */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
