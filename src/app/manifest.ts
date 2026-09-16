import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Lavish Stone",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f11",
    theme_color: "#0B0B0B",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
