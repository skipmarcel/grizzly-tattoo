import PageHead from "@/components/pageHead";
import GalleryLayout from "./GalleryLayout";

const GalleryPage = ({ gallery }: { gallery: any }) => {
  return (
    <>
      <PageHead pageName="Gallery" title="Gallery" />
      <GalleryLayout gallery={gallery} />
    </>
  );
};

export default GalleryPage;
