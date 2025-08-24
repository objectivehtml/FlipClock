import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    dts: true,
    format: ['esm'],
    esbuildOptions(opts) {
        opts.entryNames = '[dir]/[name].dts';
    },
});
