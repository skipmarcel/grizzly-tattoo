import { JSONLD } from "@/constants";
import HomePage from "@/sections/homePage";

const jsonLd = {
  ...JSONLD,
  name: "Grizzly Tattoo",
};

export default async function home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
