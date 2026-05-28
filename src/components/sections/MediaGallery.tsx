"use client";
import { useTranslations } from "next-intl";
import { galleryImages } from "@/assets/gallery";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GalleryImage from "@/components/ui/GalleryImage";

export default function MediaGallery() {
  const t = useTranslations("Media");

  return (
    <section
      id="media"
      className="py-section-gap bg-surface-container-lowest/50 relative overflow-hidden"
    >
      {/* Ghost section number */}
      <div className="absolute right-0 top-0 select-none pointer-events-none overflow-hidden hidden md:block">
        <span
          className="font-display-lg uppercase leading-none text-on-surface"
          style={{ fontSize: "clamp(160px, 20vw, 320px)", opacity: 0.025 }}
        >
          02
        </span>
      </div>

      {/* Header */}
      <div className="px-margin-mobile md:px-margin-desktop mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <ScrollReveal>
          <div>
            <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
              {t("label")}
            </span>
            <h2 className="font-headline-lg text-4xl md:text-6xl uppercase font-light">
              {t("heading")}
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="hidden md:flex items-center gap-6">
            <div className="w-12 h-px bg-secondary-container/40" />
            <span className="font-label-caps text-label-caps text-outline">
              {t("archive")}
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Vertical editorial gallery */}
      <div className="px-margin-mobile md:px-margin-desktop space-y-20 md:space-y-32">
        {galleryImages.map((img, i) => {
          const isEven = i % 2 === 0;
          return (
            <ScrollReveal key={i} delay={80} fast>
              <div
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image — takes 68% width on desktop */}
                <div className="w-full md:w-[68%] relative group overflow-hidden shrink-0">
                  {/* Red top accent that extends on hover */}
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-secondary-container group-hover:w-full transition-all duration-700 z-10" />

                  <GalleryImage src={img} alt={`Daniel Arias — photo ${i + 1}`} index={i} />
                </div>

                {/* Decorative number + index — the other 32% */}
                <div
                  className={`hidden md:flex flex-col flex-1 select-none pointer-events-none ${
                    isEven ? "items-end text-right" : "items-start text-left"
                  }`}
                >
                  <span
                    className="font-display-lg uppercase leading-none text-on-surface font-light"
                    style={{
                      fontSize: "clamp(60px, 9vw, 160px)",
                      opacity: 0.06,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-label-caps text-[9px] text-outline tracking-[0.3em] uppercase mt-4 ${
                      isEven ? "border-r border-outline-variant/20 pr-4" : "border-l border-outline-variant/20 pl-4"
                    }`}
                  >
                    FRAME {String(i + 1).padStart(3, "0")}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
