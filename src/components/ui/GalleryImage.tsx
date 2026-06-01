"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

export default function GalleryImage({
  src,
  alt,
  index,
}: {
  src: StaticImageData;
  alt: string;
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el); // stays revealed once visible
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="aspect-4/5 relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-1000 group-hover:scale-[1.03] ${
          revealed
            ? "grayscale-0 opacity-100"
            : "grayscale opacity-75"
        }`}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 68vw"
      />
      {/* Caption overlay — hover only */}
      <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="font-label-caps text-[9px] text-secondary-fixed tracking-[0.3em] uppercase">
          DANIEL ARIAS — {String(index + 1).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
