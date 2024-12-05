"use client";

import Input from "../../components/input";
import { useToast } from "../../components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Select from "@/components/select";
import { Button } from "@/components/ui/button";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  subject: yup.string(),
  service: yup.string(),
  company: yup.string(),
  message: yup.string(),
});
const ContactInner = () => {
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
      const { name, email, phoneNumber, message, subject, service, company } =
        data;

      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", "5668afe");
      formData.set("your-subject", subject);
      formData.set("your-name", `${name}`);
      formData.set("your-email", email);
      formData.set("your-phone", phoneNumber);
      formData.set("your-message", message);

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
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full"
    >
      <div className="grid sm:grid-cols-2 gap-3 gap-y-5">
        <Input
          id="name"
          label="Name"
          placeholder="Name"
          error={errors.name}
          {...register("name")}
          required
        />
        <Input
          id="email"
          label="Email"
          placeholder="Email"
          {...register("email")}
          error={errors.email}
          required
        />
        <Input
          id="phoneNumber"
          label="Phone"
          placeholder="Phone"
          {...register("phoneNumber")}
          value={watch("phoneNumber") || ""}
          phoneInput
          error={errors.phoneNumber}
          required
        />
        <Input
          id="subject"
          label="Subject"
          placeholder="Subject"
          error={errors.name}
          {...register("subject")}
          required
        />
        <div className="col-span-1 sm:col-span-2">
          <Input
            label="Message"
            id="message"
            placeholder="Message"
            {...register("message")}
            error={errors.message}
            textarea
            rows={5}
          />
        </div>
      </div>
      <div className="mt-7">
        <Button className="font-mulish font-medium" variant="outline">
          Submit Now
        </Button>
      </div>
    </form>
  );
};

export default ContactInner;
