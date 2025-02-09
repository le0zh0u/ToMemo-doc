// import type { NextConfig } from "next";

import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
});

export default nextConfig;
