import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

export default nextConfig;
