import { INFO } from "@/constants";
import navigations from "@/constants/navigations";
import socialLinks from "@/constants/socialLinks";
import { cn } from "@/utils";
import formatPhone from "@/utils/formatPhone";
import {
  faClose,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "../image";
import SubTitle from "../subTitle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const CustomSheetClose = (props: any) => {
  return (
    <SheetClose asChild {...props}>
      <FontAwesomeIcon
        icon={faClose}
        className="transition-all duration-300 text-xl text-white cursor-pointer w-6 border-none rounded-md top-4 right-4 absolute"
      />
    </SheetClose>
  );
};

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className={cn(
            "w-[25px] h-[15px] cursor-pointer relative group lg:flex hidden"
          )}
        >
          <span
            className={cn(
              "absolute top-0 w-[100%] bg-white h-[3px] block left-0 transition-all duration-300"
            )}
          />
          <span
            className={cn(
              "absolute top-[6px] scale-x-[0.5] group-hover:scale-100 group-hover:translate-x-0 -translate-x-1/4 w-full left-0 bg-white h-[3px] block transition-all duration-300"
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 w-[100%] bg-white h-[3px] block left-0 transition-all duration-300"
            )}
          />
        </div>
      </SheetTrigger>
      <SheetContent className="sheetContent !overflow-auto bg-black">
        <SheetHeader className="mt-4">
          <SheetTitle className="text-left">
            <Link href="/">
              <Image
                className={cn("w-20 lg:w-36 aspect-[2140/1270]")}
                src="/logo.png"
                alt="Logo"
                hasBlur={false}
              />
            </Link>
          </SheetTitle>

          <SheetDescription className="text-left max-w-xs inline-flex !mt-4 mx-0 text-gray-300">
            Grizzly Tattoo, located in Portland, OR, offers custom tattoos with
            expert artistry in a welcoming atmosphere. Walk-ins are always
            welcome.
          </SheetDescription>
        </SheetHeader>
        <CustomSheetClose />
        <div className="flex flex-col py-8 gap-2">
          <SubTitle text="Links" className="mb-2" />

          {navigations.map((item) => (
            <SheetTrigger asChild key={item.id}>
              <Link
                key={item.id}
                href={item.href}
                shallow={false}
                className="text-sm font-normal leading-6 text-gray-300"
              >
                {item.title}
              </Link>
            </SheetTrigger>
          ))}

          <div className="flex flex-col py-6">
            <SubTitle text="Contact Us" className="mb-4" />
            <ul className="flex flex-col gap-3">
              <SheetTrigger asChild>
                <Link
                  href={`tel:${formatPhone(INFO.phone)}`}
                  className="flex items-center gap-2 group"
                  target="_blank"
                  id="btn-call-us"
                >
                  <div
                    className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      className="w-4 text-white shrink-0"
                    />
                  </div>
                  <p
                    className={` font-medium break-all text-sm text-gray-300 transition-colors duration-300`}
                  >
                    {INFO.phone}
                  </p>
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href={`mailto:${INFO.email}`}
                  className="flex items-center gap-2 group"
                  target="_blank"
                  id="btn-email-us"
                >
                  <div
                    className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 text-white shrink-0"
                    />
                  </div>
                  <p
                    className={` font-medium break-all text-sm text-gray-300 transition-colors duration-300`}
                  >
                    {INFO.email}
                  </p>
                </Link>
              </SheetTrigger>
              <div className="flex items-center gap-2 group">
                <div
                  className={`inline-flex font-semibold items-center text-sm gap-2 justify-center`}
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 text-white shrink-0"
                  />
                </div>
                <p
                  className={` font-medium break-all text-sm text-gray-300 transition-colors duration-300`}
                >
                  {INFO.address}
                </p>
              </div>
            </ul>
          </div>
          <div>
            <SubTitle text="Follow Us" className="mb-4" />
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-300 flex items-start gap-2"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-5 h-5 text-gray-300 hover:text-primary transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
