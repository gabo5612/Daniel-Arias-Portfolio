import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="min-h-screen flex flex-col justify-center px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjNvgp7rYRl8eGCsj9OtKlexXOWsKAaGfXzK5qwigLEm7Rg3if1du6HdbrVFrKSDcm3JOvSAPUnoQU5LM1b9E4YqbIjR0vFqIbaexT0dn3r2wxZl42ESAjlElXh2ynRl4fFwwttIK46lhyHhea02yVzf-6g1Kc4BxwE94Nl4G1qRQEWTK6fhBHZOOihVNKNEZXJIJMSsIQ40Ea_6q98jLtr1_ucXb9kxn6z7Goe1ynOmIDVVc8ECSqAyOQ2Kaq8x6cZoQf8CQUUDkW"
          alt="Daniel Arias with his cello"
          fill
          className="object-cover grayscale opacity-40"
          priority
        />
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
