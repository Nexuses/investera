import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Investera",
    short_name: "Investera",
    description: "Investment management platform for family offices, private equity and fund managers.",
    start_url: "/",
    display: "browser",
    background_color: "#050B1F",
    theme_color: "#0C2D57",
    icons: [
      {
        src: "https://investera.s3.us-east-2.amazonaws.com/Investera_monogram_colored_1788763881815_bxuq.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
