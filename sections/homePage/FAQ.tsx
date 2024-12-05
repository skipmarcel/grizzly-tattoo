"use client";

import FAQ from "@/components/faq";
import Image from "@/components/image";
import Title from "@/components/title";
import faq from "@/constants/faq";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <section className="bg-white">
      <div className="container padding-y">
        <Title title={"Frequently Asked Questions"} center />
        <div className="grid lg:grid-cols-2 gap-y-4 gap-10 sm:gap-40 lg:gap-12">
          <motion.div
            className="flex w-full relative mx-auto min-h-[250px] sm:min-h-[350px]"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex w-full whitespace-nowrap relative min-h-[200px] max-h-[350px] lg:max-h-[700px] lg:h-[650px] overflow-hidden">
              <Image
                src="/images/about/image-4.jpg"
                alt="about"
                className="w-full h-full"
                imageClassName="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="">
              <FAQ faqs={faq} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
