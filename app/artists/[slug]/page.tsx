import { INFO, MetaData } from "@/constants";
import { getArtistBySlug } from "@/lib/artists.action";
import ArtistPage from "@/sections/artistsPage/ArtistPage";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const { artist }: any = await getArtistBySlug({ slug: params.slug });

  if (artist) {
    const previousImages = (await parent).openGraph?.images || [];

    return {
      ...MetaData,
      title: artist.title,
      description: artist?.artistDetails?.shortDescription,
      openGraph: {
        ...MetaData.openGraph,
        title: artist.title!,
        description: artist?.artistDetails?.shortDescription!,
        url: `${INFO.site}/artists/${params.slug}`,
        images: [...previousImages, artist.featuredImage?.node?.sourceUrl],
      },
      twitter: {
        ...MetaData.twitter,
        title: artist.title!,
        description: artist?.artistDetails?.shortDescription!,
        images: [...previousImages, artist.featuredImage?.node?.sourceUrl],
      },
    };
  }
  notFound();
}

export default async function artist({ params }: { params: { slug: string } }) {
  try {
    const { artist } = await getArtistBySlug({ slug: params.slug });

    if (!!artist) {
      return <ArtistPage {...{ artist }} />;
    }
    notFound();
  } catch (error) {
    notFound();
  }
}
