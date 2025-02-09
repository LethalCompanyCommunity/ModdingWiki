// https://vitepress.dev/guide/custom-theme
import mediumZoom from 'medium-zoom'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import type { Theme as ThemeConfig } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './styles/main.css'
import './styles/custom.css'

import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading),
      ],
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('#VPContent img', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  }
} satisfies ThemeConfig
