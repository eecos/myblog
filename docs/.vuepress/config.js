//导航栏配置
const nav = [
    // 多项，下拉形式
    { text: '📍首页', link: '/' },
    //技术栈主要文档
    {
        text: '📗知识归档',
        items: [{
                text: '后端',
                items: [
                    { text: 'springcloud', link: '/Development/Server/springcloud/' }
                ]
            },
            {
                text: '前端',
                items: [
                    { text: 'vue', link: '/Development/Web/Vue/' }
                ]
            },
            {
                text: '环境搭建',
                items: [
                    { text: 'gogs安装教程', link: '/Development/Tools/GogsInstall' },
                    { text: 'Git', link: '/Development/Tools/Git' },
                    { text: 'Markdown扩展', link: '/Development/Tools/Markdown扩展' }
                ]
            }
        ]
    },
    {
        text: '📘在线工具',
        items: [
            { text: 'JSON在线编辑', link: 'https://www.bejson.com/jsoneditoronline' },
            { text: 'MD表格在线编辑', link: 'https://tool.lu/tables/' },
            { text: 'Cron表达式在线生成', link: 'http://cron.qqe2.com' },
            { text: '代码格式化', link: 'http://tool.oschina.net/codeformat/html' },
            { text: 'UUID在线生成', link: 'https://1024tools.com/uuid' },
            { text: '在线properties转yaml、yml工具', link: 'https://www.bejson.com/devtools/properties2yaml/' },
            { text: '在线工具集', link: "http://tool.oschina.net" },
            { text: 'BASE64加密解密', link: 'http://tool.oschina.net/encrypt?type=3' },
            { text: 'gitignore忽略文件在线生成', link: 'https://www.gitignore.io' }
        ]
    },
    {
        text: '📙收藏分享',
        items: [
            { text: 'Java学习+面试指南', link: 'https://github.com/Snailclimb/JavaGuide' },
            { text: '资源链接', link: '/Other/resources/resources' },
            { text: '开源书籍', link: '/Other/resources/books' }
        ]
    },
    {
        text: '📔计划归档',
        items: [
            { text: '2019年学习计划', link: '/Plan/2019plan' }
        ]
    },
    { text: '📚博客', link: 'https://www.lijiating.online' },
    { text: '🌀关于', link: '/About/' },
];

//侧边栏配置
const sidebar = {
    // 打开FAQ主页链接时生成下面这个菜单
    '/Development/Server/springcloud': [{
            title: 'SpringCloud',
            children: ['/Development/Server/springcloud/awesomeSpringCloud']
        },
        {
            title: 'nacos组件',
            children: [
                '/Development/Server/springcloud/springcloud-nacos'
            ]
        },
        {
            title: '微服务架构···',
            children: [
                '/Development/Server/springcloud/springcloud2'
            ]
        }
    ],
    '/Other/resources/': [{
        title: "开源推荐",
        children: ['/Other/resources/resources', '/Other/resources/books']
    }],
    '/Development/Tools/': [{
        title: "常用工具",
        children: ['/Development/Tools/Git', '/Development/Tools/GogsInstall', '/Development/Tools/Markdown扩展']
    }]
};
//注入到当前页面的 HTML <head> 中的标签
const head = [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
];

module.exports = {
    locales: { // 设置多语言的根目录，设置首页的主副标题。
        '/': {
            lang: 'zh-CN', // 简体中文在「/」根目录。
            title: '李加廷の技术栈',
            description: '技术栈'
        }
    },
    //title: '李加廷の技术栈', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    //description: '李加廷の技术栈', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    // head: [
    //     // 增加一个自定义的 favicon(网页标签的图标)
    //     // 这里的 '/' 指向 docs/.vuepress/public 文件目录
    //     // 即 docs/.vuepress/public/img/geass-bg.ico
    //     ['link', { rel: 'manifest', href: '/manifest.json' }],
    //     ['link', { rel: 'apple-touch-icon', href: '/img/baobao.jpg' }],
    //     ['link', { rel: 'icon', href: '/img/baobao.jpg' }]
    // ],
    head: head,
    base: '/myblog/', // 这是部署到github相关的配置
    // markdown: {
    //   lineNumbers: true // 代码块显示行号
    // },
    serviceWorker: true,
    // 更新缓存网页提示及按钮名称。
    serviceWorker: {
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    },
    // plugins: [
    //   [
    //     '@vuepress/pwa',
    //     {
    //       serviceWorker: true,
    //       //指向自定义组件
    //       popupComponent: 'MySWUpdatePopup',
    //       updatePopup: {
    //         message: '新的风暴已经出现',
    //         buttonText: '盘他'
    //       }
    //     }
    //   ]
    // ],
    themeConfig: {
        logo: '/img/baobao.jpg',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/mrjerryli/myblog.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/mrjerryli/myblog.git',
        // // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        docsBranch: 'gh-pages',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        //editLinkText: 'Go home',
        // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 1,
        // 文档更新时间：每个文件git最后提交的时间,
        //astUpdated: 'Last Updated',
        locales: {
            '/': {
                label: '简体中文', // 设置导航栏「选择语言」的子选项标题。
                selectText: '选择语言', // 设置导航栏「选择语言」主选项标题。
                editLinkText: '编辑此页', // 设置自动 github 编辑标题。
                lastUpdated: '上次更新', // 设置自动 github 更新时间戳。
                serviceWorker: { // 更新缓存网页提示及按钮名称。
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },
            }
        },
        // 顶部导航栏
        nav: nav,
        // 侧边栏配置
        sidebar: sidebar
    }
}