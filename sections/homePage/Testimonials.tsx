"use client";
import Image from "@/components/image";
import Title from "@/components/title";
import testimonials from "@/constants/testimonials";
import { cn } from "@/utils";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = ({ className }: { className?: string }) => {
  return (
    <section className={cn("relative pt-6 overflow-hidden", className)}>
      <div className="container !max-w-5xl relative">
        {/* public/images/testimonials/triangle.png */}

        {/* Arrow Right */}
        <div className="group/right hover:translate-x-3 w-20 z-10 overflow-hidden absolute top-1/2 lg:-translate-y-1/2 h-10 -right-0 flex items-center justify-center transition-all duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18px"
            height="40px"
            viewBox="0 0 16.043 40.009"
            className="rotate-180 swiper-button-next fill-black"
            enable-background="new 0 0 16.043 40.009"
          >
            <polygon
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#000"
              points="16.043,0 0,20.018 16.043,40.009 8.653,20.018 "
            ></polygon>
          </svg>
          <span className="swiper-button-next !opacity-0 h-full top-[1.4rem] w-full right-0"></span>
        </div>
        {/* Arrow Left */}
        <div className="group/left hover:-translate-x-3 w-20 z-10 overflow-hidden absolute top-1/2 lg:-translate-y-1/2 h-10 -left-0 flex items-center justify-center transition-all duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18px"
            height="40px"
            viewBox="0 0 16.043 40.009"
            enable-background="new 0 0 16.043 40.009"
            className="swiper-button-prev fill-black"
          >
            <polygon
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#000"
              points="16.043,0 0,20.018 16.043,40.009 8.653,20.018 "
            ></polygon>
          </svg>
          <span className="swiper-button-prev !opacity-0 h-full top-[1.4rem] w-full left-0"></span>
        </div>

        <Swiper
          speed={3000}
          className="h-full w-full hero-slider"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col">
              <div className="flex flex-col items-center text-center px-16 pb-20 flex-1 justify-center">
                <Title icon={false} title="Reviews" center className="b-0" />

                <div className="h-24 w-24 relative">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full h-full rounded-full"
                  />

                  <Image
                    src={"/images/testimonials/triangle.png"}
                    alt={"Triangle"}
                    className="rounded-full !absolute -top-2 z-10 h-24 w-32 left-1/2 -translate-x-1/2 opacity-30"
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http:/www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 38 25"
                    xmlSpace="preserve"
                    width="38px"
                    height="25px"
                    className="absolute bottom-3 -right-10"
                  >
                    <path
                      className="st0"
                      d="M17.9,8.9c0-4.9-4-8.9-8.9-8.9C4,0,0,4,0,8.9c0,4.4,3.2,8.1,7.5,8.8l0,0C7.2,20.1,5.8,22.9,4,25
		c5-1.2,13.7-7.2,13.9-15.5l0,0C17.9,9.3,17.9,9.1,17.9,8.9z"
                    ></path>
                    <path
                      fill="#080808"
                      d="M38,8.9C38,4,34,0,29.1,0c-4.9,0-8.9,4-8.9,8.9c0,4.4,3.2,8.1,7.5,8.8l0,0c-0.3,2.4-1.7,5.2-3.5,7.3
		c5-1.2,13.7-7.2,13.9-15.5l0,0C38,9.3,38,9.1,38,8.9z"
                    ></path>
                  </svg>
                </div>
                <div className="mt-7">
                  <p className="mb-7 text-lg">{item.testimonial}</p>
                  <p className="font-anton text-2xl text-black flex gap-2 items-center justify-center">
                    ~ {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
