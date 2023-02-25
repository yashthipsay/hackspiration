import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindConfig from "./tailwind.config";
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
