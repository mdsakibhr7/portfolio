import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages at https://<user>.github.io/<repo>/ set base to "/<repo>/".
// If you deploy to a user site (<user>.github.io) or a custom domain, use "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/portfolio/",
});
