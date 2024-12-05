import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const instaItems = [
  {
    imgSrc: "/images/instagram/image-5.jpg",
    linkUrl: "https://www.instagram.com/grizzlytattoo/p/DCVWl9fPJD5/",
  },

  {
    imgSrc: "/images/instagram/image-9.jpg",
    linkUrl: "https://www.instagram.com/grizzlytattoo/p/DCE1jbtP_rN/",
  },
  {
    imgSrc: "/images/instagram/image-8.jpg",
    linkUrl: "https://www.instagram.com/grizzlytattoo/p/DB8Ur3_KYd5/",
  },

  {
    imgSrc: "/images/instagram/image-7.jpg",
    linkUrl: "https://www.instagram.com/grizzlytattoo/p/DBm2YWgShVv/",
  },
  {
    imgSrc: "/images/instagram/image-10.jpg",
    linkUrl: "https://www.instagram.com/grizzlytattoo/p/DBlwsw2v50V/",
  },

  {
    imgSrc: "/images/instagram/image-4.jpg",
    linkUrl: "https://www.instagram.com/grizzlytattoo/p/DBczoeWvu36/",
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 gap-2">
      {instaItems.map((item, index) => (
        <Link
          href={item.linkUrl}
          key={index}
          className="relative overflow-hidden group"
          target="_blank"
          rel="nofollow noopener"
        >
          <Image
            src={item.imgSrc}
            width={2000}
            height={2000}
            alt={`insta-${index}`}
            className="aspect-square object-cover min-h-[8rem] lg:min-h-[10rem]"
          />

          <div className="bg-black/40 absolute inset-0 flex justify-center items-center transition-all duration-500 group-hover:opacity-100 opacity-0">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-5 h-5 text-white"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
