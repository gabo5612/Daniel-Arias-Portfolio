import { getTranslations } from "next-intl/server";

export default async function BookingsCTA() {
  const t = await getTranslations("Bookings");

  return (
    <section
      id="bookings"
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#1a1a1a] relative overflow-hidden"
    >
      {/* Red skewed accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/5 -skew-x-12 translate-x-24" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
        {/* Heading */}
        <div>
          <span className="font-label-caps text-secondary-fixed block mb-8 tracking-[0.4em]">
            {t("label")}
          </span>
          <h2 className="font-display-lg text-5xl md:text-7xl uppercase leading-tight font-light mb-12">
            {t("heading")} <br />
            <span className="italic">{t("headingAccent")}</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            {t("body")}
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <a
              href={`mailto:${t("email")}`}
              className="font-label-caps text-label-caps py-6 px-12 bg-on-surface text-background text-center uppercase tracking-[0.2em] font-medium hover:bg-secondary-fixed transition-colors"
            >
              {t("cta1")}
            </a>
            <div className="flex items-center gap-6 px-4">
              <span className="material-symbols-outlined text-secondary-fixed font-light">
                description
              </span>
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em]">
                {t("cta2")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
