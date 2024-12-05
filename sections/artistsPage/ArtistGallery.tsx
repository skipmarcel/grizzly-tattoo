"use client";
import GalleryImageModal from "@/components/galleryModal";
import Image from "@/components/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ArtistGallery = ({ artist }: { artist: any }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setViewerVisible(true);
  };

  const closeImageViewer = () => {
    setViewerVisible(false);
  };

  console.log(artist?.artistDetails?.gallery);

  return (
    <section className="padding-b">
      <div className="container">
        <div className="mt-10">
          <h3 className="text-3xl mb-6">Portfolio Highlights</h3>
          <div className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {artist?.artistDetails?.gallery?.map((item: any, index: number) => (
              <div>
                <div
                  className="aspect-square overflow-hidden relative group cursor-pointer"
                  key={index}
                  onClick={() => openImageViewer(index)}
                >
                  <Image
                    src={item}
                    alt={`gallery-image-${index}`}
                    className="w-full h-full"
                    imageClassName="object-cover transition-all duration-300"
                  />

                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-white w-8"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GalleryImageModal
          {...{
            closeImageViewer,
            currentImage,
            gallery: artist?.artistDetails?.gallery,
            viewerVisible,
          }}
        />
      </div>
    </section>
  );
};

export default ArtistGallery;
