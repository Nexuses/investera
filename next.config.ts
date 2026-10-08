import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "investera.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "d2ol7oe51mr4n9.cloudfront.net",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
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

export default nextConfig;
