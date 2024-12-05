"use client";
import { INFO } from "@/constants";
import formatPhone from "@/utils/formatPhone";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="relative container padding-t">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            href={`tel:${formatPhone(INFO.phone)}`}
            className="flex flex-col text-center items-center gap-4 group"
            target="_blank"
          >
            <div
              className={`inline-flex font-bold items-center text-lg gap-2 justify-center rounded-full`}
            >
              <Image
                width={500}
                height={500}
                className="w-48 group-hover:opacity-80 transition-all duration-300"
                alt="Call Us"
                src="/images/icons/icon-1.png"
              />
            </div>
            <div>
              <h4 className="text-black text-lg lg:text-3xl mt-2 mb-2 font-semibold">
                Call Us
              </h4>
              <p
                className={`font-crimsonText font-medium break-all text-base lg:text-lg text-gray-500 transition-colors duration-300`}
              >
                {INFO.phone}
              </p>
            </div>
          </Link>

          <Link
            href={`mailto:${INFO.email}`}
            className="flex flex-col text-center items-center gap-4 group"
            target="_blank"
          >
            <div
              className={`inline-flex font-semibold items-center text-lg gap-2 justify-center rounded-full`}
            >
              <Image
                width={500}
                height={500}
                className="w-48 group-hover:opacity-80 transition-all duration-300"
                alt="Email Us"
                src="/images/icons/icon-2.png"
              />
            </div>
            <div>
              <h4 className="text-black text-lg lg:text-3xl mt-2 mb-2 font-semibold">
                Email Us
              </h4>
              <p
                className={`font-crimsonText font-medium break-all text-base lg:text-lg text-gray-500 transition-colors duration-300`}
              >
                {INFO.email}
              </p>
            </div>
          </Link>

          <div className="text-lg">
            <Link
              href={`${INFO.locationUrl}`}
              className="flex flex-col text-center items-center gap-4 group"
              target="_blank"
            >
              <Image
                width={500}
                height={500}
                className="w-48 group-hover:opacity-80 transition-all duration-300"
                alt="Address"
                src="/images/icons/icon-3.png"
              />
              <div>
                <h4 className="text-black text-lg lg:text-3xl mt-2 mb-2 font-semibold">
                  Address
                </h4>

                <p
                  className={`font-crimsonText font-medium break-all text-base lg:text-lg text-gray-500 transition-colors duration-300`}
                >
                  {INFO.address.split(",")[0]}, {INFO.address.split(",")[1]},
                  <br />
                  {INFO.address.split(",").slice(2).join(",")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
