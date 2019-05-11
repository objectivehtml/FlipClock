import rollup from 'rollup';
import { exec } from 'child_process';
import pkg from './package.json';
import { kebabCase } from 'lodash';
import scss from 'rollup-plugin-scss';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import progress from 'rollup-plugin-progress';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import builtins from 'rollup-plugin-node-builtins';
import rootImport from 'rollup-plugin-root-import';

// import postcss from 'rollup-plugin-postcss';

// The type of package Rollup should create
const PACKAGE_FORMAT = 'umd';

// This is global variable used in UMD packages
const NAMESPACE = 'FlipClock';

// The directory of the package source code files
const SRC = `${__dirname}/src/`;

// The directory to ouput the compiled files
const DIST = `${__dirname}/dist/`;

// The main.js or entry point of your package
const MAINJS = `${SRC}main.js`;

// The base filename of the compiled files (no ex)
const FILENAME = kebabCase(pkg.name);

// The node_modules directory path
const NODE_MODULES = `${__dirname}/node_modules/**`;

// The options for the serve() plugin
const SERVE_OPTIONS = {
    open: true,
    verbose: true,
    port: 10001,
    contentBase: './',
    host: 'localhost',
    historyApiFallback: 'examples/test.html',
};

// The options for the watch plugin
const WATCH_OPTIONS = {
    include: `${SRC}**`,
    port: 35730
};

// The options for the livereload plugin (undefined or object).
const LIVERELOAD_OPTIONS = {
    watch: DIST,
    port: 35730
};

// Define the list of output globals
const OUTPUT_GLOBALS = {
    // 'lodash': 'lodash'
};

// Define an array of external packages to not include in the bundle
const EXTERNAL = [
    // 'lodash'
];

// Define the plugins used for the rollup process
const plugins = [
    progress(),
    replace({
        'process.env.SERVE_OPTIONS': JSON.stringify(SERVE_OPTIONS),
        'process.env.LIVERELOAD_OPTIONS': JSON.stringify(LIVERELOAD_OPTIONS),
        'process.env.NODE_ENV': JSON.stringify(process.env.ROLLUP_WATCH == 'true' ? 'development' : 'production')
    }),
    json(),
    rootImport({
        // Will first look in `client/src/*` and then `common/src/*`.
        root: SRC,
        useEntry: 'prepend',
        // If we don't find the file verbatim, try adding these extensions
        extensions: ['.js']
    }),
    resolve({
        main: true,
        jsnext: true,
        browser: true,
        extensions: [ '.js']
    }),
    commonjs({
        include: NODE_MODULES,
        namedExports: {

        }
    }),
    scss({
        output: `${DIST}flipclock.css`
    }),
    babel({
        exclude: NODE_MODULES
    }),
    globals(),
    builtins(),
    eslint()
];

// Add the serve/livereload plugins if watch argument has been passed
if(process.env.ROLLUP_WATCH === 'true') {
    plugins.push(serve(SERVE_OPTIONS));
    plugins.push(livereload(LIVERELOAD_OPTIONS));
}

// Export the config object
const config = [{
    input: MAINJS,
    output: {
        name: NAMESPACE,
        format: PACKAGE_FORMAT,
        file: `${DIST}${FILENAME}.js`,
        sourcemap: (process.env.ROLLUP_WATCH ? 'inline' : true),
        globals: OUTPUT_GLOBALS,
    },
    watch: WATCH_OPTIONS,
    external: EXTERNAL,
    plugins: plugins
}, (process.env.NODE_ENV  === 'production' ? {
    input: MAINJS,
    output: {
        name: NAMESPACE,
        format: 'es',
        file: `${DIST}${FILENAME}.es.js`,
        sourcemap: (process.env.ROLLUP_WATCH ? 'inline' : true),
        globals: OUTPUT_GLOBALS,
    },
    watch: WATCH_OPTIONS,
    external: EXTERNAL,
    plugins: plugins
} : null)].filter(value => value !== null);

/*
const watcher = rollup.watch(config);

watcher.on('event', event => {
    if(event.code === 'END') {
        exec('npm run docs;', function(error, stdout, stderr) {
            if (error) {
                console.log(error.code);
            }
        });
    }
});
*/

export default config;
