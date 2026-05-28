import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/contexts/LocaleContext";
import enMessages from "../../../messages/en.json";
import esMessages from "../../../messages/es.json";
import deMessages from "../../../messages/de.json";

const allMessages = { en: enMessages, es: esMessages, de: deMessages };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://danielarias.dev/${locale}`,
      languages: {
        en: "https://danielarias.dev/en",
        "x-default": "https://danielarias.dev/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en")) {
    notFound();
  }

  setRequestLocale(locale);

  // Load initial locale messages for SSR — prevents hydration mismatch
  const messages = await getMessages();

  return (
    // Server-side provider: covers SSR + initial hydration with correct locale
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* Client-side provider: adds a new NextIntlClientProvider only when
          the user switches locale client-side (needsOverride pattern) */}
      <LocaleProvider
        initialLocale={locale as "en" | "es" | "de"}
        allMessages={allMessages}
      >
        {children}
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}
