import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["example.com", ".sub.example.com", "b22ca2078d75.ngrok-free.app"],
  },
});
