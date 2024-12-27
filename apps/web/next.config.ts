/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 21:52:42
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-25 22:55:14
 * @Description: Description
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@next-cms/ui"],
  experimental: {
  },
};

export default nextConfig;
