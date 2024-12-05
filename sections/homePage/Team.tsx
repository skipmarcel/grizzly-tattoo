"use client";

import Image from "@/components/image";
import Title from "@/components/title";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Team = ({ artists }: { artists: any }) => {
  return (
    <section className="padding-y">
      <div className="container">
        <Title title="Our Artists" center />
        <div className="grid lg:grid-cols-3 gap-8 gap-y-10">
          {artists.map((item: any, index: number) => (
            <div className="group overflow-hidden" key={index}>
              <Link href={`/artists/${item.slug}`}>
                <Image
                  src={item?.featuredImage?.node?.sourceUrl}
                  alt={item?.title}
                  className=" overflow-hidden h-[20rem] lg:h-[24rem]"
                  imageClassName="object-cover hover:scale-105 transition-all duration-500 hover:-rotate-1"
                />
              </Link>
              <div className="pt-6">
                <Link href={`/artists/${item.slug}`}>
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                </Link>
                <p className="mb-6">{item?.artistDetails?.shortDescription}</p>
                <div className="flex gap-2 items-center flex-wrap">
                  {item?.artistDetails?.contactInfo?.email && (
                    <Link
                      target="_blank"
                      href={`mailto:${item?.artistDetails?.contactInfo?.email}`}
                      rel="nofollow"
                      className="p-1.5 bg-black flex items-center justify-center w-7 h-7"
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="text-white w-4 h-4"
                      />
                    </Link>
                  )}
                  {item?.artistDetails?.contactInfo?.instagramUrl && (
                    <Link
                      target="_blank"
                      href={`https://www.instagram.com/${item?.artistDetails?.contactInfo?.instagramUrl.replace(
                        "@",
                        ""
                      )}`}
                      rel="nofollow"
                      className="p-1.5 bg-black flex items-center justify-center w-7 h-7"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white w-4 h-4"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
