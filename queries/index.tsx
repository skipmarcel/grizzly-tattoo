export const GET_BLOG_SLUGS = `
  query {
    posts(first: 1000) {
      nodes {
        id
      }
    }
  }
`;

export const GET_BLOG_BY_ID = `
  query GetPostById($id: ID!) {
    post(id: $id) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      id
      title
      tags {
        nodes {
          name
        }
      }
      date
      excerpt
    }
  }
`;

export const GET_RECENT_BLOG_POSTS = `
  query blogPosts {
    posts(first: 5) {
      nodes {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        content
        date
        excerpt
      }
    }
  }
`;

export const GET_BLOG_POSTS = `
query blogPosts($first: Int, $cursor: String) {
  posts(first: $first, after: $cursor) {
    edges {
      cursor
      node {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        content
        date
        excerpt
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
}
`;

export const GET_ARTISTS = `
query NewQuery($first: Int, $cursor: String) {
  artists(first: $first, after: $cursor) {
    edges {
      cursor
      node {
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        artistDetails {
          contactInfo {
            instagramUrl
            email
          }
          role
          gallery
          shortDescription
        }
      }
    }
  }
}
`;

export const GET_ARTIST_BY_SLUG = `
 query GetArtistBySlug($slug: String!) {
    artistBy(slug: $slug) {
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
      artistDetails {
        contactInfo {
          instagramUrl
          email
        }
        role
        gallery
        shortDescription
      }
    }
  }
`;

export const GET_FIRST_3_BLOGS = `
  query blogPosts {
    posts(first: 3) {
      nodes {
        id
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        content
        date
        excerpt
      }
    }
  }
`;

export const GET_ALL_GALLERY = `
  query GetAllGallery($first: Int, $last: Int, $cursor: String) {
    allGallery(first: $first, last: $last, after: $cursor) {
      edges {
        cursor
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
