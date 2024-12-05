import { getArtists } from "@/lib/artists.action";
import { getGallery } from "@/lib/gallery.action";
import About from "./About";
import Cta from "./CTA";
import Cta2 from "./CTA2";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Map from "./Map";
import Team from "./Team";
import Testimonials from "./Testimonials";

const HomePage: any = async () => {
  const { artists } = await getArtists({ first: 20 });
  const { gallery } = await getGallery({ last: 6 });

  return (
    <>
      <Hero />
      <About />
      <Gallery {...{ gallery }} />
      <Team {...{ artists }} />
      <Cta />
      <Testimonials />
      <Cta2 />
      <FAQ />
      <Map />
      {/* <Video /> */}
    </>
  );
};

export default HomePage;
