"use client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useLocaleSwitch } from "@/contexts/LocaleContext";

const languages = [
  { code: "en", label: "ENGLISH" },
  { code: "es", label: "ESPAÑOL" },
  { code: "de", label: "DEUTSCH" },
] as const;

export default function LangSplash() {
  const locale = useLocale();
  const { changeLocale } = useLocaleSwitch();

  // Start SHOWN so it covers the page from the very first render (no content flash)
  const [shown, setShown] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splashDone")) {
      setShown(false);
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSelect = (code: string) => {
    // Dispatch event synchronously (user gesture chain) → AudioPlayer unmutes
    sessionStorage.setItem("splashDone", "true");
    sessionStorage.setItem("audioEnabled", "true");
    window.dispatchEvent(new CustomEvent("lang-selected"));

    // Fade out the overlay
    setFadingOut(true);

    // Change locale client-side (no navigation)
    changeLocale(code as "en" | "es" | "de");

    setTimeout(() => {
      document.body.style.overflow = "";
      setShown(false);
    }, 800);
  };

  if (!shown) return null;

  return (
    <div
      className={`fixed inset-0 z-200 overflow-hidden transition-opacity duration-700 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Same video as Hero — seamless reveal on dismiss */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-25"
      >
        <source src="/Video.mp4" type="video/mp4" />
      </video>

      {/* Same gradient overlay as Hero */}
      <div className="absolute inset-0 bg-linear-to-b from-background/97 via-background/95 to-background/97" />

      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-secondary-container/50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-secondary-container/20" />

      {/* Corner metadata */}
      <span className="absolute top-8 left-8 font-label-caps text-[8px] text-on-surface-variant/25 tracking-[0.4em]">
        DANIEL ARIAS — PORTFOLIO
      </span>
      <span className="absolute top-8 right-8 font-label-caps text-[8px] text-on-surface-variant/25 tracking-[0.4em]">
        2026
      </span>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-20 text-center px-8">
        {/* Name block */}
        <div className="flex flex-col items-center gap-6">
          <h1
            className="font-display-lg uppercase font-light leading-none"
            style={{ fontSize: "clamp(52px, 12vw, 128px)", letterSpacing: "-0.02em" }}
          >
            DANIEL
            <br />
            ARIAS
          </h1>
          <div className="w-10 h-px bg-secondary-container/70" />
          <span className="font-label-caps text-[9px] text-secondary-fixed tracking-[0.5em]">
            VIOLONCHELISTA
          </span>
        </div>

        {/* Language selector */}
        <div className="flex flex-col items-center gap-1">
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
                  : "text-on-surface-variant/55 hover:text-on-surface"
              }`}
            >
              {label}
              {/* Red underline — solid for current locale, expands on hover for others */}
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

      {/* Bottom hint */}
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-label-caps text-[7px] text-on-surface-variant/20 tracking-[0.4em] whitespace-nowrap">
        CLICK TO ENTER · AUDIO WILL START
      </span>
    </div>
  );
}
