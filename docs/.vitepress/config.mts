import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lethal Company Modding Wiki",
  description: "A modding wiki for lethal company",
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    // OpenGraph data for embeds
    head.push(['meta', { property: 'og:title', content: pageData.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'og:site_name', content: "Lethal Company Modding Wiki" }])
    head.push(['meta', { property: 'og:image', content: "https://lethal.wiki/logo.png" }])
    head.push(['meta', { name: 'theme-color', content: "#ff3600" }])

    return head
  },
  cleanUrls: true,
  sitemap: {
    hostname: 'https://lethal.wiki/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local' // TODO: Set up algolia for better-performing searches
    },
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
    ],
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/LethalCompany/ModdingWiki/edit/main/docs/:path',
    }
  }
})
