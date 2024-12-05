"use client";
import Input from "@/components/input";
import { useToast } from "@/components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});
const UserSubscribe = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const { email } = data;

      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", "69ede7c");
      formData.set("your-subject", `New Subscribe`);
      formData.set("your-email", email);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_SUBSCRIBE_FORM_URL!,
        formData
      );

      if (response.status === 200) {
        toast({
          title: "Success",
          description:
            "Thank you for subscribing! You're now part of our community.",
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
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col"
    >
      <div className="flex items-center relative">
        <Input
          id="email"
          {...register("email")}
          error={errors.email}
          placeholder="Enter Email"
          required
          className="w-full"
          inputClassName="!w-full !h-12 text-sm !bg-white !border-none !text-gray-500 placeholder:!text-gray-400 flex-1 !pr-20"
        />

        <button
          type="submit"
          className="w-16 !h-12 flex top-0 items-center justify-center !bg-white absolute right-0 before:left-0 before:absolute before:w-[1px] before:bg-gray-200 before:h-[70%] before:top-1/2 before:-translate-y-1/2"
        ></button>
      </div>
    </form>
  );
};

export default UserSubscribe;
