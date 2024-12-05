/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["grizzly-tattoo.puresitestudio.com", "lh3.googleusercontent.com"],
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
    ];
  },
};

module.exports = nextConfig;
