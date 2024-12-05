"use client";
import Image from "@/components/image";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { INFO } from "@/constants";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section className="padding-y" id="about">
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-20">
        <div className="relative max-lg:pt-10 max-lg:mb-2">
          <motion.div
            className="h-full w-full flex flex-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            exit="exit"
            variants={motionVariants.fadeLeft(40)}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Image
              src="/images/about/image-6.jpg"
              className="w-[66%]  min-h-[16rem] xs:min-h-[18rem] lg:min-h-[30rem] rounded-md overflow-hidden rotate-[-4deg] border border-t-[16px] border-b-[40px] sm:border-b-[60px] border-r-[16px] border-l-[16px] shadow-card border-white"
              imageClassName="object-cover"
              alt="about"
            />

            <Image
              src="/images/about/image-2.jpg"
              className="w-[66%] mt-[-200px] lg:mt-[-300px]  min-h-[16rem] xs:min-h-[18rem] lg:min-h-[30rem] rounded-md ml-auto overflow-hidden rotate-[5deg] border border-t-[16px] border-b-[40px] sm:border-b-[60px] border-r-[16px] border-l-[16px] shadow-card border-white"
              imageClassName="object-cover"
              alt="about"
            />
          </motion.div>
        </div>
        <div className="lg:pt-10">
          <div className="max-w-lg flex flex-col">
            <Title
              title="Portland’s Trusted Tattoo Studio"
              // subTitle={`About ${INFO.companyName}`}
              titleClassName="text-3xl sm:text-4xl lg:text-6xl text-pretty"
            />
            <motion.p
              className=""
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Grizzly Tattoo, we’ve been proudly creating stunning, custom
              tattoos since 2011. Located in the heart of Portland, OR, our shop
              is a welcoming space where artistry, precision, and individuality
              come together.
            </motion.p>

            <motion.p
              className="mt-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We’re passionate about crafting tattoos that resonate with your
              personal style and story. Our experienced artists specialize in a
              wide range of styles, from intricate line work to bold, colorful
              designs. Whether it’s your first tattoo or an addition to your
              collection, we’ll ensure your experience is professional,
              comfortable, and memorable.
            </motion.p>

            <motion.p
              className="mt-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              We welcome walk-ins and appointments, so feel free to stop by,
              meet our talented team, and explore the possibilities for your
              next tattoo. At Grizzly Tattoo, your vision is our art.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-y-6 gap-x-2 sm:gap-x-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              exit="exit"
              variants={motionVariants.fadeDown(40)}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Link href="/booking">
                <Button className="min-w-[10rem]">Book Now</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
