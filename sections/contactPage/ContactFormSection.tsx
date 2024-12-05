"use client";

import Image from "@/components/image";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import ContactInner from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="padding-y relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-14">
        <motion.div
          className="relative lg:pr-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          exit="exit"
          variants={motionVariants.fadeUp(40)}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            alt="Explore Our Featured Projects & Creations"
            src="/images/about/image-6.jpg"
            className="bg-primary-bg !absolute bottom-0 top-0 w-full"
            imageClassName="object-cover"
          />
        </motion.div>
        <ContactInner />
      </div>
    </section>
  );
};

export default ContactFormSection;
