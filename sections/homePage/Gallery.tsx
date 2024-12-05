"use client";
import GalleryImageModal from "@/components/galleryModal";
import Image from "@/components/image";
import Title from "@/components/title";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Gallery = ({ gallery }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setViewerVisible(true);
  };

  const closeImageViewer = () => {
    setViewerVisible(false);
  };

  return (
    <section className="grid gap-1.5 pt-10">
      <motion.div
        className="grid gri-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 container !max-w-none"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        exit="exit"
        variants={motionVariants.fadeUp(40)}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {gallery?.map((item: any, index: number) => {
          const gridClasses = [
            "",
            "lg:col-start-1 lg:row-start-2",
            "lg:row-span-2 lg:col-start-2 lg:row-start-1 max-lg:col-span-2",
            "lg:col-start-3 lg:row-start-1",
            "lg:col-start-3 lg:row-start-2",
            "lg:row-span-2 lg:col-start-4 lg:row-start-1 max-lg:col-span-2",
          ];

          return (
            <div
              key={index}
              className={`relative cursor-pointer group ${gridClasses[index]}`}
              onClick={() => openImageViewer(index)}
            >
              <Image
                src={item.imageSrc}
                className="min-h-[14rem] lg:min-h-[17rem] w-full overflow-hidden h-full"
                imageClassName="object-cover group-hover:scale-105 transition-all duration-500"
                alt={`gallery-${index + 1}`}
              />
            </div>
          );
        })}
      </motion.div>

      <GalleryImageModal
        {...{
          closeImageViewer,
          currentImage,
          gallery: gallery?.map((item: any) => item?.imageSrc),
          viewerVisible,
        }}
      />
    </section>
  );
};

export default Gallery;
