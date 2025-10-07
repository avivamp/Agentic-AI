import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  define: {
    // Prevent "process is not defined" in browser builds
    "process.env": {},
  },

  build: {
    lib: {
      entry: "src/index.jsx",
      name: "AgenticAI", // 👈 This ensures window.AgenticAI global in UMD
      fileName: (format) => `agentic-ai.${format}.js`,
      formats: ["umd", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: false,
    minify: true,
    target: "esnext",
    outDir: "dist",
  },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "window",
      },
    },
  },
});
