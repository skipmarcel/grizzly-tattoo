import Image from "next/image";
import ChooseArtist from "./ChooseArtist";
import DetailsForm from "./DetailsForm";

const BookingForm = ({
  artists,
  artistSlug,
  artist,
}: {
  artists: any;
  artistSlug?: string;
  artist?: any;
}) => {
  return (
    <section className="pt-28 lg:pt-40">
      <div className="container relative">
        <Image
          src="/images/booking/svg.png"
          alt={`Make a Reservation`}
          width={500}
          height={500}
          className="!absolute object-cover top-0 -translate-y-full left-1/2 -translate-x-1/2 max-xs:w-[90%] max-md:max-w-xs"
        />

        <div className="py-10 px-6 lg:p-10 border border-gray-100 shadow-lg bg-black text-white max-w-5xl mx-auto">
          {!artistSlug ? (
            <ChooseArtist {...{ artists }} />
          ) : (
            <DetailsForm artist={artist} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
