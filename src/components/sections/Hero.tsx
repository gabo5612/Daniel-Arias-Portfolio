import { getTranslations } from "next-intl/server";

const TICKER = "TECHNICAL RESILIENCE — TONAL MASTERY — VIRTUOSO CELLIST — CONCERT ENGAGEMENTS 2024–25 — ENGINEERING SOUND — ";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="min-h-screen flex flex-col justify-between px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-25"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background/90" />
        {/* Subtle vertical red accent */}
        <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-transparent via-secondary-container/50 to-transparent hidden md:block" />
      </div>

      {/* Ghost background text */}
      <div className="absolute inset-0 flex items-center justify-end z-0 select-none pointer-events-none overflow-hidden pr-8 md:pr-16">
        <span
          className="font-display-lg uppercase leading-none tracking-[0.05em] text-on-surface"
          style={{ fontSize: "clamp(100px, 22vw, 340px)", opacity: 0.025 }}
        >
          ARIAS
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mt-36 md:mt-44">
        <span
          className="font-label-caps text-secondary-fixed mb-8 block tracking-[0.4em] hero-animate"
          style={{ animationDelay: "0.15s" }}
        >
          {t("tagline")}
        </span>

        <h1
          className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-[1.03] max-w-5xl hero-animate"
          style={{ animationDelay: "0.4s" }}
        >
          {t("headline")}
          <br />
          <span className="italic font-light text-secondary-fixed">{t("accent")}</span>
          <br />
          {t("headline2")}
        </h1>

        <p
          className="font-body-lg text-body-lg max-w-lg text-on-surface-variant font-light leading-relaxed mt-10 hero-animate"
          style={{ animationDelay: "0.75s" }}
        >
          {t("sub")}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 mt-14 hero-animate"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#schedule"
            className="font-label-caps text-label-caps px-10 py-4 bg-on-surface text-background uppercase tracking-widest hover:bg-secondary-container hover:text-white transition-colors duration-500 text-center cursor-pointer"
          >
            {t("cta1")}
          </a>
          <a
            href="#bookings"
            className="font-label-caps text-label-caps px-10 py-4 refined-border uppercase tracking-widest avant-garde-hover text-center cursor-pointer"
          >
            {t("cta2")}
          </a>
        </div>
      </div>

      {/* Bottom: scroll cue + marquee */}
      <div className="relative z-10 pb-10">
        {/* Red separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary-container/50 to-transparent mb-6" />

        {/* Marquee ticker */}
        <div className="overflow-hidden">
          <div className="marquee-track gap-0">
            <span className="font-label-caps text-[9px] text-on-surface-variant/35 tracking-[0.3em] uppercase whitespace-nowrap pr-4">
              {TICKER}
            </span>
            <span className="font-label-caps text-[9px] text-on-surface-variant/35 tracking-[0.3em] uppercase whitespace-nowrap pr-4">
              {TICKER}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
