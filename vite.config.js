import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ⚠️ IMPORTANT for deployment
  base: "/", // agar GitHub Pages use kar rahe ho: "/Rizwanfahim1/"

  build: {
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        manualChunks: {
          // 🔥 heavy libraries separate bundle me
          vendor: ["react", "react-dom"],
          gsap: ["gsap"],
        },
      },
    },
  },

  server: {
    host: true,
    port: 5173,
  },
});
