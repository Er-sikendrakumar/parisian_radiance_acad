import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      ssr: false,
      outDir: "dist/client",
      emptyOutDir: true,
    },
  },

  tanstackStart: {
    server: {
      preset: "static",
    },
  },
});