import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    nitro({ preset: "vercel" }),
    tanstackRouter(),
    tanstackStart({
      server: {
        preset: "vercel",
      },
    }),
    tailwindcss(),
    react(),
    visualizer({ open: false, filename: "bundle-stats.html" })
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rollupOptions: {
      external: ['@vercel/og'],
    },
  },
  ssr: {
    external: ['@vercel/og'],
  },
});

