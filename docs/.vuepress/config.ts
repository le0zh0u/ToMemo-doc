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
                    text: '键盘使用',
                    link: '/keyboard-guide/',
                },
                {
                    text: '短时记忆进阶',
                    link: '/short-term-memory-advance/',
                },
                {
                    text: '常见疑问',
                    link: '/questions/',
                },
                {
                    text: '经典案例',
                    link: '/cases',
                },
                {
                    text: '联系我',
                    link: '/general/contact',
                },
                {
                    text: '更多',
                    children: [
                        {
                            text: '更新历史',
                            link: '/general/change-log',
                        }, 
                        {
                            text: '使用条款',
                            link: '/general/terms',
                        }, 
                        {
                            text: '隐私政策',
                            link: '/general/privacy',
                        },
                    ]
                    
                },
                
            ],
            sidebar: {
                '/guide': [
                    {
                        text: '指南',
                        children: ['/guide/README.md','/guide/getting-started.md', '/guide/memo','/guide/list','/guide/short-term-memory', '/guide/settings', '/guide/advance'],
                    },
                ],
                '/keyboard-guide/': [
                    {
                        text: '键盘使用',
                        children: ['/keyboard-guide/README.md','/keyboard-guide/keyboard'],
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
                    text: 'Keyboard Guide',
                    link: '/en/keyboard-guide/',
                },
                {
                    text: 'Advanced ST Memory',
                    link: '/en/short-term-memory-advance/',
                },
                {
                    text: 'Q & A',
                    link: '/questions/',
                },
                {
                    text: 'Cases',
                    link: '/cases',
                },
                {
                    text: 'Contact',
                    link: '/en/general/contact',
                },
                {
                    text: 'More',
                    children: [
                        {
                            text: 'Change Log',
                            link: '/general/change-log',
                        }, 
                        {
                            text: 'Terms',
                            link: '/en/general/terms',
                        }, 
                        {
                            text: 'Privacy',
                            link: '/en/general/privacy',
                        },
                    ]
                    
                },
            ],
            sidebar: {
                '/en/guide': [
                    {
                        text: 'Guide',
                        children: ['/en/guide/README.md','/en/guide/getting-started.md', '/en/guide/memo','/en/guide/list','/en/guide/short-term-memory', '/en/guide/settings', '/en/guide/advance'],
                    },
                ],
                '/en/keyboard-guide/': [
                    {
                        text: 'Keyboard Guide',
                        children: ['/en/keyboard-guide/README.md','/en/keyboard-guide/keyboard'],
                    },
                ],
                '/en/short-term-memory-advance/': [
                    {
                        text: 'Advanced ST Memory',
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