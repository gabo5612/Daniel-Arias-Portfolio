import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TheArtist from "@/components/sections/TheArtist";
import MediaGallery from "@/components/sections/MediaGallery";
import PerformanceSchedule from "@/components/sections/PerformanceSchedule";
import BookingsCTA from "@/components/sections/BookingsCTA";
import PressAssets from "@/components/sections/PressAssets";
import AudioPlayer from "@/components/ui/AudioPlayer";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TheArtist />
        <MediaGallery />
        <PerformanceSchedule />
        <BookingsCTA />
        <PressAssets />
      </main>
      <Footer />
      <AudioPlayer />
    </>
  );
}
