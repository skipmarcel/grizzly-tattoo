import PageHead from "@/components/pageHead";
import BookingForm from "./BookingForm";
import { getArtists } from "@/lib/artists.action";
import FAQSection from "../homePage/FAQ";

const BookingPage: any = async ({
  artistSlug,
  artist,
}: {
  artistSlug?: string;
  artist?: any;
}) => {
  const { artists } = await getArtists({ first: 20 });
  return (
    <>
      <PageHead title="Booking" imgSrc="/images/pagehead/goldfish2.jpg" />
      <BookingForm {...{ artists, artistSlug, artist }} />
      <FAQSection />
    </>
  );
};

export default BookingPage;
