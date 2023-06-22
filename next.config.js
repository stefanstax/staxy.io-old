/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
