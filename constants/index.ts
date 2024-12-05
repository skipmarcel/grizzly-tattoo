export const INFO = {
  phone: "(503) 265-8146",
  email: "info@grizzlytattoo.com",
  address: "3949 N Williams Ave, Portland, OR 97227",
  companyName: "Grizzly Tattoo",
  site: "https://www.grizzlytattoo.com",
  locationUrl:
    "https://www.google.com/maps/place/Grizzly+Tattoo/@45.551458,-122.666961,15z/data=!4m6!3m5!1s0x5495a7157dc4bdaf:0x344a38108da9bdbd!8m2!3d45.551458!4d-122.666961!16s%2Fg%2F1tls2k7g?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
};

const MetaTitle = "Grizzly Tattoo | Expert Tattoos Portland, OR";
const MetaDescription =
  "Get expert custom tattoos in Portland at Grizzly Tattoo. Personalized designs in a welcoming studio. Walk-ins welcome.";

export const MetaData = {
  title: MetaTitle,
  description: MetaDescription,
  openGraph: {
    title: MetaTitle,
    description: MetaDescription,
    url: `https://www.grizzlytattoo.com/`,
    siteName: "Grizzly Tattoo",
    phoneNumbers: ["+15032658146"],
    images: [`/opengraph-image.jpg`],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: MetaTitle,
    description: MetaDescription,
    card: "summary_large_image",
    site: "https://www.grizzlytattoo.com/",
    images: [`/twitter-image.jpg`],
  },
  keywords: [
    "custom tattoos",
    "Portland tattoos",
    "tattoo studio",
    "tattoo artists Portland",
    "walk-in tattoos",
    "tattoo shop Portland",
    "Grizzly Tattoo",
    "tattoo design",
    "body art",
    "Portland tattoo artists",
    "tattoo consultation",
    "ink Portland",
    "unique tattoos",
  ],
};

export const JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://www.grizzlytattoo.com/#organization",
    name: "Grizzly Tattoo",
    url: "https://www.grizzlytattoo.com",
    logo: "https://www.grizzlytattoo.com/logo.png",
    email: INFO.email,
    telephone: INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3949 N Williams Ave",
      addressLocality: "Portland",
      addressRegion: "OR ",
      postalCode: "97227",
      addressCountry: "US",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Grizzly Tattoo",
  },
};
