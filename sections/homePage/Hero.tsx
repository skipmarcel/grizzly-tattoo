"use client";
import Image from "@/components/image";
import { Button } from "@/components/ui/button";
import motionVariants from "@/utils/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliders = [
  {
    title: "GRIZZLY TATTOO",
    imgSrc: "/images/hero/image-1.jpg",
  },
  {
    title: "Tattoos Made To Last",
    imgSrc: "/images/about/image-3.jpg",
  },
  {
    title: "Your Idea or Ours",
    imgSrc: "/images/about/image-17.jpg",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className="relative z-10 group -mt-[112px] lg:-mt-[127px]">
      <div className="relative isolate overflow-hidden min-h-[750px] h-[calc(100vh)] flex flex-col">
        {/* Arrow Right */}
        <div className="group/right z-10 overflow-hidden absolute top-1/2 lg:-translate-y-1/2 h-10 right-5 sm:right-5 flex items-center justify-center transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18px"
            height="40px"
            viewBox="0 0 16.043 40.009"
            className="rotate-180 swiper-button-next !opacity-100 !pointer-events-auto !cursor-pointer"
            enable-background="new 0 0 16.043 40.009"
          >
            <polygon
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#FFF"
              points="16.043,0 0,20.018 16.043,40.009 8.653,20.018 "
            ></polygon>
          </svg>
          <span className="pr-16 text-white font-crimsonText select-none">
            <span className="max-sm:hidden">
              {index + 1 > 3 ? 1 : index + 1}/3
            </span>
          </span>
        </div>
        {/* Arrow Left */}
        <div className="group/left z-10 overflow-hidden absolute top-1/2 lg:-translate-y-1/2 h-10 left-0 sm:left-5 flex items-center justify-center transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18px"
            height="40px"
            viewBox="0 0 16.043 40.009"
            enable-background="new 0 0 16.043 40.009"
            className="swiper-button-prev !opacity-100 !pointer-events-auto !cursor-pointer"
          >
            <polygon
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#FFF"
              points="16.043,0 0,20.018 16.043,40.009 8.653,20.018 "
            ></polygon>
          </svg>
          <span className="pl-16 text-white font-crimsonText select-none">
            <span className="max-sm:hidden">
              {index - 1 < 1 ? 3 : index - 1}/3
            </span>
          </span>
        </div>

        <Image
          imageClassName=" object-contain"
          src="/images/hero/svg.png"
          className="!absolute left-0 bottom-0 z-[10] w-[531px] h-[81px] select-none max-sm:hidden"
          alt="Hero Svg"
        />

        <Link href="#about">
          <Image
            imageClassName="object-contain"
            src="/images/hero/scroll.png"
            className="!absolute left-1/2 -translate-x-1/2 bottom-24 lg:bottom-10 w-[21px] h-[43px] z-[10] select-none"
            alt="Hero Scroll"
          />
        </Link>

        <Swiper
          // effect={"fade"}
          speed={3000}
          className="h-full w-full hero-swiper flex-1 flex flex-col [&>.swiper-wrapper]:flex-1"
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={(item) => setIndex(item.activeIndex + 1)}
          modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        >
          {sliders.map((item, index) => (
            <SwiperSlide key={index} className="overflow-hidden hero-slider">
              {({ isActive }) => (
                <AnimatePresence>
                  <Image
                    src={item.imgSrc}
                    className=" inset-0 w-full h-full [&>div]:w-full [&>div]:h-full before:absolute before:inset-0 before:w-full before:bg-gradient-to-r before:from-black/50 before:via-black/50 before:to-black/50 before:z-50"
                    imageClassName="object-cover"
                    alt={item.title}
                  />
                  <motion.div>
                    <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex flex-col justify-center flex-1 container">
                      <div className="max-w-3xl flex flex-col lg:mt-0 py-20 items-center text-center mx-auto relative z-50">
                        {index === 0 && (
                          <h1 className="text-white text-center relative font-extrabold flex flex-col items-center text-6xl xs:text-4xl md:text-[72px] leading-[95%] lg:leading-[90%]">
                            <motion.span
                              className="uppercase relative text-8xl sm:text-6xl md:text-[80px]"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeLeft(40)}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              GRIZZLY
                            </motion.span>
                            {/* <motion.span
                              className="uppercase relative text-6xl sm:text-6xl md:text-[80px]"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeLeft(40)}
                              transition={{ duration: 0.5, delay: 0.15 }}
                            >
                              TATTOO
                            </motion.span> */}
                          </h1>
                        )}

                        {index == 1 && (
                          <h2 className="text-white text-center relative font-extrabold flex flex-col items-center text-3xl xs:text-4xl md:text-[72px] leading-[95%] lg:leading-[90%]">
                            <motion.span
                              className="uppercase -left-10 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeLeft(40)}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              {item.title.split(" ")[0]}
                            </motion.span>
                            <motion.span
                              className="uppercase -left-0 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeLeft(40)}
                              transition={{ duration: 0.5, delay: 0.15 }}
                            >
                              {item.title.split(" ")[1]}
                            </motion.span>
                            <motion.span
                              className="uppercase -left-0 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeUp(10)}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {item.title.split(" ")[2]}
                            </motion.span>
                            <motion.span
                              className="uppercase right-3 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeRight(40)}
                              transition={{ duration: 0.5, delay: 0.25 }}
                            >
                              {item.title.split(" ")[3]}
                            </motion.span>
                            <motion.span
                              className="uppercase -right-20 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeRight(40)}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {item.title.split(" ")[4]}
                            </motion.span>
                          </h2>
                        )}

                        {index == 2 && (
                          <h2 className="text-white text-center relative font-extrabold flex flex-col items-center text-3xl xs:text-4xl md:text-[72px] leading-[95%] lg:leading-[90%]">
                            <motion.span
                              className="uppercase -left-0 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeLeft(40)}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              {item.title.split(" ")[0]}
                            </motion.span>
                            <motion.span
                              className="uppercase -left-0 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeLeft(40)}
                              transition={{ duration: 0.5, delay: 0.15 }}
                            >
                              {item.title.split(" ")[1]}
                            </motion.span>
                            <motion.span
                              className="uppercase -left-0 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeUp(10)}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {item.title.split(" ")[2]}
                            </motion.span>
                            <motion.span
                              className="uppercase -right-0 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeRight(40)}
                              transition={{ duration: 0.5, delay: 0.25 }}
                            >
                              {item.title.split(" ")[3]}
                            </motion.span>
                            <motion.span
                              className="uppercase right-20 relative"
                              initial="initial"
                              whileInView="animate"
                              viewport={{ once: false, margin: "0px" }}
                              key={index}
                              exit="exit"
                              variants={motionVariants.fadeRight(40)}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {item.title.split(" ")[4]}
                            </motion.span>
                          </h2>
                        )}

                        <motion.div
                          className="mt-8 flex flex-wrap items-center gap-y-6 gap-x-2 sm:gap-x-4"
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: false, margin: "0px" }}
                          exit="exit"
                          variants={motionVariants.fadeDown(40)}
                          transition={{ duration: 1, delay: 0.3 }}
                        >
                          <Link href="/artists">
                            <Button className="min-w-[10rem]" variant="neutral">
                              Artists
                            </Button>
                          </Link>
                        </motion.div>

                        <motion.div
                          className="mt-8 flex flex-wrap items-center gap-y-6 gap-x-2 sm:gap-x-4"
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: false, margin: "0px" }}
                          exit="exit"
                          variants={motionVariants.fadeDown(40)}
                          transition={{ duration: 1, delay: 0.3 }}
                        >
                          <Link href="/booking">
                            <Button className="min-w-[10rem]" variant="neutral">
                              Booking
                            </Button>
                          </Link>
                        </motion.div>

                        <motion.div
                          className="mt-8 flex flex-wrap items-center gap-y-6 gap-x-2 sm:gap-x-4"
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: false, margin: "0px" }}
                          exit="exit"
                          variants={motionVariants.fadeDown(40)}
                          transition={{ duration: 1, delay: 0.3 }}
                        >
                          <Link href="/gallery">
                            <Button className="min-w-[10rem]" variant="neutral">
                              Gallery
                            </Button>
                          </Link>
                        </motion.div>

                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

