import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack does not pick up a lockfile from a
  // parent directory.
  turbopack: {
    root: projectRoot,
  },
  images: {
    // Every photo is served from /public, so no remote patterns are needed.
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
