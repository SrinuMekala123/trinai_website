// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module

// export default defineConfig({
//   plugins: [react()],
//   // base: "/trinai_temp/",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), // Define @ alias to src folder
//     },
//   },
//   server: {
//     host: "0.0.0.0", // Allow access from other devices
//     port: 5174, // Set desired port
//   },
// });

export default defineConfig({
  plugins: [react()],
  // base: "/trinai_temp/", // 👈 VERY IMPORTANT
  base: "/", // 👈 VERY IMPORTANT

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5175,
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "./", // Adjust the base path for GoDaddy deployment
// });

// import { defineConfig } from "vite";

// export default defineConfig({
//   base: "/s6h.in/trinai-temp/", // Set this to your deployment subdirectory
// });
