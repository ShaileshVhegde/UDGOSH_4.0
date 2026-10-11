import PageShell from "@/components/fest/PageShell";
import SectionHeading from "@/components/fest/SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ImageIcon, Play } from "lucide-react";
import { useState } from "react";
import Award from "/Award.jpg";
import College from "/College.jpg";
import Cups from "/Cups.jpg";
import Flashmob from "/Flashmob.jpg";
import GC from "/GC.jpg";
import PIC1lab from "/PIC1 lab.jpg";
import lab from "/PIC 4.jpg";
import Stage2 from "/Stage2.jpg";
import Veg from "/V&F.jpg";

const galleryImages: Array<{ src: string; title: string }> = [
  { src: Stage2, title: "Udgosh 2.0 Stage Event" },
  { src: Flashmob, title: "Udgosh 2.0 Flashmob Performance" },
  { src: Veg, title: "Vegetable and Fruit Carving Competition" },
  { src: Award, title: "Udgosh 2.0 Award Ceremony" },
  { src: GC, title: "Udgosh 2.0 Genral Championship" },
  { src: College, title: "College Campus" },
  { src: PIC1lab, title: "Library" },
  { src: Cups, title: "Trophy Display" },
  { src: lab, title: "Computer Lab" },
];

const videos: Array<{ src: string; title: string }> = [
  { src: "/Udgosh .mp4", title: "Udgosh 2.0" },
];

type MediaItem = {
  src: string;
  title: string;
  type: "image" | "video";
};

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media);
    setLightboxOpen(true);
  };

  return (
    <PageShell>
      <div className="fest-container pb-16 pt-8 sm:pt-12">
        <SectionHeading
          eyebrow="Memories"
          title="Gallery"
          subtitle="A glimpse of our vibrant campus spirit and unforgettable celebrations"
        />

        {galleryImages.length > 0 ? (
          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.title}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.04, 0.3) }}
                onClick={() => openLightbox({ ...image, type: "image" })}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] border border-ink/10 bg-white text-left sm:mb-4 sm:rounded-[1.5rem]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/80 to-transparent p-3 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                  <h3 className="text-xs font-semibold text-white sm:text-sm">{image.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-ink/20 bg-white py-20 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream">
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-ink">Gallery Coming Soon</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Images will be displayed here. Add your photos to the{" "}
              <code className="text-rose">public/gallery/</code> folder and update the Gallery.tsx
              file.
            </p>
          </div>
        )}

        {videos.length > 0 ? (
          <div className="mt-14">
            <h2 className="mb-6 font-display text-3xl font-extrabold text-ink">Videos</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, idx) => (
                <motion.button
                  key={video.title}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => openLightbox({ ...video, type: "video" })}
                  className="group relative aspect-video overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink text-left"
                >
                  <video
                    src={video.src}
                    className="h-full w-full object-cover opacity-90"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sunshine text-ink shadow-lg transition group-hover:scale-105">
                      <Play className="h-6 w-6 fill-current" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/80 to-transparent p-4">
                    <h3 className="font-semibold text-white">{video.title}</h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="!max-h-[90vh] !max-w-[95vw] overflow-hidden border-border bg-ivory p-0 text-ink sm:!max-w-[90vw] md:!max-w-6xl">
          <DialogHeader className="border-b border-border px-6 pb-4 pt-6">
            <DialogTitle className="font-display text-2xl">{selectedMedia?.title}</DialogTitle>
          </DialogHeader>
          {selectedMedia ? (
            <div className="flex max-h-[calc(90vh-120px)] items-center justify-center overflow-auto p-6">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-h-[75vh] w-auto max-w-full rounded-xl bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
