import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      tsconfigPath: './tsconfig.lib.json',
      exclude: ['**/*.stories.*', '**/*.test.*', '**/main.tsx', '**/App.tsx'],
    }),
    viteStaticCopy({
      targets: [
        { src: 'src/tokens/theme.css', dest: '.', rename: 'theme.css' },
        { src: 'src/tokens/theme-fonts.css', dest: '.', rename: 'theme-fonts.css' },
        { src: 'src/tokens/utilities.css', dest: '.', rename: 'utilities.css' },
        { src: 'src/tokens/nfse-tailwind.css', dest: '.', rename: 'nfse-tailwind.css' },
      ],
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'NfseDs',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    sourcemap: true,
  },
});
