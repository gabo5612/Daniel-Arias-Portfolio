"use client";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PressAssets() {
  const t = useTranslations("Press");

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center py-24 refined-border relative px-8 group hover:border-secondary-container/30 transition-colors duration-700">
          {/* Floating icon */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background px-8">
            <span className="material-symbols-outlined text-3xl text-secondary-fixed font-light">
              download
            </span>
          </div>

          {/* Red top line that expands on hover */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary-container group-hover:w-full transition-all duration-700" />

          <h3 className="font-headline-lg text-4xl md:text-5xl uppercase mb-10 font-light tracking-wide">
            {t("heading")}
          </h3>
          <p className="font-body-md text-on-surface-variant mb-16 max-w-2xl mx-auto leading-relaxed">
            {t("body")}
          </p>
          <button className="font-label-caps text-label-caps text-sm px-16 py-6 refined-border uppercase tracking-[0.3em] avant-garde-hover cursor-pointer">
            {t("cta")}
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
