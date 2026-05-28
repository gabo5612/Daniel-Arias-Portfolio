"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

type Locale = "en" | "es" | "de";
type Messages = Record<string, unknown>;

interface LocaleContextValue {
  changeLocale: (locale: Locale) => void;
  isChanging: boolean;
}

const LocaleContext = createContext<LocaleContextValue>({
  changeLocale: () => {},
  isChanging: false,
});

export function LocaleProvider({
  initialLocale,
  allMessages,
  children,
}: {
  initialLocale: Locale;
  allMessages: Record<Locale, Messages>;
  children: ReactNode;
}) {
  const [activeLocale, setActiveLocale] = useState<Locale>(initialLocale);
  const [isChanging, setIsChanging] = useState(false);

  const changeLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === activeLocale) return;
      setIsChanging(true);
      setTimeout(() => {
        setActiveLocale(newLocale);
        window.history.pushState(null, "", `/${newLocale}`);
        // Let React render with new messages before fading back in
        setTimeout(() => setIsChanging(false), 50);
      }, 200);
    },
    [activeLocale]
  );

  // Only wrap with a client-side NextIntlClientProvider when the locale has
  // changed from the initial value. The server layout already provides the
  // initial locale's messages via its own NextIntlClientProvider (SSR-safe).
  const needsOverride = activeLocale !== initialLocale;

  return (
    <LocaleContext.Provider value={{ changeLocale, isChanging }}>
      {needsOverride ? (
        <NextIntlClientProvider locale={activeLocale} messages={allMessages[activeLocale]}>
          {children}
        </NextIntlClientProvider>
      ) : (
        children
      )}
    </LocaleContext.Provider>
  );
}

export const useLocaleSwitch = () => useContext(LocaleContext);
