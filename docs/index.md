---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: false
description: The Lethal Company Modding Wiki. Learn how to install, manage, and create mods for Lethal Company!

hero:
  name: "Lethal Company Modding Wiki"
  tagline: Welcome to the Lethal Company modding guide! Learn how to install, manage, and create mods for Lethal Company!
  actions:
    - theme: brand
      text: Beginners Guide
      link: /beginners-guide.html
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
    <HomeItem name="Beginners guide" href="./beginners-guide.html" />
    <HomeItem name="Using r2modman" href="./installation/installing-r2modman.html" />
  </HomeGroup>

  <HomeGroup title="Creating Mods">
    <HomeItem name="Initial modding setup" href="./modding/initial-setup.html" />
    <HomeItem name="Starting a mod" href="./modding/starting-a-mod.html" />
    <HomeItem name="Open-source and ethics" href="./modding/open-source-and-ethics.html" />
    <HomeItem name="Publishing your mod" href="./modding/publishing-your-mod.html" />
  </HomeGroup>

  <HomeGroup title="Other Resources">
    <HomeItem name="Frequently Asked Questions" href="./extras/faq.html" />
    <HomeItem name="Contributing translations" href="./translation/translating-the-wiki.html" />
    <HomeItem name="About" href="./extras/about.html" />
  </HomeGroup>
</Home>

<HomeLinks>

- [Join the Discord server!](https://discord.gg/nYcQFEpXfU)
- [Contribute on GitHub](https://github.com/LethalCompany/ModdingWiki)
- [Translate the Wiki](./translation/translating-the-wiki.html) - Localize the wiki to your language!

</HomeLinks>