import { INFO, JSONLD, MetaData } from "@/constants";
import ContactPage from "@/sections/contactPage";
import { WebPage, WithContext } from "schema-dts";

const description =
  "Reach out to Grizzly Tattoo in Portland. We're here to answer your questions and help you book your next tattoo.";

const jsonLd: WithContext<WebPage> = {
  ...JSONLD,
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us",
  description,
  publisher: {
    "@type": "Organization",
    name: "Grizzly Tattoo",
  },
};

export const metadata = {
  title: `Contact Us | ${INFO.companyName}`,
  description,
  openGraph: {
    ...MetaData.openGraph,
    title: `Contact Us | ${INFO.companyName}`,
    url: "/contact-us",
    description,
  },
  twitter: {
    ...MetaData.twitter,
    title: `Contact Us | ${INFO.companyName}`,
    description,
  },
};

export default function contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPage />
    </>
  );
}
