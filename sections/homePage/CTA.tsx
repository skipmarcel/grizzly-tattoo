"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { INFO } from "@/constants";
import Image from "next/image";
import { Parallax } from "react-parallax";

const Cta = () => {
  return (
    <div className="relative z-10 group">
      <div className="relative isolate overflow-hidden min-h-[350px] w-full lg:aspect-[960/349] flex flex-col">
        <Image
          src="/images/cta/mask.png"
          width={2000}
          height={2000}
          className="absolute inset-0 object-cover z-10 w-full h-full"
          alt={INFO.companyName}
        />
        <div className="overflow-hidden h-full relative [&>div]:h-full flex-1 flex flex-col [&>.react-parallax]:flex-1 [&>.react-parallax]:flex [&>.react-parallax]:flex-col">
          <Parallax
            bgImageStyle={{ width: "100%" }}
            bgImage={"/images/about/image-30.jpg"}
            strength={300}
            className="[&>img]:h-full [&>img]:object-cover [&>img]:object-left [&>div]:h-full relative"
          >
            <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex flex-col justify-center flex-1 container">
              <div className="max-w-3xl flex flex-col lg:mt-0 items-center text-center mx-auto">
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <div className="absolute top-1/2 text-center w-full h-full justify-center flex flex-col items-center -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                      <div className="relative flex justify-center items-center border border-dashed border-white rounded-full p-1.5">
                        <Image
                          className="w-14 lg:w-20 h-14 lg:h-20 object-cover"
                          src="/images/testimonials/play-button.png"
                          alt="Play"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="p-0 text-white max-w-3xl border-none max-lg:max-w-[90%]">
                    <video
                      src="/videos/vid-8.mov"
                      className="object-cover w-full h-full max-h-[90vh]"
                      autoPlay
                      loop
                      controls={true}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Cta;
