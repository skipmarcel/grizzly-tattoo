import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  `overflow-hidden relative group/button inline-block text-left whitespace-nowrap text-[15px] font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300`,
  {
    variants: {
      variant: {
        default: "text-black fill-black",
        outline:
          "text-primary before:bg-primary [&>span]:fill-primary [&>span]:before:bg-primary/30 after:bg-primary hover:text-white dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        outline2:
          "text-white before:bg-primary [&>span]:fill-white [&>span]:before:bg-white/30 after:bg-primary hover:text-white hover:border-primary dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        neutral: "text-white fill-white",
      },
      size: {
        default: "",
        sm: "px-4 sm:px-5 py-3 sm:py-3.5",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  arrowLeft?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      arrowLeft = false,
      arrow = true,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span
          className={cn(
            "inline-flex gap-4 font-crimsonText text-lg items-center italic z-10 transition-all duration-500",
            arrow && "group-hover/button:translate-y-[-150%]"
          )}
        >
          {arrow && arrowLeft && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="8px"
              height="19px"
              viewBox="0 0 16.043 40.009"
              enable-background="new 0 0 16.043 40.009"
              className="w-4 rotate-180"
            >
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
                points="0,40.009 16.043,19.991 0,0 7.39,19.991 "
              ></polygon>
            </svg>
          )}
          {children}
          {arrow && !arrowLeft && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="8px"
              height="19px"
              viewBox="0 0 16.043 40.009"
              enable-background="new 0 0 16.043 40.009"
              className="w-4"
            >
              <polygon
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
                points="0,40.009 16.043,19.991 0,0 7.39,19.991 "
              ></polygon>
            </svg>
          )}
        </span>
        {arrow && (
          <span
            className={cn(
              "inline-flex gap-4 font-crimsonText text-lg items-center italic z-10 absolute left-0 top-[3px] transition-all duration-500 translate-y-full group-hover/button:translate-y-0"
            )}
          >
            {arrowLeft && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="8px"
                height="19px"
                viewBox="0 0 16.043 40.009"
                enable-background="new 0 0 16.043 40.009"
                className="w-4 rotate-180"
              >
                <polygon
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                  points="0,40.009 16.043,19.991 0,0 7.39,19.991 "
                ></polygon>
              </svg>
            )}
            {children}
            {!arrowLeft && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="8px"
                height="19px"
                viewBox="0 0 16.043 40.009"
                enable-background="new 0 0 16.043 40.009"
                className="w-4"
              >
                <polygon
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                  points="0,40.009 16.043,19.991 0,0 7.39,19.991 "
                ></polygon>
              </svg>
            )}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
