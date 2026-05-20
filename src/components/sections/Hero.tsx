import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mt-24">
        <span className="font-label-caps text-secondary-fixed mb-8 block tracking-[0.4em]">
          {t("tagline")}
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-10 leading-[1.05] max-w-4xl">
          {t("headline")} <br />
          <span className="italic font-light text-secondary-fixed">
            {t("accent")}
          </span>
          <br />
          {t("headline2")}
        </h1>
        <p className="font-body-lg text-body-lg max-w-xl text-on-surface-variant font-light leading-relaxed">
          {t("sub")}
        </p>
      </div>
    </section>
  );
}
