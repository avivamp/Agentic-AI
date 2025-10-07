import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // browser shim
  },
  build: {
    lib: {
      entry: "src/index.jsx",
      name: "AgenticAI",
      fileName: (format) => `agentic-ai.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      output: {
        name: "AgenticAI",
        extend: true, // ✅ ensures window.AgenticAI extends, not replaces
      },
    },
    outDir: "dist",
    minify: true,
  },
});
