/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "backend.grizzlytattoo.com",
      "grizzly-tattoo.puresitestudio.com",
    ],
  },

  async redirects() {
    return [
      {
        source: "/grizzly-tattoo-shop-booking",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/Contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/tyler-adams-tattoo-artist",
        destination: "/artists/tyler-adams",
        permanent: true,
      },
      {
        source: "/brian-visser",
        destination: "/artists/brian-visser",
        permanent: true,
      },
      {
        source: "/blane",
        destination: "/artists/blane-curtice",
        permanent: true,
      },

      {
        source: "/blane-1",
        destination: "/artists/leo-salazar",
        permanent: true,
      },

      {
        source: "/derek-yost",
        destination: "/artists/derek-yost",
        permanent: true,
      },

      {
        source: "/portland-tattoo-artists/tyler-adams/",
        destination: "/artists/tyler-adams",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
