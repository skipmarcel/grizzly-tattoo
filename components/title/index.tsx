"use client";
import { cn } from "@/utils";

const Title = ({
  title,
  subTitle,
  className,
  center,
  white,
  right,
  subTitleClassName = "",
  titleClassName = "",
  description = "",
  icon = true,
}: any) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-2.5 lg:gap-3 mb-6 sm:mb-8 md:mb-10 h-fit",
        center && "items-start sm:items-center xs:flex-col",
        right && "items-end sm:items-end",
        white && "text-white",
        className
      )}
    >
      {subTitle && (
        <h3
          className={cn(
            "tracking-widest text-gray-400 text-lg uppercase font-semibold flex items-center gap-2",
            center && "sm:text-center",
            white && "text-gray-100",
            subTitleClassName
          )}
        >
          {subTitle}
        </h3>
      )}

      {title && (
        <h2
          className={cn(
            `text-pretty flex flex-col items-start relative text-primary-darker text-3xl xs:text-4xl lg:text-7xl font-semibold gap-2 w-fit max-w-2xl !leading-[110%]`,
            center && "sm:text-center sm:items-center",
            white && "text-white",
            titleClassName
          )}
        >
          {title}

          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 32 7"
              width="33px"
              height="8px"
              className="mt-3"
            >
              <path
                fill="#080808"
                d="M0.6,6.4C0.2,6.2,0,5.8,0,5.3c0-0.9,0.6-1.8,1.7-2.6c1.4-1,2.6-1.7,3.6-2.1C6.2,0.2,7.4,0,8.9,0
		c2.2,0,4.9,0.6,8.1,1.8c3.3,1.2,6,1.8,8.1,1.8c0.3,0,0.6,0,1-0.1c0.3,0,0.6-0.1,0.8-0.2c0.2-0.1,0.5-0.2,0.8-0.3
		c0.3-0.2,0.6-0.3,0.7-0.3c0.2-0.1,0.4-0.2,0.8-0.5c0.3-0.2,0.6-0.4,0.7-0.5c0.1-0.1,0.3-0.2,0.7-0.5c0.4-0.3,0.6-0.5,0.7-0.6
		C31.8,0.8,32,1.2,32,1.8c0,1-0.5,1.9-1.6,2.6c-1.4,1-2.6,1.7-3.5,2.1C25.9,6.8,24.7,7,23.2,7c-2.2,0-4.9-0.6-8.1-1.8
		c-3.3-1.2-6-1.8-8.2-1.8C6.1,3.4,5.2,3.6,4.4,4C3.6,4.3,3,4.6,2.6,4.8C2.3,5.1,1.6,5.6,0.6,6.4z"
              ></path>
            </svg>
          )}
        </h2>
      )}

      {/* {description && (
        <p className={cn("mx-auto max-w-3xl", center && "sm:text-center")}>
          {description}
        </p>
      )} */}
    </div>
  );
};

export default Title;
