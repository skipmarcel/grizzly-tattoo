import { INFO, JSONLD, MetaData } from "@/constants";
import { getArtistBySlug } from "@/lib/artists.action";
import BookingPage from "@/sections/bookingPage";
import { notFound } from "next/navigation";
import { WebPage, WithContext } from "schema-dts";

const description =
  "Book your tattoo appointment at Grizzly Tattoo in Portland, OR. Secure your spot with our talented artists today.";

const jsonLd: WithContext<WebPage> = {
  ...JSONLD,
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Booking",
  description,
  publisher: {
    "@type": "Organization",
    name: "Grizzly Tattoo",
  },
};

export const metadata = {
  title: `Booking | ${INFO.companyName}`,
  description,
  openGraph: {
    ...MetaData.openGraph,
    title: `Booking | ${INFO.companyName}`,
    url: "/booking",
    description,
  },
  twitter: {
    ...MetaData.twitter,
    title: `Booking | ${INFO.companyName}`,
    description,
  },
};

export default async function booking({
  searchParams,
}: {
  searchParams: string;
}) {
  const searchParamsUrl = new URLSearchParams(searchParams);
  const artistSlug = searchParamsUrl.get("artist");

  const { artist } = await getArtistBySlug({ slug: artistSlug! });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookingPage {...{ artist, artistSlug }} />
    </>
  );
}
