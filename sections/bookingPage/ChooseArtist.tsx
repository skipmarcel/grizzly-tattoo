"use client";
import Image from "@/components/image";
import Link from "next/link";

const ChooseArtist = ({ artists }: { artists: any }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <div>
      <h4 className="text-3xl mb-2">Who would you like to book with?</h4>
      <p className="text-gray-200"></p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10">
        {artists.map((item: any) => (
          <Link
            href={`/booking?artist=${item.slug}`}
            onClick={scrollToTop}
            scroll={false}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={item?.featuredImage?.node?.sourceUrl}
              alt={item?.title}
              className=" overflow-hidden w-full aspect-square rounded-sm mb-4 max-w-[20rem]"
              imageClassName="object-cover hover:scale-105 transition-all duration-500"
            />
            <h4 className="text-lg lg:text-2xl">{item?.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseArtist;
