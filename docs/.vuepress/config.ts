import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
//   base: '/ToMemo-doc/',
//   lang: 'zh-CN',
  title: 'ToMemo',
  description: 'ToMemo的使用说明',
  theme: defaultTheme({
    // 默认主题配置
    logo: '/images/logo.png',
    repo: 'https://github.com/le0zh0u/ToMemo-doc',
    locales:{
        '/':{
            // selectLanguageText: '选择语言',
            selectLanguageName: '简体中文',
            editLinkText: '在 GitHub 上编辑此页',
            navbar: [
                {
                    text: '指南',
                    link: '/guide',
                },
                {
                    text: '常见案例',
                    link: '/cases/',
                },
                {
                    text: '键盘',
                    link: '/keyboard-advance/',
                },
                {
                    text: '短时记忆+快捷指令',
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
                        children: ['/guide/README.md','/guide/getting-started.md', '/guide/settings', '/guide/keyboard', '/guide/keyboard-settings', '/guide/short-term-memory', '/guide/advance'],
                    },
                ],
                '/keyboard-advance/': [
                    {
                        text: '键盘进阶',
                        children: ['/keyboard-advance/README.md'],
                    },
                ],
                '/short-term-memory-advance/': [
                    {
                        text: '短时记忆进阶',
                        children: ['/short-term-memory-advance/README.md'],
                    },
                ],
            },
        },
        '/en/':{
            selectLanguageName: 'English',
            navbar: [
                {
                    text: 'Guide',
                    link: '/en/guide',
                },
                {
                    text: 'Advanced Keyboard',
                    link: '/en/keyboard-advance/',
                },
                {
                    text: 'Advanced ST Memory',
                    link: '/en/short-term-memory-advance/',
                },
                {
                    text: 'Contact',
                    link: '/en/general/contact',
                },
                {
                    text: 'Terms',
                    link: '/en/general/terms',
                }, 
                {
                    text: 'Privacy',
                    link: '/en/general/privacy',
                },
            ],
            sidebar: {
                '/en/guide': [
                    {
                        text: '指南',
                        children: ['/en/guide/README.md','/en/guide/getting-started.md', '/en/guide/settings', '/en/guide/keyboard', '/en/guide/keyboard-settings', '/en/guide/short-term-memory', '/en/guide/advance'],
                    },
                ],
                '/en/keyboard-advance/': [
                    {
                        text: '键盘进阶',
                        children: ['/en/keyboard-advance/README.md'],
                    },
                ],
                '/en/short-term-memory-advance/': [
                    {
                        text: '短时记忆进阶',
                        children: ['/en/short-term-memory-advance/README.md'],
                    },
                ],
            },
        }
    }
  }), 
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'ToMemo',
      description: 'ToMemo是超好用的备忘管理工具'
    },
    '/en/': {
      lang: 'en-US',
      title: 'ToMemo',
      description: 'ToMemo is a handy memo management tool'
    }
  }
})