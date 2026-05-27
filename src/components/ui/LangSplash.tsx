"use client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

const languages = [
  { code: "en", label: "ENGLISH" },
  { code: "es", label: "ESPAÑOL" },
  { code: "de", label: "DEUTSCH" },
] as const;

export default function LangSplash() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [done, setDone] = useState(true); // start hidden to avoid SSR flash
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splashDone")) return;
    setDone(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleSelect = (code: string) => {
    // Dispatch event so AudioPlayer plays unmuted (synchronous = user gesture chain)
    sessionStorage.setItem("splashDone", "true");
    sessionStorage.setItem("audioEnabled", "true");
    window.dispatchEvent(new CustomEvent("lang-selected"));

    // Fade out
    setVisible(false);

    const finish = () => {
      setDone(true);
      if (code !== locale) {
        router.replace(pathname, { locale: code as "en" | "es" | "de" });
      }
    };

    // Wait for fade-out animation before routing
    setTimeout(finish, 700);
  };

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-secondary-container/40" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-secondary-container/20" />

      {/* Corner metadata */}
      <span className="absolute top-8 left-8 font-label-caps text-[8px] text-on-surface-variant/20 tracking-[0.4em]">
        DANIEL ARIAS — PORTFOLIO
      </span>
      <span className="absolute top-8 right-8 font-label-caps text-[8px] text-on-surface-variant/20 tracking-[0.4em]">
        2026
      </span>

      {/* Center content */}
      <div className="flex flex-col items-center gap-20 text-center px-8">
        {/* Name */}
        <div className="flex flex-col items-center gap-6">
          <h1
            className="font-display-lg uppercase font-light leading-none"
            style={{ fontSize: "clamp(52px, 12vw, 120px)", letterSpacing: "-0.02em" }}
          >
            DANIEL<br />ARIAS
          </h1>
          <div className="w-10 h-px bg-secondary-container/60" />
          <span className="font-label-caps text-[9px] text-secondary-fixed tracking-[0.5em] uppercase">
            VIOLONCHELISTA
          </span>
        </div>

        {/* Language selector */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-label-caps text-[8px] text-on-surface-variant/30 tracking-[0.5em] mb-6">
            SELECT YOUR LANGUAGE
          </span>
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={`relative font-label-caps text-[13px] tracking-[0.4em] py-4 px-10 cursor-pointer transition-colors duration-300 group ${
                code === locale
                  ? "text-on-surface"
                  : "text-on-surface-variant/60 hover:text-on-surface"
              }`}
            >
              {label}
              {/* Active/hover underline */}
              <span
                className={`absolute bottom-2 left-10 h-px bg-secondary-container transition-all duration-500 ${
                  code === locale
                    ? "w-[calc(100%-80px)]"
                    : "w-0 group-hover:w-[calc(100%-80px)]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom corner */}
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-label-caps text-[7px] text-on-surface-variant/15 tracking-[0.4em]">
        CLICK TO ENTER · AUDIO WILL START
      </span>
    </div>
  );
}
