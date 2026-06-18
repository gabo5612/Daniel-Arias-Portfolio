"use client";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BookingsCTA() {
  const t = useTranslations("Bookings");

  return (
    <section
      id="bookings"
      className="py-section-gap relative overflow-hidden bg-surface-container-lowest"
    >
      {/* Large red block — right half desktop */}
      <div className="absolute top-0 right-0 w-full md:w-2/5 h-full bg-secondary-container/8 hidden md:block" />
      {/* Red top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-secondary-container/60 via-secondary-container/20 to-transparent" />

      <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
        {/* Heading */}
        <div>
          <ScrollReveal>
            <span className="font-label-caps text-secondary-fixed block mb-8 tracking-[0.4em]">
              {t("label")}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h2 className="font-display-lg text-5xl md:text-7xl uppercase leading-tight font-light mb-6">
              {t("heading")}
              <br />
              <span className="italic text-secondary-fixed">{t("headingAccent")}</span>
            </h2>
          </ScrollReveal>
          {/* Email displayed prominently */}
          <ScrollReveal delay={300}>
            <a
              href={`mailto:${t("email")}`}
              className="font-label-caps text-[11px] text-outline hover:text-secondary-fixed transition-colors tracking-[0.2em] mt-4 block"
            >
              {t("email")}
            </a>
          </ScrollReveal>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <ScrollReveal delay={200}>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              {t("body")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={`mailto:${t("email")}`}
                className="font-label-caps text-label-caps py-6 px-12 bg-on-surface text-background text-center uppercase tracking-[0.2em] font-medium hover:bg-secondary-container hover:text-white transition-colors duration-500 cursor-pointer"
              >
                {t("cta1")}
              </a>
              {/* CV link styled as a label 
              <div className="flex items-center gap-5 px-4">
                <span className="material-symbols-outlined text-secondary-fixed/70 font-light text-xl">
                  description
                </span>
                {/* CV link styled as a label 
                <span className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em]">
                  {t("cta2")}
                </span>
                
              </div>
              */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
