import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

interface ServiceModalProps {
  open: boolean;
  service?: {
    image: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: { label: string; tooltip: string }[];
  };
  onClose: () => void;
}

export function ServiceModal({ open, service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md transition-all duration-300" />
        <Dialog.Content
          className="fixed inset-0 z-[99] flex items-center justify-center"
          aria-modal="true"
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl border-4 border-yellow-300
              max-w-4xl w-full mx-4 px-0 pb-12 pt-0
              flex flex-col overflow-visible animate-[zoomIn_0.2s_ease]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-6 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shadow hover:bg-yellow-200 transition z-20"
              aria-label="Đóng"
            >
              <X className="text-red-700 w-7 h-7" />
            </button>
            {/* Hero Image as background */}
            <div className="relative w-full h-64 md:h-72 rounded-t-3xl overflow-hidden flex items-end">
              {/* BG Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />
              {/* Bottom blur/fade gradient */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.02) 60%, rgba(255,255,255,1) 100%)",
                  backdropFilter: "blur(3.5px)",
                  WebkitBackdropFilter: "blur(3.5px)",
                }}
              />
            </div>
            {/* Content area (title, desc, features) */}
            <div className="flex flex-col items-center px-8 md:px-20 mt-16">
              <h3 className="text-2xl font-bold text-red-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-red-700 mb-6 text-center">
                {service.description}
              </p>
              <div className="flex flex-col gap-4 items-center w-full">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-yellow-100/90 rounded-xl px-4 py-2 shadow-lg max-w-md w-full border border-yellow-300"
                  >
                    <span className="text-red-900 font-semibold">
                      {feature.label}
                    </span>
                    <span className="mt-2 text-yellow-800 text-xs">
                      {feature.tooltip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
