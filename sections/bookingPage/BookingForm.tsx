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
    <section className="pt-10 lg:pt-20">
      <div className="container relative">
        <div className="py-10 px-6 lg:p-10 border border-gray-100 shadow-lg bg-black text-white max-w-5xl mx-auto rounded-lg">
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
