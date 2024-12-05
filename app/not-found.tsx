import PageHead from "@/components/pageHead";
import { INFO } from "@/constants";
import Custom404 from "@/sections/404page";

export const metadata = {
  title: `404 | ${INFO.companyName}`,
  openGraph: {
    title: `404 | ${INFO.companyName}`,
  },
};

export default function NotFound() {
  return (
    <>
      <PageHead title="404" pageName="404" hasBreadCrumb />
      <Custom404 />
    </>
  );
}
