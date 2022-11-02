import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ToMemo',
  description: 'ToMemo的使用说明',
  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.png',
    repo: 'https://github.com/le0zh0u/ToMemo-doc',
    navbar: [
        {
            text: '指南',
            link: '/guide',
        },
    ],
    sidebar: {
    '/guide': [
            {
                text: '指南',
                children: ['/guide/README.md','/guide/getting-started.md', '/guide/settings', '/guide/keyboard', '/guide/short-term-memory', '/guide/advanced'],
            },
        ],
    },
  }),
})