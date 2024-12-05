"use client";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../components/input";
import { useToast } from "../../components/ui/use-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Mobile is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string(),
});

const ContactForm = () => {
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
      const { name, email, message, phone } = data;

      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", "78dda09");
      formData.set("your-subject", `Hero Form: New Request from ${name}`);
      formData.set("your-name", `${name}`);
      formData.set("your-email", email);
      formData.set("your-message", message);
      formData.set("phone", phone);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_CONTACT_FORM_URL!,
        formData
      );

      if (response.status === 200) {
        toast({
          title: "Success",
          description:
            "Your request has been successfully submitted. One of our staff members will contact you shortly.",
          className: "bg-green-400 text-white",
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
    <div className=" max-w-[32rem] flex flex-col justify-between">
      <div className="py-10">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <div className="grid grid-cols-1 gap-8">
            <Input
              id="name"
              placeholder="Your Name"
              error={errors.name}
              {...register("name")}
              inputClassName="font-anton input text-lg !border-transparent !rounded-none !border-b border-dashed !border-b-black !bg-transparent !pl-[2px] placeholder:!text-black !text-black"
              messageClassName="absolute -bottom-6 !text-primary"
              required
            />

            <Input
              id="email"
              placeholder="Your Email Address"
              {...register("email")}
              error={errors.email}
              inputClassName="font-anton input text-lg !border-transparent !rounded-none !border-b border-dashed !border-b-black !bg-transparent !pl-[2px] placeholder:!text-black !text-black"
              messageClassName="absolute -bottom-6 !text-primary"
              required
            />

            <Input
              id="phone"
              placeholder="Your Phone Number"
              {...register("phone")}
              error={errors.phone}
              inputClassName="font-anton input text-lg !border-transparent !rounded-none !border-b border-dashed !border-b-black !bg-transparent !pl-[2px] placeholder:!text-black !text-black"
              messageClassName="absolute -bottom-6 !text-primary"
              required
            />

            <Input
              id="message"
              placeholder="Your Message"
              {...register("message")}
              error={errors.message}
              phoneInput
              textarea
              rows={2}
              inputClassName="font-anton input text-lg !border-transparent !rounded-none !border-b border-dashed !border-b-black !bg-transparent !pl-[2px] placeholder:!text-black !text-black resize-none"
              messageClassName="absolute -bottom-6 !text-primary"
              required
            />

            <Button variant="default" type="submit" id="btn-submit-request">
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
