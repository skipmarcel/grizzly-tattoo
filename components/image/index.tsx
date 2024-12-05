"use client";
import { cn } from "@/utils";
import NextImage from "next/image";
import { useState } from "react";

type ImageProps = {
  className: string;
  imageClassName?: string;
  src: string;
  alt: string;
  onClick?: () => void;
  hasBlur?: boolean;
};

const Image = ({
  className,
  imageClassName,
  hasBlur = true,
  ...rest
}: ImageProps) => {
  // const [isLoading, setLoading] = useState(true);
  return (
    <div className={`relative ${className}`}>
      <NextImage
        className={cn("duration-700 ease-in-out", imageClassName)}
        {...rest}
        fill={true}
        // onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default Image;
