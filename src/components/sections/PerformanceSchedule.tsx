import { getTranslations } from "next-intl/server";

export default async function PerformanceSchedule() {
  const t = await getTranslations("Schedule");

  const events = [
    {
      date: t("events.0.date"),
      venue: t("events.0.venue"),
      location: t("events.0.location"),
      program: t("events.0.program"),
    },
    {
      date: t("events.1.date"),
      venue: t("events.1.venue"),
      location: t("events.1.location"),
      program: t("events.1.program"),
    },
    {
      date: t("events.2.date"),
      venue: t("events.2.venue"),
      location: t("events.2.location"),
      program: t("events.2.program"),
    },
  ];

  return (
    <section
      id="schedule"
      className="py-section-gap px-margin-mobile md:px-margin-desktop mt-24"
    >
      <div className="mb-24">
        <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
          {t("label")}
        </span>
        <h2 className="font-headline-lg text-4xl md:text-6xl uppercase font-light">
          {t("heading")}
        </h2>
      </div>

      <div className="border-t border-outline-variant/30">
        {events.map((event, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-outline-variant/20 hover:bg-surface-container-low transition-all duration-500 group px-4"
          >
            <div className="md:col-span-2 font-label-caps text-lg text-secondary-fixed/70">
              {event.date}
            </div>
            <div className="md:col-span-4">
              <div className="font-headline-lg text-2xl uppercase mb-2 group-hover:text-on-surface transition-colors">
                {event.venue}
              </div>
              <div className="font-label-caps text-[10px] text-outline tracking-[0.2em] uppercase">
                {event.location}
              </div>
            </div>
            <div className="md:col-span-4 font-body-md text-on-surface-variant/80 italic self-center">
              {event.program}
            </div>
            <div className="md:col-span-2 flex justify-end items-center">
              <button className="font-label-caps text-[11px] px-8 py-3 refined-border uppercase avant-garde-hover tracking-widest">
                {t("tickets")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
