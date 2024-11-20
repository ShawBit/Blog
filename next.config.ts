import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three", "next-mdx-remote"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default nextConfig;
