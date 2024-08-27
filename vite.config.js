import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const isDevelop = mode === 'development';

  return {
    plugins: [react()],
    server: {
      https: isDevelop
        ? {
          key: fs.readFileSync("../localhost-key.pem"),
          cert: fs.readFileSync("../localhost.pem"),
        }
        : false,
      port: 5173,
    },
  }
});