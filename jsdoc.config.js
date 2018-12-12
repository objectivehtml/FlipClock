'use strict';

module.exports = {
    plugins: [
        'plugins/markdown',
        './node_modules/jsdoc-export-default-interop/dist/index'
    ],
    source: {
        'include': [
            './src/js/Components/index.js',
            './src/js/Components',
            './src/js/Config/index.js',
            './src/js/Config',
            './src/js/Faces/index.js',
            './src/js/Faces',
            './src/js/Helpers/index.js',
            './src/js/Helpers',
            './src/js/Languages/index.js',
            './src/js/Languages',
            './src/js/Themes/index.js',
            './src/js/Themes'
        ]
    },
    opts: {
        destination: './docs/'
    },
    templates: {
        cleverLinks: false,
        monospaceLinks: false,
        default: {
            outputSourceFiles: true
        }
    }
};
