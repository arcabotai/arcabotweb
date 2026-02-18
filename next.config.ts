import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "/Users/arca/.openclaw/workspace/arcabot-site",
  },
};

export default nextConfig;
