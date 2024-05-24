import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "robots.txt", "maskable-icon.png"],
  manifest: {
    name: "BMI - Calculator",
    short_name: "BMI - Calculator",
    description: "Calculador de IMC",
    icons: [
      {
        "src": "favicon.ico",
        "sizes": "16x16",
        "type": "image/x-icon"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",

      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable_icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#222333",
    background_color: "#1b1b1b",
    display: "standalone",
    start_url: ".",
    orientation: "portrait",
  },
  devOptions: {
    enabled: true,
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
