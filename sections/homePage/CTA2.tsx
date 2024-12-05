"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-parallax";

const Cta2 = ({
  bookingURL = "/booking",
  bookingTitle = "Book Now",
}: {
  bookingURL?: string;
  bookingTitle?: string;
}) => {
  return (
    <div className="relative z-10 group">
      <div className="relative isolate overflow-hidden min-h-[450px] w-full lg:aspect-[960/349] flex flex-col">
        <Image
          src="/images/cta/mask-2.png"
          width={2000}
          height={2000}
          className="absolute inset-0 object-cover z-10 w-full h-full"
          alt="Ready for Your Next Tattoo?"
        />
        <div className="overflow-hidden h-full relative [&>div]:h-full flex-1 flex flex-col [&>.react-parallax]:flex-1 [&>.react-parallax]:flex [&>.react-parallax]:flex-col">
          <Parallax
            bgImageStyle={{ width: "100%" }}
            bgImage={"/images/about/image-13.jpg"}
            strength={300}
            className="[&>img]:h-full [&>img]:object-cover [&>div]:h-full relative"
          >
            <div className="z-10 absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 h-full flex flex-col justify-center flex-1 container">
              <div className="flex flex-col lg:mt-0 max-w-2xl">
                <h2 className="text-white mb-6">Ready for Your Next Tattoo?</h2>
                <p className="text-gray-100 text-lg mb-6">
                  From unique designs to expert craftsmanship, we’re here to
                  bring your vision to life. Walk-ins are always welcome!
                </p>

                <Link href={bookingURL}>
                  <Button className="min-w-[10rem]" variant="neutral">
                    {bookingTitle}
                  </Button>
                </Link>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Cta2;
