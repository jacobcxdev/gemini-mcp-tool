import { readFileSync } from 'node:fs'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const base = process.env.VITEPRESS_BASE ?? '/gemini-mcp-tool/'
const packageVersion = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8')
).version

export default withMermaid(
  defineConfig({
    title: 'Gemini MCP Tool Documentation',
    description: 'Bridge Gemini models with Claude Desktop',
    base,

    // Force dark mode by default
    //appearance: 'dark',

    head: [
      ['link', { rel: 'icon', href: `${base}favicon.ico` }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: `${base}icon.png` }],
      ['link', { rel: 'apple-touch-icon', sizes: '128x128', href: `${base}icon.png` }]
    ],
    
    themeConfig: {
    packageVersion,
    logo: '/icon.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Open Guide', link: '/getting-started' },
      { text: 'API', link: '/api' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Quick Start', link: '/getting-started' },
        ]
      },
      {
        text: 'Core Concepts',
        collapsed: false,
        items: [
          { text: 'How It Works', link: '/concepts/how-it-works' },
          { text: 'File Analysis (@)', link: '/concepts/file-analysis' },
          { text: 'Model Selection', link: '/concepts/models' },
          { text: 'Sandbox Mode', link: '/concepts/sandbox' }
        ]
      },
      {
        text: 'Usage',
        collapsed: false,
        items: [
          { text: 'Commands', link: '/usage/commands' },
          { text: 'Natural Language', link: '/usage/natural-language' },
          { text: 'Examples', link: '/usage/examples' },
          { text: 'Best Practices', link: '/usage/best-practices' }
        ]
      },
      {
        text: 'Resources',
        collapsed: true,
        items: [
          { text: 'Roadmap', link: '/resources/roadmap' },
          { text: 'Troubleshooting', link: '/resources/troubleshooting' },
          { text: 'FAQ', link: '/resources/faq' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jacobcxdev/gemini-mcp-tool' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Making AI collaboration simple, one tool at a time.'
    },

    search: {
      provider: 'local'
    }
  }
})
)