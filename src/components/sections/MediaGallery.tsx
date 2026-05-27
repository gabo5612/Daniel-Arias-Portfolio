import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { galleryImages } from "@/assets/gallery";
import ScrollReveal from "@/components/ui/ScrollReveal";

const icons = ["fullscreen", "play_circle", "fullscreen"];

export default async function MediaGallery() {
  const t = await getTranslations("Media");

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

      {/* 3-column staggered grid */}
      <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
        {galleryImages.map((img, i) => (
          <ScrollReveal
            key={i}
            delay={(i % 3) * 100}
            className={i % 3 === 1 ? "md:translate-y-24" : ""}
          >
            <div className="aspect-4/5 relative group overflow-hidden">
              <Image
                src={img}
                alt={`Daniel Arias — photo ${i + 1}`}
                fill
                className="object-cover grayscale opacity-75 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-secondary-container/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="material-symbols-outlined text-4xl font-extralight text-on-surface/80">
                  {icons[i % 3]}
                </span>
              </div>

              {/* Image number — top right */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-label-caps text-[9px] text-secondary-fixed tracking-[0.2em]">
                  {String(i + 1).padStart(3, "0")}
                </span>
              </div>

              {/* Red bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-container group-hover:w-full transition-all duration-700" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
