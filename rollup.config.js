import json from 'rollup-plugin-json';
import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';

const plugins = [
    json(),
    commonjs({
        //include: 'node_modules/**'
    }),
    resolve({
        sourceMap: true,
        extensions: [ '.js', '.scss']
    }),
    sass({
        output: 'dist/flipclock.css',
        options: {
            // outputStyle: 'compressed'
        }
    }),
    babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup'],
        plugins: ['lodash', 'dynamic-import-node'],
        babelrc: false
    })
];

if(process.env.ROLLUP_WATCH == 'true') {
    plugins.push([
        serve(),
        livereload()
    ]);
}

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/flipclock.js',
        format: 'umd',
        name: 'FlipClock'
    },
    external: [],
    globals: {},
    sourcemap: true,
    sourcemapFile: './dist/flipclock.js.map',
    watch: {
        include: './src/**'
    },
    plugins: plugins
};
