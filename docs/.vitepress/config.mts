import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lethal Company Modding Wiki",
  description: "A modding wiki for lethal company",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginners Guide', link: '/installing-r2modman.md' },
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
                { text: 'Publishing your mod', link: '/modding/publishing-your-mod' },
              ]
            },
            { 
              text: 'Other Resources', 
              items: [
                { text: 'Frequently Asked Questions', link: '/faq' },
                { text: 'Contributing translations', link: '/translating-the-wiki' },
                { text: 'About', link: '/about' }
              ]
            },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
