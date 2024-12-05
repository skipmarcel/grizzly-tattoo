"use client";
import GalleryImageModal from "@/components/galleryModal";
import Image from "@/components/image";
import { getGallery } from "@/lib/gallery.action";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type ImageProps = { imageSrc: string; title: string; cursor: string };

const GalleryLayout = ({
  gallery: initialGallery,
}: {
  gallery: ImageProps[];
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);
  const [ref, inView] = useInView();
  const [loaded, setLoaded] = useState(false);
  const [gallery, setGallery] = useState<any>(initialGallery);
  const [cursor, setCursor] = useState(
    initialGallery[initialGallery.length - 1]?.cursor || ""
  );
  const [showLoading, setShowLoading] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setViewerVisible(true);
  };

  const closeImageViewer = () => {
    setViewerVisible(false);
  };

  async function loadMoreGallery() {
    const { gallery: data }: any = await getGallery({
      cursor,
      first: 6,
    });
    const newGallery = [...(gallery?.length ? gallery : []), ...data];

    if (data.length < 6) {
      setLoaded(true);
    }

    if (gallery?.length > 0) {
      setCursor(newGallery[newGallery.length - 1].cursor || "");
      setGallery(newGallery);
      if (data?.length < 6) {
        setShowLoading(false);
      }
    } else {
      setShowLoading(false);
    }
  }

  useEffect(() => {
    if (inView && !loaded) {
      setShowLoading(true);
      loadMoreGallery();
    }
  }, [inView]);

  return (
    <>
      <section id="gallery" className="padding-y">
        <div className="container">
          <div className="grid xs:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-y-6">
            {gallery?.map((item: ImageProps, index: number) => (
              <div key={index}>
                <div
                  className="aspect-square xl:h-[26rem] overflow-hidden relative group cursor-pointer"
                  key={index}
                  onClick={() => openImageViewer(index)}
                >
                  <Image
                    src={item.imageSrc}
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
                <p className="text-lg sm:text-xl mt-2 leading-tight">
                  {/* {item.title} */}
                </p>
              </div>
            ))}
          </div>

          <div ref={ref}>
            {showLoading && (
              <div className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4">
                <svg
                  aria-hidden="true"
                  className="h-10 w-10 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>

          <GalleryImageModal
            {...{
              closeImageViewer,
              currentImage,
              gallery: gallery.map((item: ImageProps) => item.imageSrc),
              viewerVisible,
            }}
          />
        </div>
      </section>
    </>
  );
};
export default GalleryLayout;
