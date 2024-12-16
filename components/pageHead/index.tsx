import { cn } from "@/utils";
import Image from "next/image";

type PageHeadProps = {
  title?: string;
  description?: string;
  hasBreadCrumb?: boolean;
  pageName?: string;
  className?: string;
  secondLink?: string;
  secondTitle?: string;
  small?: boolean;
  imgSrc?: string;
};

const PageHead = ({
  title,
  hasBreadCrumb = false,
  secondLink = "",
  secondTitle = "",
  pageName,
  className,
  small,
  imgSrc = "/images/pagehead/woodsign.jpg",
}: PageHeadProps) => {
  return (
    <section id="hero" className="relative z-10 -mt-[112px] lg:-mt-[127px]">
      <div
        className={cn(
          "relative isolate overflow-hidden h-auto",
          "min-h-[16rem] lg:min-h-[450px] flex flex-col justify-center"
        )}
      >
        <Image
          width={2000}
          height={2000}
          src="/images/hero/svg-2.png"
          className="!absolute left-0 bottom-0 z-[1] select-none object-cover"
          alt="Hero Svg"
        />
        <Image
          width={2000}
          height={2000}
          src={imgSrc}
          alt="bg-hero"
          className="!absolute -translate-y-1/2 top-1/2 -z-10 w-full object-cover h-full"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div
          className={cn(
            "relative z-50 text-white text-lg pb-4 lg:pb-10 pt-28 lg:pt-40",
            className
          )}
        >
          <div className="container flex flex-col items-center text-center justify-center">
            {title && (
              <h1
                className={cn(
                  "text-2xl mb-5 sm:text-4xl lg:text-7xl max-w-2xl uppercase tracking-wide",
                  small && "lg:text-3xl"
                )}
              >
                {title}
              </h1>
            )}
            {/* {hasBreadCrumb && (
              <div className="flex gap-2 whitespace-nowrap text-sm lg:text-lg">
                <Link href="/" className="flex gap-2 group items-center">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="w-4 group-hover:text-primary text-white transition-all duration-300"
                  />
                  <div className="group-hover:text-primary text-white transition-all duration-300">
                    Home
                  </div>
                </Link>
                <span>/</span>

                {secondTitle &&
                  (secondLink ? (
                    <>
                      <Link
                        href={secondLink}
                        className="flex gap-2 group items-center"
                      >
                        <div className="group-hover:text-primary transition-all duration-300">
                          {secondTitle}
                        </div>
                      </Link>
                      <span>/</span>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-2 group items-center">
                        <div className="group-hover:text-primary transition-all duration-300">
                          {secondTitle}
                        </div>
                      </div>
                      <span>/</span>
                    </>
                  ))}
                <div className="text-white">{pageName}</div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHead;