// {
//   index === 0 && (
//     <h1 className="text-white text-center relative font-extrabold flex flex-col items-center text-6xl xs:text-4xl md:text-[72px] leading-[95%] lg:leading-[90%]">
//       <motion.span
//         className="uppercase -left-10 relative"
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: false, margin: "0px" }}
//         key={index}
//         exit="exit"
//         variants={motionVariants.fadeLeft(40)}
//         transition={{ duration: 0.5, delay: 0.1 }}
//       >
//         {item.title.split(" ")[0]}
//       </motion.span>
//       <motion.span
//         className="uppercase -left-16 relative"
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: false, margin: "0px" }}
//         key={index}
//         exit="exit"
//         variants={motionVariants.fadeLeft(40)}
//         transition={{ duration: 0.5, delay: 0.15 }}
//       >
//         {item.title.split(" ")[1]}
//       </motion.span>
//       <motion.span
//         className="font-birthstone text-[64px] my-1 sm:text-[100px]"
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: false, margin: "0px" }}
//         key={index}
//         exit="exit"
//         variants={motionVariants.fadeUp(10)}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {item.title.split(" ")[2]}
//       </motion.span>
//       <motion.span
//         className="uppercase -right-8 relative"
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: false, margin: "0px" }}
//         key={index}
//         exit="exit"
//         variants={motionVariants.fadeRight(40)}
//         transition={{ duration: 0.5, delay: 0.25 }}
//       >
//         {item.title.split(" ")[3]}
//       </motion.span>
//       <motion.span
//         className="uppercase -right-10 relative"
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: false, margin: "0px" }}
//         key={index}
//         exit="exit"
//         variants={motionVariants.fadeRight(40)}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         {item.title.split(" ")[4]}
//       </motion.span>
//     </h1>
//   );
// }
