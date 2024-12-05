"use client";

import Input from "../input";
import { useToast } from "../ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { cn } from "@/utils";
import Image from "../image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  // subject: yup.string().required("Subject is required"),
});
const ContactInner = ({ bgColor = "" }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const { name, email, phoneNumber, message, subject } = data;

      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", "ab1c42d");
      formData.set("your-subject", "Subscribe form");
      formData.set("your-email", email);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_SUBSCRIBE_FORM_URL!,
        formData
      );

      if (response.status === 200) {
        toast({
          title: "Success",
          description:
            "Your request has been successfully submitted. One of our staff members will contact you shortly.",
          className: "bg-green-400 text-gray-300 ",
        });
        reset();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="flex flex-row w-full items-center mx-auto relative "
    >
      <Input
        id="email"
        placeholder="Email"
        {...register("email")}
        error={errors.email}
        required
        className="w-full !bg-[#151d35] text-white"
        inputClassName="!bg-[#151d35] !border-none !rounded-md"
      />
      <button
        className="bg-transparent w-6 absolute top-0 right-3 bottom-0"
        type="submit"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="text-primary w-4" />
      </button>
    </form>
  );
};

export default ContactInner;
