import { INFO, JSONLD, MetaData } from "@/constants";
import { getGallery } from "@/lib/gallery.action";
import GalleryPage from "@/sections/galleryPage";
import { WebPage, WithContext } from "schema-dts";

const description =
  "Browse Grizzly Tattoo's gallery to see exceptional custom tattoos crafted by skilled artists in Portland, OR.";

const jsonLd: WithContext<WebPage> = {
  ...JSONLD,
  "@context": "https://schema.org",
  "@type": "MediaGallery",
  name: "gallery",
  description,
  publisher: {
    "@type": "Organization",
    name: "Grizzly Tattoo",
  },
};

export const metadata = {
  title: `gallery | ${INFO.companyName}`,
  description,
  openGraph: {
    ...MetaData.openGraph,
    title: `gallery | ${INFO.companyName}`,
    url: "/gallery",
    description,
  },
  twitter: {
    ...MetaData.twitter,
    title: `gallery | ${INFO.companyName}`,
    description,
  },
};

export default async function gallery() {
  const { gallery } = await getGallery({ first: 6 });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryPage gallery={gallery} />
    </>
  );
}
