import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lethal Company Modding Wiki",
  description: "A modding wiki for lethal company",
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])

    return head
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginners Guide', link: '/beginners-guide.md' },
      { text: 'Discord', link: 'https://discord.gg/nYcQFEpXfU' }
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: 'Beginners Guide', link: '/beginners-guide' },
            { 
              text: 'Installing Mods', 
              items: [
                { text: 'Using r2modman', link: '/installation/installing-r2modman' }
              ]
            },
            { 
              text: 'Creating Mods', 
              items: [
                { text: 'Initial modding setup', link: '/modding/initial-setup' },
                { text: 'Starting a mod', link: '/modding/starting-a-mod' },
                { text: 'Open-source and ethics', link: '/modding/open-source-and-ethics' },
                { text: 'Publishing your mod', link: '/modding/publishing-your-mod' }
              ]
            },
            { 
              text: 'Advanced Modding Topics', 
              items: [
                { text: 'Custom Networking', link: '/advanced-modding/networking' }
              ]
            },
            { 
              text: 'Other Resources', 
              items: [
                { text: 'Frequently Asked Questions', link: '/extras/faq' },
                { text: 'Contributing translations', link: '/translation/translating-the-wiki' },
                { text: 'About', link: '/extras/about' }
              ]
            },
          ]
        }
      ],
    },
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LethalCompany/ModdingWiki' }
    ]
  }
})
