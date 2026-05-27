import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
      className="py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden"
    >
      {/* Ghost section number */}
      <div className="absolute left-0 bottom-0 select-none pointer-events-none overflow-hidden hidden md:block">
        <span
          className="font-display-lg uppercase leading-none text-on-surface"
          style={{ fontSize: "clamp(160px, 20vw, 320px)", opacity: 0.025 }}
        >
          03
        </span>
      </div>

      {/* Header */}
      <ScrollReveal className="mb-24">
        <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
          {t("label")}
        </span>
        <h2 className="font-headline-lg text-4xl md:text-6xl uppercase font-light">
          {t("heading")}
        </h2>
      </ScrollReveal>

      {/* Event list */}
      <div className="border-t border-outline-variant/30">
        {events.map((event, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-14 border-b border-outline-variant/20 group relative px-4 hover:px-8 transition-all duration-500 cursor-default">
              {/* Red left accent on hover */}
              <div className="absolute left-0 top-0 w-0.5 h-0 bg-secondary-container group-hover:h-full transition-all duration-500" />

              <div className="md:col-span-2 font-label-caps text-base text-secondary-fixed/70 group-hover:text-secondary-fixed transition-colors duration-300">
                {event.date}
              </div>

              <div className="md:col-span-4">
                <div className="font-headline-lg text-2xl uppercase mb-2 transition-colors duration-300">
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
                <button className="font-label-caps text-[11px] px-8 py-3 refined-border uppercase avant-garde-hover tracking-widest cursor-pointer">
                  {t("tickets")}
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
