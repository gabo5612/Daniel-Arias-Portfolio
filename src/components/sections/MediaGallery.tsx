import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { galleryImages } from "@/assets/gallery";

const icons = ["fullscreen", "play_circle", "fullscreen"];

export default async function MediaGallery() {
  const t = await getTranslations("Media");

  return (
    <section
      id="media"
      className="py-section-gap bg-surface-container-lowest/50"
    >
      {/* Header */}
      <div className="px-margin-mobile md:px-margin-desktop mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
            {t("label")}
          </span>
          <h2 className="font-headline-lg text-4xl md:text-6xl uppercase font-light">
            {t("heading")}
          </h2>
        </div>
        <div className="hidden md:block">
          <span className="font-label-caps text-label-caps text-outline">
            {t("archive")}
          </span>
        </div>
      </div>

      {/* 3-column staggered grid — all gallery images */}
      <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`aspect-4/5 relative group overflow-hidden${i % 3 === 1 ? " md:translate-y-24" : ""}`}
          >
            <Image
              src={img}
              alt={`Daniel Arias — photo ${i + 1}`}
              fill
              className="object-cover grayscale opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-secondary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="material-symbols-outlined text-4xl font-extralight">
                {icons[i % 3]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
