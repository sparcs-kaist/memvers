import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { type UserConfig, defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const baseConfig: UserConfig = {
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
}

const devConfig: UserConfig = {
  ...baseConfig,
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY_TARGET,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}

const prodConfig: UserConfig = baseConfig

export default defineConfig(({ command }) =>
  command === 'serve' ? devConfig : prodConfig,
)
