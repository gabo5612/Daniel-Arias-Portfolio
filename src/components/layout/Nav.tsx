"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useLocaleSwitch } from "@/contexts/LocaleContext";

const locales = ["en", "es", "de"] as const;

export default function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const { changeLocale } = useLocaleSwitch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (sy / total) * 100 : 0);
      setScrolled(sy > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (next: (typeof locales)[number]) => {
    changeLocale(next);
  };

  return (
    <nav
      className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-7 fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-outline-variant/30"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/10">
        <div
          className="h-full bg-secondary-container transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="font-headline-lg text-2xl md:text-3xl tracking-normal uppercase text-on-background">
        DANIEL ARIAS
      </div>

      {/* Desktop: nav links + locale switcher + EPK */}
      <div className="hidden md:flex gap-10 items-center">
        {(["artist", "media", "schedule", "bookings"] as const).map((key) => (
          <a
            key={key}
            href={`#${key}`}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary-fixed transition-colors duration-300"
          >
            {t(key)}
          </a>
        ))}

        {/* Language switcher */}
        <div className="flex items-center gap-2 ml-4 border-l border-outline-variant/30 pl-8">
          {locales.map((l, i) => (
            <span key={l} className="flex items-center gap-2">
              {i > 0 && <span className="text-outline-variant/40 text-[10px]">·</span>}
              <button
                onClick={() => switchLocale(l)}
                className={`font-label-caps text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer ${
                  l === locale
                    ? "text-secondary-fixed"
                    : "text-outline hover:text-on-surface-variant"
                }`}
              >
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
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

          {/* Mobile locale switcher */}
          <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => { switchLocale(l); setMenuOpen(false); }}
                className={`font-label-caps text-[10px] tracking-[0.2em] uppercase cursor-pointer ${
                  l === locale ? "text-secondary-fixed" : "text-outline"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="font-label-caps text-label-caps px-8 py-3 refined-border uppercase tracking-widest avant-garde-hover self-start cursor-pointer">
            {t("epk")}
          </button>
        </div>
      )}
    </nav>
  );
}
