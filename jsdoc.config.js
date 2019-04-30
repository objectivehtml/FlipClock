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
        destination: './public/'
    },
    templates: {
        cleverLinks: false,
        monospaceLinks: false,
        default: {
            useLongnameInNav: false,
            staticFiles: {
                include: [
                    './docs/pages',
                    'license.txt'
                ]
            }
        }
    }
};
