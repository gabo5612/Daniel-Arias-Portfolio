"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setScrolled(scrolled > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-7 fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-outline-variant/30"
          : "bg-transparent"
      }`}
    >
      {/* Red scroll progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/10">
        <div
          className="h-full bg-secondary-container transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="font-headline-lg text-2xl md:text-3xl tracking-normal uppercase text-on-background">
        DANIEL ARIAS
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-12 items-center">
        {(["artist", "media", "schedule", "bookings"] as const).map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary-fixed transition-colors duration-300"
          >
            {t(key)}
          </a>
        ))}
      </div>

      <button className="hidden md:block font-label-caps text-label-caps px-8 py-3 refined-border uppercase tracking-widest avant-garde-hover cursor-pointer">
        {t("epk")}
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-on-surface">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-md border-b border-outline-variant/30 flex flex-col gap-8 px-margin-mobile py-12 md:hidden">
          {(["artist", "media", "schedule", "bookings"] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary-fixed transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <button className="font-label-caps text-label-caps px-8 py-3 refined-border uppercase tracking-widest avant-garde-hover self-start cursor-pointer">
            {t("epk")}
          </button>
        </div>
      )}
    </nav>
  );
}
