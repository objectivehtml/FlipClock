'use strict';

module.exports = {
    plugins: [
        'plugins/markdown',
        './node_modules/jsdoc-export-default-interop/dist/index'
    ],
    source: {
        'include': [
            './src/js/Components',
            './src/js/Config',
            './src/js/Faces',
            './src/js/Helpers',
            './src/js/Languages',
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
