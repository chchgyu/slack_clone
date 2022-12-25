import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        presets: [
          [
            '@emotion/babel-preset-css-prop',
            {
              autoLabel: 'dev-only',
              labelFormat: '[filename]--[local]',
              useBuiltIns: false,
              throwIfNamespace: true,
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
  server: { port: 3030 },
});
