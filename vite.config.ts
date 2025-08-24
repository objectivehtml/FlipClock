import { codecovVitePlugin } from "@codecov/vite-plugin";
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { extractCss } from 'goober';
import { resolve } from 'path';
import { defineConfig, type PluginOption } from 'vite';
import solid from 'vite-plugin-solid';
import { css, type UseCss } from './src';

export default ({ command }: any) => defineConfig({
    plugins: [
        solid(),
        writeCss({
            'flipclock.css': [css, 'flip-clock'] 
        }),
        // Put the Codecov vite plugin after all other plugins
        codecovVitePlugin({
            enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
            bundleName: "FlipClock",
            uploadToken: process.env.CODECOV_TOKEN,
        }),
    ],
    build: {
        target: 'esnext',
        sourcemap: command === 'build',
        minify: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'FlipClock',
            fileName: (format) => `FlipClock.${format}.js`,
        }
    }
});

type WriteCssFiles = Record<string, [UseCss<any>, string]>;

function writeCss(files: WriteCssFiles): PluginOption {
    let hasExtracted = false;
    let lastExtractedLength = 0;
  
    return {
        name: 'extract-css',
        writeBundle(options) {
            if (hasExtracted || !options.dir) {
                return Promise.resolve();
            }

            const promises: Promise<void>[] = [];
            
            for (const [filename, [css, selector]] of Object.entries(files)) {
                const hash = String(css());
                const extractedCss = extractCss();
                const contents = extractedCss
                    .slice(lastExtractedLength)
                    .replaceAll(hash, selector);

                const path = resolve(options.dir, 'themes');

                promises.push(new Promise(async (res) => {
                    if (!await existsSync(path)) {
                        await mkdir(path);
                    }

                    res(writeFile(resolve(path, filename), contents));
                }));

                lastExtractedLength = extractedCss.length;
            }

            hasExtracted = true;

            return Promise.all(promises).then();
        }
    };
}