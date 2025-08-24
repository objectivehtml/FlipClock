import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
    optimizeDeps: {
        include: ['../src/helpers/parser.cjs']
    },
    plugins: [
        solid(),
    ],
    build: {
        target: 'esnext',
    },
});
