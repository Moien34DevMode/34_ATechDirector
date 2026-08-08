import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ─────────────────────────────────────────────────────────────────────────────
// GitHub Pages deployment
//
// Set BASE_PATH to your GitHub repository name when deploying.
// Example: if your repo is github.com/username/agamedirector, use '/agamedirector/'
// For a root custom domain deployment, use '/'.
//
// You can also override this by setting the VITE_BASE_PATH environment variable
// in a .env.production file:
//   VITE_BASE_PATH=/agamedirector/
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig(({ mode }) => {
  const base =
    process.env.VITE_BASE_PATH ??
    (mode === "production" ? "/34_ATechDirector/" : "/");

  return {
    plugins: [react()],

    base,

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@scenes": path.resolve(__dirname, "./src/scenes"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@data": path.resolve(__dirname, "./src/data"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@theme": path.resolve(__dirname, "./src/theme"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@context": path.resolve(__dirname, "./src/context"),
        "@router": path.resolve(__dirname, "./src/router"),
      },
    },

    build: {
      // Generate source maps for easier debugging in production
      sourcemap: false,
      // Raise the warning limit slightly — scenes are lazily loaded so
      // individual chunks should stay small
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Manual chunk strategy: keep vendor libraries separate from app code
          manualChunks: {
            "vendor-react": ["react", "react-dom", "react-router-dom"],
            "vendor-motion": ["framer-motion"],
            "vendor-markdown": ["react-markdown", "remark-gfm"],
            "vendor-icons": ["react-icons"],
          },
        },
      },
    },
  };
});
