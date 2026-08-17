"use client";

import React, { useEffect } from "react";
import { CloseIcon } from "./Icons";

interface VideoLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function VideoLightboxModal({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/xPKmbnxrdRE?autoplay=1&enablejsapi=1",
}: VideoLightboxModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Video Container */}
      <div className="relative z-10 w-full max-w-[1000px] bg-black shadow-2xl border border-white/15 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-[#8C7355] text-white transition-colors cursor-pointer"
          aria-label="Close video"
        >
          <CloseIcon />
        </button>

        {/* 16:9 Aspect Ratio Iframe */}
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            src={videoUrl}
            title="Asatha Luxury Resort Experience Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
