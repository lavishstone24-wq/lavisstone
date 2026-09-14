import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    "192.168.1.4",
    "192.168.1.*",
    "192.168.*.*",
    "localhost",
  ],
};

export default nextConfig;
