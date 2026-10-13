import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import { OPTIMIZED_IMAGE_HOSTS } from "./lib/image-hosts";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: OPTIMIZED_IMAGE_HOSTS.map((hostname) => ({
      protocol: "https" as const,
      hostname,
      port: "",
      pathname: "/**",
      search: "",
    })),
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    minimumCacheTTL: 2678400,
  },
  // Keep links and rankings from the previous investera.com blog URLs.
  redirects() {
    return [
      { source: "/media", destination: "/blog", permanent: true },
      {
        source: "/family-offices-and-their-challenges-in-the-mena-region",
        destination: "/blog/family-offices-mena-challenges",
        permanent: true,
      },
      {
        source: "/digital-assets-in-fintech",
        destination: "/blog/digital-assets-in-fintech",
        permanent: true,
      },
      {
        source: "/proptech-the-disruptive-force-in-real-estate",
        destination: "/blog/proptech-disruptive-force-real-estate",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
