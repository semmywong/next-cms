/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 21:52:42
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-11-27 22:01:05
 * @Description: Description
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@next-cms/ui"],
  output: "standalone",
  experimental: {
  },
};

export default nextConfig;
