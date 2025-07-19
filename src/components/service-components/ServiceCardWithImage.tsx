import { ReactNode } from "react";
import Tilt from "react-parallax-tilt";
import FeatureWithTooltip from "./FeatureWithTooltip";

interface ServiceCardProps {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: { label: string; tooltip: string }[];
  onClick?: () => void;
}

export default function ServiceCardWithImage({
  image,
  icon,
  title,
  description,
  features,
  onClick,
}: ServiceCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.03}
      transitionSpeed={1800}
    >
      <button
        onClick={onClick}
        className="relative overflow-hidden group rounded-3xl border-2 border-red-100 hover:border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-400 bg-white min-h-[430px] flex flex-col w-full text-left focus:outline-none"
        tabIndex={0}
        type="button"
      >
        {/* Card Image */}
        <div className="relative h-40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          {/* Blueprint overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
            viewBox="0 0 300 160"
            fill="none"
          >
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="#facc15"
              fontSize="32"
              fontWeight="bold"
              fontFamily="Segoe UI, sans-serif"
              opacity="0.8"
              style={{ letterSpacing: "2px", textShadow: "0 2px 8px #fff5" }}
            >
              Vinh Nguyen Auto
            </text>
            {/* Optional tagline below */}
            <text
              x="50%"
              y="68%"
              textAnchor="middle"
              fill="#facc15"
              fontSize="14"
              fontWeight="600"
              fontFamily="Segoe UI, sans-serif"
              opacity="0.7"
              style={{ letterSpacing: "1px" }}
            >
              Chất lượng & Tận tâm
            </text>
          </svg>

          {/* 3D Hero Icon */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-9 z-30 flex items-center justify-center">
            {/* Yellow radial “spotlight” */}
            <div className="absolute w-20 h-20 rounded-full bg-gradient-radial from-yellow-300 via-yellow-100 to-transparent opacity-60 z-0" />
            {/* Glass background */}
            <div className="absolute w-16 h-16 rounded-full bg-white/40 backdrop-blur-[2px] border-2 border-yellow-200 z-10 shadow-[0_2px_24px_4px_rgba(251,191,36,0.17)]" />
            {/* Shadowed icon layer */}
            <div className="absolute z-20 scale-110 translate-y-1 blur-sm opacity-25">
              {icon}
            </div>
            {/* Main 3D icon */}
            <div
              className="relative w-16 h-16 rounded-full flex items-center justify-center z-30
                shadow-[0_6px_32px_0_rgba(251,191,36,0.32),0_2px_8px_0_rgba(244,63,94,0.13)]
                border-4 border-white bg-red-950
                group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-300"
              style={{
                transform:
                  "perspective(600px) rotateY(-10deg) rotateX(6deg) scale(1.11)",
              }}
            >
              {icon}
            </div>
            {/* Accent sparkle */}
            <div className="absolute right-2 top-2 w-3 h-3 rounded-full bg-yellow-200 shadow-xl blur-[1px] animate-pulse z-40" />
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center text-center pt-16 px-8 pb-6 flex-1 z-10">
          <h3 className="text-lg font-bold text-red-900 mb-2">{title}</h3>
          <p className="text-red-700 mb-4 text-sm">{description}</p>
          <div className="flex flex-col gap-3 items-center w-full mt-2">
            {features.map((feature, i) => (
              <FeatureWithTooltip
                key={i}
                label={feature.label}
                tooltip={feature.tooltip}
              />
            ))}
          </div>
        </div>
      </button>
    </Tilt>
  );
}
