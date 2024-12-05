import { Button } from "@/components/ui/button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="text-center my-auto py-24 relative">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl capitalize">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-8 flex items-center justify-center gap-x-6">
        <Link href="/" className="btn btn-primary">
          <Button>Go back home</Button>
        </Link>
        <Link
          href="/contact-us"
          className="font-crimsonText text-lg italic hover:text-primary"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
