"use client";
import Image from "@/components/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Video = () => {
  return (
    <section className="relative min-h-[24rem] sm:min-h-[28rem] flex flex-col mb-20">
      <div className="container !max-w-5xl relative h-full flex flex-col flex-1 group">
        <Image
          src={"/images/about/image-4.jpg"}
          alt="video"
          className={`!absolute w-full h-full inset-0 overflow-hidden`}
          imageClassName="object-cover object-"
        />

        <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:opacity-100 opacity-20" />

        <Dialog>
          <DialogTrigger>
            {" "}
            <div className="absolute top-1/2 text-center w-full h-full justify-center flex flex-col items-center -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
              <div className="relative flex justify-center items-center border border-dashed border-white rounded-full p-1.5">
                <Image
                  className="w-20 h-20"
                  src="/images/testimonials/play-button.png"
                  alt="Play"
                  imageClassName="object-cover"
                />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="p-0 text-white max-w-3xl border-none">
            <video
              src="/videos/vid-6.mp4"
              className="object-cover w-full h-full max-h-[90vh]"
              autoPlay
              loop
              controls={true}
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Video;
