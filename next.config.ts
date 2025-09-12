import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Next.js traces files relative to this project, not a parent folder
  outputFileTracingRoot: process.cwd(),
  images: { remotePatterns: [new URL("https://cdn.graphland.dev/**")] },
};

export default nextConfig;
