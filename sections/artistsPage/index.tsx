import PageHead from "@/components/pageHead";
import { getArtists } from "@/lib/artists.action";
import Team from "../homePage/Team";

const ArtistsPage: any = async () => {
  const { artists } = await getArtists({ first: 20 });

  return (
    <>
      <PageHead title="Artists" imgSrc="/images/pagehead/image-7.jpeg" />
      <Team {...{ artists }} />
    </>
  );
};

export default ArtistsPage;
