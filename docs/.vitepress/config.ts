import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FlipClock.js",
  description: "FlipClock.js library to create fun animared clock, timer, tickers, and countdowns written in TypeScript.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is FlipClock.js?', link: '/what-is-flipclock' },
          { text: 'Installation', link: '/installation' },
          { text: 'Core Concepts', link: '/core-concepts' },
          // { text: 'Quick Start', link: '/quick-start' },
          // { text: 'Why FlipClock?', link: '/about' },
        ]
      },
      {
        text: 'Core', items: [
          { text: 'FlipClock', link: '/core/flipclock' },
          { text: 'Face', link: '/examples/face' },
          { text: 'FaceValue', link: '/examples/face-value' },
          { text: 'Timer', link: '/examples/timer' },
        ]
      },
      {
        text: 'Faces', items: [
          { text: 'Clock', link: '/faces/clock' },
          { text: 'Counter', link: '/faces/counter' },
          { text: 'Elapsed Time', link: '/faces/elapsed-time' },
          { text: 'Alphanumeric', link: '/faces/alphanumeric' },
          { text: 'Build your own theme', link: '/themes/flip-clock' }
        ]
      },
      {
        text: 'Themes', items: [
          { text: 'FlipClock', link: '/themes/flip-clock' },
          { text: 'Build your own theme', link: '/themes/flip-clock' }
        ]
      },
      {
        text: 'Helpers', items: [
          { text: 'Charsets', link: '/advanced/charsets'},
          { text: 'Dates', link: '/advanced/dates' },
          { text: 'Dictionaries', link: '/advanced/dictionaries'},
          { text: 'DOM', link: '/advanced/dom'},
          { text: 'Durations', link: '/advanced/Durations'},
          { text: 'Event Emitters', link: '/advanced/emitters'},
          { text: 'Reactivity', link: '/advanced/reactivity'},
          { text: 'Sequences', link: '/advanced/sequences'},
        ]
      },
      {
        text: 'Adanced', items: [
          {
            text: 'API Reference',
            link: '/api/flipclock.md',
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
