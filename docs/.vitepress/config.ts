import path from 'path';
import { defineConfig } from 'vitepress';
import { snippetPlugin } from './plugins/snippet';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'en-US',
    title: "FlipClock.js",
    description: "A full featured, themeable, type safe, and well tested library for clocks, counters, and flipboards.",
    lastUpdated: true,
    themeConfig: {
        search: {
            provider: 'local'
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2013-present Justin Kimbrell'
        },

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/what-is-flipclock', activeMatch: '/guide/' },
            { text: 'Reference', link: '/reference/flipclock', activeMatch: '/reference/' },
        ],

        sidebar: {
            '/guide/': {
                base: '/guide/',
                items: [
                    {
                        text: 'Introduction',
                        collapsed: false,
                        items: [
                            { text: 'What is FlipClock.js?', link: 'what-is-flipclock' },
                            { text: 'Getting Started', link: 'getting-started' },
                            { text: 'Core Concepts', link: 'core-concepts' },
                        ]
                    },
                    {
                        text: 'Using FlipClock.js',
                        collapsed: false,
                        items: [
                            { text: 'Basic Usage', link: 'basic-usage' },
                            { text: 'Event Hooks', link: 'event-hooks' },
                            { text: 'What is a Face?', link: 'what-is-a-face' },
                            { text: 'Clock', link: 'clock' },
                            { text: 'Elapsed Time', link: 'elapsed-time' },
                            { text: 'Counter', link: 'counter' },
                            { text: 'Alphanumeric', link: 'alphanumeric' },
                        ]
                    },
                    {
                        text: 'Customization',
                        collapsed: false,
                        items: [
                            { text: 'Customizing CSS', link: 'customizing-css' },
                            { text: 'Build Your Own Face', link: 'build-your-own-face' },
                            { text: 'Creating a Theme', link: 'creating-a-theme' },
                        ]
                    }
                ]
            },
            '/reference/': {
                items: [
                    {
                        text: 'Core',
                        collapsed: false,
                        items: [
                            { text: 'FlipClock', link: '/reference/flipclock' },
                            { text: 'Face', link: '/reference/face' },
                            { text: 'FaceValue', link: '/reference/face-value' },
                            { text: 'Timer', link: '/reference/timer' },
                            { text: 'Event Hooks', link: '/reference/event-hooks' },
                        ]
                    },
                    {
                        text: 'Faces',
                        collapsed: false,
                        items: [
                            { text: 'Alphanumeric', link: '/reference/alphanumeric' },
                            { text: 'Clock', link: '/reference/clock' },
                            { text: 'Counter', link: '/reference/counter' },
                            { text: 'Elapsed Time', link: '/reference/elapsed-time' },
                        ]
                    },
                    {
                        text: 'Advanced',
                        collapsed: false,
                        items: [
                            { text: 'Charset', link: '/reference/charset' },
                            { text: 'Css', link: '/reference/css' },
                            { text: 'Date', link: '/reference/date' },
                            { text: 'Definition', link: '/reference/definition' },
                            { text: 'Dictionary', link: '/reference/dictionary' },
                            { text: 'Digitizer', link: '/reference/digitizer' },
                            { text: 'Duration', link: '/reference/duration' },
                            { text: 'Event Emitter', link: '/reference/event-emitter' },
                            { text: 'Sequencer', link: '/reference/sequencer' }
                        ]
                    },
                ]
            }
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/objectivehtml/FlipClock' }
        ],

        editLink: {
            pattern: 'https://github.com/objectivehtml/FlipClock/edit/master/docs/:path'
        }
    },
    markdown: {
        config(md) {
            md.disable('snippet');
            md.use(snippetPlugin as any, path.resolve(__dirname, '../'));
        }
    },
    head: [
        [
            'script',
            {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-L1GWWG8KPL'}
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L1GWWG8KPL');`
        ]
    ],
    sitemap: {
        hostname: 'https://flipclockjs.com'
    }
});