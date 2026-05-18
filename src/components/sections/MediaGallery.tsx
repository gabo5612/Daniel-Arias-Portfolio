import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function MediaGallery() {
  const t = await getTranslations("Media");

  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsm4G-nvtXhj9CrFZj9HxZZ4HK7tPGqvheNKnTbe7TWanWwxBXkDbqnnvYMBj1AruG5B-jMzBLEZHNNxQ0kH48Zt6J5FHD2CD9MhV_iZEHa3QV9ja4_boeGMZynHFcSnJnepwb1mNq0y3ELqsnQrH0cYo8DdHlh05s9ZkwNCEYGMCmr4FJkG9GJCVo40W10XG0x1wzr606FdEK6SEaeW4r-tT6Q6yLzd9bkOlfhmxrJJjUOIKyVVvLSbxnaeAFH-fCtuYErt3tp4t6",
      alt: t("img1Alt"),
      icon: "fullscreen",
      offset: false,
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXRU70NvuEcLiAd8puTqBmmGFQMFeSC5n0Prmjx8hZ35253-JaEMzaS1y1NcE8CFdk0nM1ChsyIob96ec5u6zqp0b8NiUzKTlIOy9rBG5RuxqnaME1Nfh9Fi6EzhQsy5BtuYh4R0WLQaUw4wGNBYftzze31fOCqxM3gzrHk9_-w1G_5WvJLrbruUQO8pLf-MFPJKyKfB5ofKpio_1bOPtJkkGEaMRaXM2TifRqmlQSKQJWpgBYl6t9wFRsnmSlt6ZbPypvbVkFSxP",
      alt: t("img2Alt"),
      icon: "play_circle",
      offset: true,
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfxPeHq1vEiLf37DG0rVG9TqnJ4L7g1plgs9kdIm_fuyW5DeKJYqlYT36MpDaWX5at1GD39uDU-3PLqpjB8TK_OlP_LOK3O8Xs02lWMpzpJNx0lx4j1q9Gs_DMO_Qw5KK4KcVUGA45YF-p9uOLFnaYRxgVpVTCAQ3HYwOxCYlo2_3Fa8KdNxiQkJzRwDFf5Luq19EHgA2R7IVpJlqSaNR1Wux4xH2EN2w2u0t3JXHG8g-RPJxmMfo9f_A1ou8nSuuyZlxcAifi_WGf",
      alt: t("img3Alt"),
      icon: "fullscreen",
      offset: false,
    },
  ];

  return (
    <section
      id="media"
      className="py-section-gap bg-surface-container-lowest/50"
    >
      {/* Header */}
      <div className="px-margin-mobile md:px-margin-desktop mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <span className="font-label-caps text-label-caps text-secondary-fixed block mb-6 tracking-[0.3em]">
            {t("label")}
          </span>
          <h2 className="font-headline-lg text-4xl md:text-6xl uppercase font-light">
            {t("heading")}
          </h2>
        </div>
        <div className="hidden md:block">
          <span className="font-label-caps text-label-caps text-outline">
            {t("archive")}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
        {images.map((img, i) => (
          <div
            key={i}
            className={`aspect-[4/5] relative group overflow-hidden${img.offset ? " md:translate-y-24" : ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover grayscale opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-secondary-container/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <span className="material-symbols-outlined text-4xl font-extralight">
                {img.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
