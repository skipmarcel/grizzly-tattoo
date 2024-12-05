"use client";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Image from "@/components/image";
import Title from "@/components/title";

export default () => {
  return (
    <div className="relative z-10 -mt-44 padding-b overflow-hidden">
      <div className="container">
        <Image
          alt={"contact-2"}
          className="!absolute w-[350px] h-[360px] bottom-3 right-60 opacity-5"
          src={"/images/contactForm/2.png"}
          imageClassName="object-cover"
        />
        <motion.div
          className="bg-white shadow-md rounded-md overflow-hidden relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          exit="exit"
          variants={motionVariants.fadeUp(40)}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="lg:grid grid-cols-12">
            <div className="col-span-5">
              <Image
                alt={"contact"}
                className="w-full h-full min-h-[350px]"
                src={"/images/contactForm/1.jpg"}
                imageClassName="object-cover"
              />
            </div>
            <div className="col-span-7">
              <div className="px-5 md:px-20 py-10 lg:py-24 relative z-10">
                <Title subTitle="Request a Call Back" />
                <p className="mt-3 mb-5 lg:mb-14">
                  Fill out the form below, and one of our team members will
                  contact you as soon as possible to assist with your inquiry.
                  We're here to help!
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
