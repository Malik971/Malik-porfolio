import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px", // 👈 md commence maintenant à 1024px
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [react(), tailwindcss()],
});
