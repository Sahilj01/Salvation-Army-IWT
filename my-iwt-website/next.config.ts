import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Use this project's folder as root (not a parent lockfile directory).
    root: projectRoot,
  },
};

export default nextConfig;
