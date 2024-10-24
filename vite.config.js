import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isHttps = env.VITE_PROTOCAL === 'https';

  return {
    plugins: [react()],
    server: {
      https: isHttps
        ? {
          key: fs.readFileSync("../localhost-key.pem"),
          cert: fs.readFileSync("../localhost.pem"),
        }
        : false,
      port: 5173,
    },
  }
});