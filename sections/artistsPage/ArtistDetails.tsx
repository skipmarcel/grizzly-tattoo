import Image from "next/image";
import Link from "next/link";

const ArtistDetails = ({ artist }: { artist: any }) => {
  return (
    <section className="padding-t">
      <div className="container">
        <div className="grid lg:grid-cols-12 relative">
          <div className="lg:col-span-7">
            <div>
              <Image
                width={2000}
                height={2000}
                className="object-cover h-[20rem] lg:h-[40rem]"
                src={artist?.featuredImage?.node?.sourceUrl}
                alt={artist?.title}
              />
            </div>
          </div>

          <div className="lg:absolute right-0 lg:top-1/2 lg:-translate-y-1/2 bg-white lg:w-[55%] h-auto pt-8 lg:py-14 lg:px-10">
            <h3 className="text-3xl mb-2">{artist?.title}</h3>
            <h4 className="font-crimsonText italic font-normal text-lg mb-6">
              {artist?.artistDetails?.role}
            </h4>

            <p>{artist?.artistDetails?.shortDescription}</p>

            <ul className="mt-6 gap-1.5 text-">
              <li>
                <Link
                  target="_blank"
                  href={`mailto:${artist?.artistDetails?.contactInfo?.email}`}
                  rel="nofollow"
                  className="text-text flex gap-1 group"
                >
                  Email:{" "}
                  <span className="font-medium text-black transition-all duration-300">
                    {artist?.artistDetails?.contactInfo?.email}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={`https://www.instagram.com/${artist?.artistDetails?.contactInfo?.instagramUrl.replace(
                    "@",
                    ""
                  )}`}
                  rel="nofollow"
                  className="text-text flex gap-1 group"
                >
                  Instagram:
                  <span className="font-medium text-black transition-all duration-300">
                    {artist?.artistDetails?.contactInfo?.instagramUrl}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-3xl mb-6">About {artist?.title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: artist?.content }}
            className="prose prose-base max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtistDetails;
