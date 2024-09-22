/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.tailgrids.com",
      },
      {
        protocol: "https",
        hostname: "madmindstudios.com",
      },
    ],
  },
};

export default nextConfig;
