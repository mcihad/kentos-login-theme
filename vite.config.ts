import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    keycloakify({
      themeName: "kentos",
      accountThemeImplementation: "none",
      keycloakVersionTargets: {
        "22-to-25": "kentos-theme-for-kc-22-to-25.jar",
        "all-other-versions": "kentos-theme-for-kc-all-other-versions.jar"
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
