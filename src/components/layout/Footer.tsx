import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="font-headline-lg text-3xl md:text-4xl text-on-surface mb-10 tracking-tight">
            DANIEL ARIAS
          </div>
          <p className="font-label-caps text-[10px] text-outline leading-loose tracking-[0.2em] uppercase">
            {t("copyright")}
            <br />
            {t("system")}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-16">
          <div className="flex flex-wrap gap-12 font-label-caps text-[11px] tracking-[0.2em] uppercase">
            <a
              href="#"
              className="text-on-surface-variant hover:text-secondary-fixed transition-colors"
            >
              {t("instagram")}
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-secondary-fixed transition-colors"
            >
              {t("youtube")}
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-secondary-fixed transition-colors"
            >
              {t("spotify")}
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-secondary-fixed transition-colors"
            >
              {t("pressKit")}
            </a>
          </div>
          <div className="flex gap-1">
            <div className="w-16 h-[1px] bg-secondary-fixed/50"></div>
            <div className="w-8 h-[1px] bg-outline-variant/30"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
