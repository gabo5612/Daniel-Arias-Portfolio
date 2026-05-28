"use client";
import { ReactNode } from "react";
import { useLocaleSwitch } from "@/contexts/LocaleContext";

export default function ContentFade({ children }: { children: ReactNode }) {
  const { isChanging } = useLocaleSwitch();
  return (
    <div
      style={{
        opacity: isChanging ? 0 : 1,
        transition: `opacity ${isChanging ? "0.2s" : "0.4s"} ease`,
      }}
    >
      {children}
    </div>
  );
}
