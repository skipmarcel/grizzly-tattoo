import { INFO, JSONLD, MetaData } from "@/constants";
import ArtistsPage from "@/sections/artistsPage";
import { WebPage, WithContext } from "schema-dts";

const description =
  "Meet Portland’s top tattoo artists at Grizzly Tattoo. Unique styles and personalized tattoos for every client.";

const jsonLd: WithContext<WebPage> = {
  ...JSONLD,
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "artists",
  description,
  publisher: {
    "@type": "Organization",
    name: "Grizzly Tattoo",
  },
};

export const metadata = {
  title: `Artists | ${INFO.companyName}`,
  description,
  openGraph: {
    ...MetaData.openGraph,
    title: `Artists | ${INFO.companyName}`,
    url: "/artists",
    description,
  },
  twitter: {
    ...MetaData.twitter,
    title: `Artists | ${INFO.companyName}`,
    description,
  },
};

export default function artists() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArtistsPage />
    </>
  );
}
