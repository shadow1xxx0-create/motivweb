import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.100.47"],
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
