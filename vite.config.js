import { defineConfig, transformWithEsbuild  } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { dirname } from 'path';
import path from 'path';


import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // depending on your application, base can also be "/"
  base: "",
  open: true,

  plugins: [
    react(),
    viteTsconfigPaths(),

    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      auth: path.resolve(__dirname, "./src/auth"),
      components: path.resolve(__dirname, "./src/components"),
      configs: path.resolve(__dirname, "./src/configs"),
      constants: path.resolve(__dirname, "./src/constants"),
      lang: path.resolve(__dirname, "./src/lang"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      mock: path.resolve(__dirname, "./src/mock"),
      routes: path.resolve(__dirname, "./src/routes"),
      services: path.resolve(__dirname, "./src/services"),
      store: path.resolve(__dirname, "./src/store"),
      utils: path.resolve(__dirname, "./src/utils"),
      views: path.resolve(__dirname, "./src/views"),
    },
  },
});
