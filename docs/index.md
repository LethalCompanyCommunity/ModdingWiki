---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: false

hero:
  name: "Lethal Company Modding Wiki"
  tagline: Welcome to the Lethal Company modding guide! Learn how to install, manage, and create mods for Lethal Company!
  actions:
    - theme: brand
      text: Beginners Guide
      link: /installing-r2modman.html
    - theme: alt
      text: Edit on GitHub
      link: https://github.com/LethalCompany/ModdingWiki
---

<script setup lang="ts">
  import Home from './.vitepress/components/Home.vue'
  import HomeGroup from './.vitepress/components/HomeGroup.vue'
  import HomeItem from './.vitepress/components/HomeItem.vue'
  import HomeLinks from './.vitepress/components/HomeLinks.vue'
</script>

<Home>
  <HomeGroup title="Installing Mods">
    <HomeItem name="Using r2modman" href="./installing-r2modman.html" />
  </HomeGroup>

  <HomeGroup title="Creating Mods">
    <HomeItem name="Initial modding setup" href="./initial-setup.html" />
    <HomeItem name="Starting a mod" href="./starting-a-mod.html" />
    <HomeItem name="Open-source and ethics" href="./open-source-and-ethics.html" />
    <HomeItem name="Publishing your mod" href="./publishing-your-mod.html" />
  </HomeGroup>

  <HomeGroup title="Other Resources">
    <HomeItem name="Frequently Asked Questions" href="./faq.html" />
    <HomeItem name="Contributing translations" href="./translating-the-wiki.html" />
    <HomeItem name="About" href="./about.html" />
  </HomeGroup>
</Home>

<HomeLinks>

- [Join the Discord server!](https://discord.gg/nYcQFEpXfU)
- [Contribute on GitHub](https://github.com/LethalCompany/ModdingWiki)
- [Translate the Wiki](./translating-the-wiki.html) - Localize the wiki to your language!

</HomeLinks>