"use server";

import { GET_ALL_GALLERY } from "@/queries";

export async function getGallery({
  cursor,
  first,
  last,
}: {
  cursor?: string;
  first?: number;
  last?: number;
} = {}) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify({
        query: GET_ALL_GALLERY,
        variables: {
          cursor,
          first,
          last,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const { data } = await response.json();

    return {
      gallery: data?.allGallery?.edges?.map((item: any) => ({
        title: item.node.title,
        imageSrc: item.node.featuredImage.node.sourceUrl,
        cursor: item?.cursor,
      })),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      menus: [],
    };
  }
}
