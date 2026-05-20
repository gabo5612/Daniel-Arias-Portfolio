import Image from "next/image";
import biographyImg from "@/assets/biography.webp";
import { getTranslations } from "next-intl/server";

export default async function TheArtist() {
  const t = await getTranslations("Artist");

  return (
    <section
      id="artist"
      className="py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center"
    >
      {/* Portrait */}
      <div className="md:col-span-6 mb-16 md:mb-0">
        <div className="relative group">
          <div className="absolute -inset-4 border border-outline-variant/20 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
          <Image
            src={biographyImg}
            alt="Daniel Arias Portrait"
            className="w-full grayscale brightness-90 contrast-110"
            placeholder="blur"
          />
        </div>
      </div>

      {/* Biography */}
      <div className="md:col-span-6 md:pl-20">
        <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
          {t("label")}
        </span>
        <h2 className="font-headline-lg text-4xl md:text-6xl uppercase mb-10 font-light">
          {t("heading")}
        </h2>
        <div className="space-y-8 text-on-surface-variant font-light leading-loose text-lg">
          <p>{t("body1")}</p>
          <p>{t("body2")}</p>
        </div>
        <div className="mt-16">
          <button className="font-label-caps text-label-caps px-12 py-5 refined-border uppercase tracking-widest text-on-surface avant-garde-hover">
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
