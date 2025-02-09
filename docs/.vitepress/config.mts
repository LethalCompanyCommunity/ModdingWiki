import { defineConfig } from 'vitepress'
import { createTitle, normalize } from "vitepress/dist/client/shared.js";

const HOSTNAME = "https://lethal.wiki";

function href(path = "") {
  return new URL(normalize(path), HOSTNAME).href;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lethal Company Modding Wiki",
  description: "A modding wiki for lethal company",
  head: [
    ['link', { rel:'icon', href: "/favicon.ico" }],
    ['meta', { property: 'og:site_name', content: "Lethal Company Modding Wiki" }],
    ['meta', { property: 'og:image', content: "https://lethal.wiki/logo.png" }],
    ['meta', { name: 'theme-color', content: "#ff3600" }]
  ],
  transformPageData(pageData, ctx) {
    let pageDescription = pageData.frontmatter?.description;
    const pageHref = href(pageData.relativePath);
    const pageTitle = createTitle(ctx.siteConfig.site, pageData);

    if (!pageDescription) {
      pageDescription = ctx.siteConfig.site?.description;

      // If no page-specific description and not homepage, prepend the site title to the description
      if (pageDescription && pageHref !== href()) {
        pageDescription = [ctx.siteConfig.site?.title, pageDescription]
            .filter((v) => Boolean(v))
            .join(": ");
      }
    }

    pageData.frontmatter.head ??= [];

    pageData.frontmatter.head.push(
        [
          "meta",
          {
            name: "og:title",
            content: pageTitle,
          },
        ],
        [
          "meta",
          {
            property: "og:url",
            content: pageHref,
          },
        ],
        [
          "meta",
          {
            name: "twitter:title",
            content: pageTitle,
          },
        ],
    );

    if (pageDescription) {
      pageData.frontmatter.head.push(
          [
            "meta",
            {
              name: "og:description",
              content: pageDescription,
            },
          ],
          [
            "meta",
            {
              name: "twitter:description",
              content: pageDescription,
            },
          ],
      );
    }
  },
  sitemap: {
    hostname: HOSTNAME
  },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local' // TODO: Set up algolia for better-performing searches
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginner\'s Guide', link: '/overview.md' },
      { text: 'Developer\'s Guide', link: '/dev/overview.md' },
      {
        text: 'Discord',
        items: [
          {
            items: [
              { text: 'Community Discord', link: 'https://discord.gg/nYcQFEpXfU' },
              { text: 'Modding Discord', link: 'https://discord.gg/XeyYqRdRGC' },
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          items: [
            {text: 'Beginner\'s Guide', link: '/overview'},
            {
              text: 'Installing Mods',
              items: [
                {text: 'Using r2modman', link: '/installation/installing-r2modman'},
                {text: 'Sharing r2modman Profiles', link: '/installation/syncing-mods'},
                {text: 'Configuring Mods', link: '/installation/configuration'}
              ]
            },
            {
              text: 'Other Resources',
              items: [
                {text: 'Frequently Asked Questions', link: '/extras/faq'},
                { text: 'Contributing Translations', link: '/contribute/translating-the-wiki' },
                { text: 'Contributing Articles', link: '/contribute/writing-articles' },
                {text: 'About', link: '/extras/about'}
              ]
            },
          ]
        }
        ],
      '/dev/': [
        {
          items: [
            {
              text: 'Developer\'s Guide', link: '/dev/overview'
            },
            { 
              text: 'Creating Mods', 
              items: [
                { text: 'Initial Setup', link: '/dev/initial-setup' },
                { text: 'Starting a Mod', link: '/dev/starting-a-mod' },
                { text: 'Mod Testing Tips', link: '/dev/mod-testing-tips' },
                { text: 'Open-Source & Ethics', link: '/dev/open-source-and-ethics' },
                { text: 'Publishing Your Mod', link: '/dev/publishing-your-mod' }
              ]
            },
            { 
              text: 'Modding Topics', 
              items: [
                {
                  text: 'Fundamentals',
                  collapsed: false,
                  items: [
                    { text: "Logging", link: '/dev/fundamentals/logging'},
                    { text: "Reading Game Code", link: '/dev/fundamentals/reading-game-code'},
                      { 
                        text: "Patching Code",
                        link: '/dev/fundamentals/patching-code',
                        collapsed: true,
                        items: [
                          { text: "MonoMod Examples", link: '/dev/fundamentals/patching-code/monomod-examples'},
                          { text: "MonoMod Docs", link: '/dev/fundamentals/patching-code/monomod-documentation'},
                        ]
                      }
                  ]
                },
                {
                  text: 'Intermediate',
                  collapsed: false,
                  items: [
                    { text: 'Custom Configs', link: '/dev/intermediate/custom-configs' },
                    { text: 'Custom Config Syncing', link: '/dev/intermediate/custom-config-syncing' },
                    { text: 'Asset Bundling', link: '/dev/intermediate/asset-bundling' },
                  ]
                },
                {
                  text: 'Advanced',
                  collapsed: false,
                  items: [
                    { text: 'Networking', link: '/dev/advanced/networking' },
                  ]
                }
              ]
            },
            { 
              text: 'Modding APIs', 
              items: [
                { text: 'Overview', link: '/dev/apis/overview' },
                {
                  text: 'Asset APIs',
                  collapsed: false,
                  items: [
                    { text: 'CustomSounds', link: '/dev/apis/customsounds'},
                  ]
                },
                {
                  text: 'Programming APIs',
                  collapsed: false,
                  items: [
                    { 
                      text: 'LethalLib', 
                      link: '/dev/apis/lethallib',
                      collapsed: true,
                      items: [
                        { text: 'Custom Scrap', link: '/dev/apis/lethallib/customscrap'},
                        {
                          text: 'Custom Enemies',
                          link: '/dev/apis/lethallib/custom-enemies/overview',
                          collapsed: true,
                          items: [
                            { text: '3D Modeling With Blender', link: '/dev/apis/lethallib/custom-enemies/blender-resources'},
                            { text: 'Unity Project', link: '/dev/apis/lethallib/custom-enemies/unity-project'},
                            { text: 'Coding Our AI', link: '/dev/apis/lethallib/custom-enemies/coding-ai'},
                          ]
                        },
                      ]
                    },
                    {
                      text: 'Configurable Company',
                      link: '/dev/apis/configurable-company',
                      collapsed: true,
                      items: [
                        {
                          text: 'Developing Pages',
                          link: '/dev/apis/configurable-company/developing-pages'
                        },
                        {
                          text: 'Developing Categories',
                          link: '/dev/apis/configurable-company/developing-categories'
                        },
                        {
                          text: 'Developing Configurations',
                          link: '/dev/apis/configurable-company/developing-configs'
                        },
                        {
                          text: 'Event Listening',
                          link: '/dev/apis/configurable-company/event-listening'
                        }
                      ]
                    },
                    {
                      text: 'CSync',
                      link: '/dev/apis/csync',
                      collapsed: true,
                      items: [
                        { text: 'Usage Guide', link: '/dev/apis/csync/usage-guide' },
                        { text: 'Usage Guide (v4)', link: '/dev/apis/csync/v4-usage-guide' },
                        {
                          text: 'Outdated',
                          link: '/dev/apis/csync/outdated',
                          collapsed: true,
                          items: [
                            { text: 'Usage Guide (v3)', link: '/dev/apis/csync/outdated/v3-usage-guide' }, 
                            { text: 'Migrating from v1', link: '/dev/apis/csync/outdated/migration-from-v1' },
                            { text: 'Usage Guide (v1)', link: '/dev/apis/csync/outdated/v1-usage-guide'},
                            { text: 'Troubleshooting', link: '/dev/apis/csync/outdated/troubleshooting' }
                          ]
                        },
                      ]
                    },
                  ]
                }
              ]
            },
            {
              text: 'Other Resources',
              items: [
                /*{ text: 'Frequently Asked Questions', link: '/dev/extras/faq' },*/
                { text: 'Contributing Translations', link: '/contribute/translating-the-wiki' },
                { text: 'Contributing Articles', link: '/contribute/writing-articles' },
                { text: 'About', link: '/extras/about' }
              ]
            }
          ]
        }
      ],
    },
    externalLinkIcon: true,
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LethalCompany/ModdingWiki' }
    ],
    editLink: {
      pattern: 'https://github.com/LethalCompany/ModdingWiki/edit/main/docs/:path',
    },
    docFooter: {
      prev: false,
      next: false,
    }
  },
  lastUpdated: true,
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
  markdown: {
    languageAlias: { 'il': 'shellscript' }
  }
})
