/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 21:52:42
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2025-02-12 10:32:26
 * @Description: Description
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ["@next-cms/ui"],
  experimental: {
  },
};

export default nextConfig;
