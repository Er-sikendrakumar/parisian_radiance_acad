import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      ssr: false,
      outDir: "dist",
      emptyOutDir: true,
    },
  },

  tanstackStart: {
    server: {
      preset: "vercel",
    },
  },
});