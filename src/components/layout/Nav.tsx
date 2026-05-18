"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("Nav");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-8 bg-background/80 backdrop-blur-md fixed top-0 z-50 border-b border-outline-variant/30">
      <div className="font-headline-lg text-2xl md:text-3xl tracking-normal uppercase text-on-background">
        DANIEL ARIAS
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-12 items-center">
        <a
          href="#artist"
          className="font-label-caps text-label-caps text-on-surface hover:text-secondary-fixed transition-colors"
        >
          {t("artist")}
        </a>
        <a
          href="#media"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
        >
          {t("media")}
        </a>
        <a
          href="#schedule"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
        >
          {t("schedule")}
        </a>
        <a
          href="#bookings"
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
        >
          {t("bookings")}
        </a>
      </div>

      <button className="hidden md:block font-label-caps text-label-caps px-8 py-3 refined-border uppercase tracking-widest avant-garde-hover">
        {t("epk")}
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-on-surface">
          {menuOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-outline-variant/30 flex flex-col gap-8 px-margin-mobile py-12 md:hidden">
          <a
            href="#artist"
            onClick={() => setMenuOpen(false)}
            className="font-label-caps text-label-caps text-on-surface hover:text-secondary-fixed transition-colors"
          >
            {t("artist")}
          </a>
          <a
            href="#media"
            onClick={() => setMenuOpen(false)}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t("media")}
          </a>
          <a
            href="#schedule"
            onClick={() => setMenuOpen(false)}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t("schedule")}
          </a>
          <a
            href="#bookings"
            onClick={() => setMenuOpen(false)}
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors"
          >
            {t("bookings")}
          </a>
          <button className="font-label-caps text-label-caps px-8 py-3 refined-border uppercase tracking-widest avant-garde-hover self-start">
            {t("epk")}
          </button>
        </div>
      )}
    </nav>
  );
}
