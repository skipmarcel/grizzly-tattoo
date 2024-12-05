"use server";

import { GET_ARTISTS, GET_ARTIST_BY_SLUG } from "@/queries";
import getImagesFromWYSIWYG from "@/utils/getImagesFromWYSIWYG";
import { notFound } from "next/navigation";

export async function getArtists({
  cursor,
  first,
}: {
  cursor?: string;
  first?: number;
}) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        query: GET_ARTISTS,
        variables: {
          cursor,
          first,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const { data } = await response.json();

    return {
      artists:
        data?.artists?.edges
          ?.map((item: any) => ({
            cursor: item?.cursor || "",
            ...item.node,
            artistDetails: {
              ...item.node.artistDetails,
              gallery:
                getImagesFromWYSIWYG({
                  html: item.node.artistDetails.gallery || "",
                }) || [],
            },
          }))
          ?.reverse() || [],
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      artists: [],
    };
  }
}

export async function getArtistBySlug({ slug }: { slug: string }) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_ARTIST_BY_SLUG,
        variables: {
          slug,
        },
      }),
    });

    const { data } = await response.json();

    if (data?.artistBy) {
      return {
        artist: {
          ...data?.artistBy,
          artistDetails: {
            ...data?.artistBy.artistDetails,
            gallery:
              getImagesFromWYSIWYG({
                html: data?.artistBy.artistDetails.gallery || "",
              }) || [],
          },
        },
      };
    }

    return {
      artist: null,
    };
  } catch (error) {
    return {
      artist: null,
    };
  }
}
