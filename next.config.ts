import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
