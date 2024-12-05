import PageHead from "@/components/pageHead";
import Cta2 from "../homePage/CTA2";
import Testimonials from "../homePage/Testimonials";
import ArtistDetails from "./ArtistDetails";
import ArtistGallery from "./ArtistGallery";

const ArtistPage = ({ artist }: { artist: any }) => {
  return (
    <>
      <PageHead title={artist.title} imgSrc="/images/pagehead/image-7.jpeg" />
      <ArtistDetails {...{ artist }} />
      <ArtistGallery {...{ artist }} />
      <Cta2
        bookingTitle={`Book with ${artist.title}`}
        bookingURL={`/booking?artist=${artist.slug}`}
      />
      <Testimonials className="padding-y" />
    </>
  );
};

export default ArtistPage;
