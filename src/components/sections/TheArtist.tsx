import Image from "next/image";
import biographyImg from "@/assets/biography.webp";
import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default async function TheArtist() {
  const t = await getTranslations("Artist");

  return (
    <section
      id="artist"
      className="py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative overflow-hidden"
    >
      {/* Ghost section number */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden hidden md:block">
        <span
          className="font-display-lg uppercase leading-none text-on-surface"
          style={{ fontSize: "clamp(180px, 22vw, 360px)", opacity: 0.025 }}
        >
          01
        </span>
      </div>

      {/* Portrait */}
      <ScrollReveal className="md:col-span-6 mb-16 md:mb-0">
        <div className="relative group">
          {/* Red top accent line — expands on hover */}
          <div className="absolute -top-px left-0 w-0 h-px bg-secondary-container transition-all duration-700 group-hover:w-full z-10" />
          <div className="absolute -inset-4 border border-outline-variant/15 -z-10 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3" />
          <Image
            src={biographyImg}
            alt="Daniel Arias Portrait"
            className="w-full grayscale brightness-85 contrast-110 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100"
            placeholder="blur"
          />
          {/* Bottom caption on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-label-caps text-[9px] text-secondary-fixed tracking-[0.3em] uppercase">
              DANIEL ARIAS — VIOLONCHELISTA
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Biography */}
      <div className="md:col-span-6 md:pl-20">
        <ScrollReveal delay={150}>
          <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
            {t("label")}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <h2 className="font-headline-lg text-4xl md:text-6xl uppercase mb-10 font-light">
            {t("heading")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <div className="space-y-8 text-on-surface-variant font-light leading-loose text-lg">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="mt-16 flex items-center gap-8">
            <button className="font-label-caps text-label-caps px-12 py-5 refined-border uppercase tracking-widest text-on-surface avant-garde-hover cursor-pointer">
              {t("cta")}
            </button>
            <div className="flex-1 h-px bg-linear-to-r from-secondary-container/40 to-transparent hidden sm:block" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
