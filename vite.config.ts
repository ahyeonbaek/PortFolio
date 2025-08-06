import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/myportfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@image",
        replacement: path.resolve(__dirname, "./src/assets/image"),
      },
      {
        find: "@gif",
        replacement: path.resolve(__dirname, "./src/assets/image/gif"),
      },
      {
        find: "@consts",
        replacement: path.resolve(__dirname, "./src/consts"),
      },
    ],
  },
}));
