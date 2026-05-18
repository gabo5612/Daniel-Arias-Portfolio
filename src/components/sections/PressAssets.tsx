import { getTranslations } from "next-intl/server";

export default async function PressAssets() {
  const t = await getTranslations("Press");

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto text-center py-24 refined-border relative px-8">
        {/* Floating icon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-8">
          <span className="material-symbols-outlined text-3xl text-secondary-fixed font-light">
            download
          </span>
        </div>

        <h3 className="font-headline-lg text-4xl md:text-5xl uppercase mb-10 font-light tracking-wide">
          {t("heading")}
        </h3>
        <p className="font-body-md text-on-surface-variant mb-16 max-w-2xl mx-auto leading-relaxed">
          {t("body")}
        </p>
        <button className="font-label-caps text-label-caps text-sm px-16 py-6 refined-border uppercase tracking-[0.3em] avant-garde-hover">
          {t("cta")}
        </button>
      </div>
    </section>
  );
}
