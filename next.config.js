/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["127.0.0.1", "gripasadmin.ascenddevs.com"],
  },
  eslint: {
    dirs: ["pages", "components", "context", "core", "lib"],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);
