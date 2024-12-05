"use client";

import { INFO } from "@/constants";
import navigations from "@/constants/navigations";
import socialLinks from "@/constants/socialLinks";
import { cn } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "../image";
import Gallery from "./Gallery";

const Footer = () => {
  return (
    <footer className="relative bg-[#191919]">
      <div className="relative z-10">
        <div className="relative overflow-hidden">
          <Image
            src="/images/footer/bg.jpg"
            alt={`Make a Reservation`}
            className="!absolute inset-0 object-cover"
            imageClassName="object-cover"
          />

          <div className="py-6 lg:py-10 relative z-10 container flex justify-center items-center">
            <h4 className="text-white uppercase">
              Make a Reservation: {INFO.phone}
            </h4>
          </div>
        </div>
        <div className="container !max-w-none pt-10">
          <Gallery />
        </div>
        <div className="container">
          <div className="flex flex-col items-center text-center pt-16 lg:pt-28">
            <Link href="/" className="mb-4 flex">
              <Image
                className={cn("w-32 lg:w-40 aspect-[2140/1270]")}
                src="/logo.png"
                alt="Logo"
                hasBlur={false}
              />
            </Link>

            <div className="flex gap-6 mt-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-300 flex items-start gap-2"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-5 h-5 text-gray-300 hover:text-primary transition-all duration-300"
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center flex-wrap gap-x-7 gap-y-1 xl:gap-x-16 py-10 lg:py-16 justify-center text-center">
              {navigations.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "font-anton uppercase transition-colors text-lg duration-300 text-white relative hover:text-primary-light after:w-0 after:absolute after:bottom-[-2px] header-nav-dot after:left-[-1px] after:h-[4px] after:bg-dot after:transition-all after:duration-300 hover:after:w-full"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
