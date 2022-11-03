import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
//   base: '/ToMemo-doc/',
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
        {
            text: '键盘进阶',
            link: '/keyboard-advance/',
        },
        {
            text: '短时记忆进阶',
            link: '/short-term-memory-advance/',
        },
        {
            text: '联系我',
            link: '/general/contact',
        },
        {
            text: '使用条款',
            link: '/general/terms',
        }, 
        {
            text: '隐私政策',
            link: '/general/privacy',
        },
    ],
    sidebar: {
        '/guide': [
            {
                text: '指南',
                children: ['/guide/README.md','/guide/getting-started.md', '/guide/settings', '/guide/keyboard', '/guide/short-term-memory', '/guide/advance'],
            },
        ],
        '/keyboard-advance/': [
            {
                text: '键盘进阶',
                children: ['/keyboard-advance/README.md','/keyboard-advance/keyboard-demo.md'],
            },
        ],
        '/short-term-memory-advance/': [
            {
                text: '短时记忆进阶',
                children: ['/short-term-memory-advance/README.md'],
            },
        ],
    },
  }),
})