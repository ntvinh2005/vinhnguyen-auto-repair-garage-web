import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils"; // Replace with your own `cn` if not using shadcn/ui
import { Circle } from "lucide-react";

// Sample images—replace with your real URLs
const images = [
  "/assets/hero/ben-ngoai-xuong-hero.jpg",
  "/assets/hero/sua-chua-xe-hero.jpg",
  "/assets/hero/tap-the-cong-ty-hero.jpg",
];

// Utility: get offset for translateX (for card overlap, responsive)
const getOffset = (width: number) => {
  if (width >= 600) return width * 0.7;
  if (width >= 520) return width * 0.65;
  if (width >= 384) return width * 0.6;
  return width * 0.55;
};

export default function FuturisticCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(520);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto-rotate every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mount or breakpoint change: set initial cardWidth
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [isMobile]);

  const offset = isMobile ? 0 : getOffset(cardWidth);
  const containerHeight = cardWidth * 0.7;

  return (
    <div className="flex flex-col items-center w-full select-none">
      {/* Carousel Container */}
      <div
        className="relative mx-auto w-full max-w-[700px] md:max-w-[1100px]"
        style={{ height: `${containerHeight}px` }}
      >
        {images.map((src, idx) => {
          // Calculate relative position in carousel (center=0, right=1, left=2)
          const pos = (idx - activeIndex + images.length) % images.length;

          // Animation and layering by position (desktop)
          let transform = "";
          let z = 0;
          let opacity = 1;
          let scale = 1;
          let blur = "none";

          if (isMobile) {
            // Flip animation for mobile
            if (pos === 0) {
              transform = "translateX(0) rotateY(0deg)";
              z = 30;
              opacity = 1;
              scale = 1.05;
            } else if (pos === 1) {
              transform = "translateX(0) rotateY(80deg)";
              z = 10;
              opacity = 0;
              scale = 1;
            } else if (pos === 2) {
              transform = "translateX(0) rotateY(-80deg)";
              z = 10;
              opacity = 0;
              scale = 1;
            } else {
              opacity = 0;
              scale = 1;
            }
          } else {
            if (pos === 0) {
              // Center card: always clear
              transform = "translateX(0)";
              z = 30;
              opacity = 1;
              scale = 1.1;
              blur = "none";
            } else if (pos === 1) {
              // Right card: blurred
              transform = `translateX(${offset}px)`;
              z = 20;
              opacity = 0.7;
              scale = 0.95;
              blur = "blur(3px)";
            } else if (pos === 2) {
              // Left card: blurred
              transform = `translateX(-${offset}px)`;
              z = 10;
              opacity = 0.7;
              scale = 0.95;
              blur = "blur(3px)";
            } else {
              opacity = 0;
              scale = 1;
            }
          }

          // Assign ref to the first card for width calculation
          const cardProps = idx === 0 ? { ref: cardRef } : {};

          return (
            <div
              key={src}
              {...cardProps}
              className={cn(
                "absolute top-1/2 left-1/2 aspect-video rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800/70 to-slate-400/30 overflow-hidden shadow-xl flex items-end",
                "transition-all duration-700 ease-in-out",
                "w-80 sm:w-96 md:w-[520px] lg:w-[600px]"
              )}
              style={{
                zIndex: z,
                opacity,
                filter:
                  blur === "none"
                    ? "drop-shadow(0 0 18px #c1eaff80)"
                    : "blur(3px) grayscale(0.2) brightness(0.85)",
                transform: `translate(-50%, -50%) scale(${scale}) ${transform}`,
                pointerEvents: pos === 0 ? "auto" : "none",
              }}
            >
              <img
                src={src}
                alt={`carousel-${idx}`}
                draggable={false}
                className="w-full h-full object-cover opacity-90"
                style={{ pointerEvents: "none" }}
              />
            </div>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div className="flex gap-4 mt-8">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to image ${idx + 1}`}
            className={cn(
              "transition-all duration-300",
              idx === activeIndex
                ? "scale-110 text-red-800 drop-shadow-lg"
                : "text-slate-400/60 hover:text-red-900"
            )}
            onClick={() => setActiveIndex(idx)}
          >
            <Circle fill={idx === activeIndex ? "#7f1d1d" : "none"} size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}
