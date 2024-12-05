"use client";
import navigations from "@/constants/navigations";
import socialLinks from "@/constants/socialLinks";
import { cn } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "../image";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="sticky left-0 right-0 z-50 top-0">
        <header
          className={cn(
            "w-full bg-transparent  top-0 transition-colors duration-300 h-full py-4",
            isScrolled && "shadow-md bg-white backdrop-blur-sm"
          )}
        >
          <nav className="container !max-w-none flex items-center h-full max-sm:px-6">
            <div className="flex">
              <Link href="/">
                <Image
                  className={cn(
                    "w-32 lg:w-40 aspect-[2140/1270]",
                    isScrolled && "invert"
                  )}
                  src="/logo.png"
                  alt="Logo"
                  hasBlur={false}
                />
              </Link>
            </div>
            <div className="hidden xl:flex items-center gap-x-7 xl:gap-x-7 ml-7 flex-1 justify-between">
              <div className="flex items-center flex-wrap gap-x-7 gap-y-1 xl:gap-x-16 mx-auto">
                {navigations.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "font-anton uppercase transition-colors text-lg duration-300 text-white relative hover:text-primary-light after:w-0 after:absolute after:bottom-[-2px] header-nav-dot after:left-[-1px] after:h-[4px] after:bg-dot after:transition-all after:duration-300 hover:after:w-full",
                      pathname === item.href && "text-primary-light",
                      isScrolled && "text-black hover:text-black"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="flex gap-6 items-center">
                <div className="flex gap-3 flex-shrink-0">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 flex items-start gap-2"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={cn(
                          "w-[1.2rem] h-[1.2rem] text-white",
                          isScrolled && "text-black"
                        )}
                      />
                    </Link>
                  ))}
                </div>
                <Sidebar isScrolled={isScrolled} />
              </div>
            </div>
            <div className="flex xl:hidden ml-auto">
              <Sidebar isScrolled={isScrolled} />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
