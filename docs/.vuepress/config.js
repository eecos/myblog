const path = require('path');

const nav = [
    { text: '🚀首页', link: '/' },
    { text: '📗旧博客', link: 'https://www.lijiating.online', icon: 'reco-tag' },
    {
        text: '目录',
        items: [{
                text: '开源学习',
                items: [
                    { text: '资源链接', link: '/resources/resources' },
                    { text: '开源书籍', link: '/resources/books' }
                ],
            },
            {
                text: '前端学习',
                items: [
                    { text: 'javascript', link: '/js/' },
                    { text: 'css', link: '/css/' },
                    { text: 'vue', link: '/vue/' }
                ]
            },
            {
                text: '后端学习',
                items: [
                    { text: 'java', link: '/java/' },
                    { text: 'springboot', link: '/springboot/' },
                    { text: 'springcloud', link: '/springcloud/' }
                ]
            },
            {
                text: '学习扩展',
                items: [
                    { text: '三方教程', link: '/otherProse/' }
                ]

            }
        ]
    },
    {
        text: '👓在线文档',
        items: [{
                text: 'WEB前端',
                items: [
                    { text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
                    { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                    { text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' },
                    { text: 'Layout', link: 'http://www.jeasyui.net/plugins/162.html' },
                    { text: 'Jquery', link: 'https://www.jquery123.com/' },
                    { text: '腾讯云开发者手册', link: 'https://cloud.tencent.com/developer/devdocs' }
                ]
            },
            {
                text: 'SERVER后端',
                items: [{
                        text: 'SpringBoot开发文档',
                        link: 'https://docs.spring.io/spring-boot/docs/2.1.2.RELEASE/reference/htmlsingle/'
                    },
                    {
                        text: 'SpringCloud-F',
                        link: 'https://cloud.spring.io/spring-cloud-static/Finchley.SR2/single/spring-cloud.html'
                    },
                    {
                        text: 'springboot2.0.5中文开发文档',
                        link: 'http://springboot.lianmengtu.top'
                    },
                    {
                        text: '收集各种Spring Cloud 学习资源',
                        link: '/springcloud/AwesomeSpringCloud'
                    }

                ]
            },
            {
                text: '移动端',
                items: [{
                    text: 'Flutter',
                    link: 'https://flutterchina.club/docs'
                }]
            },
            {
                text: '评论系统',
                items: [
                    { text: 'valine无后端评论系统', link: 'https://valine.js.org' }
                ]
            },
            {
                text: 'linux命令查询',
                link: 'http://man.linuxde.net'
            }
        ]
    },
    {
        text: '👓在线工具',
        items: [{
                text: '数据',
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
                text: '开源仓库',
                items: [
                    { text: 'maven仓库', link: 'https://mvnrepository.com' },
                    { text: 'gradle', link: 'https://docs.gradle.org/5.2/javadoc/index.html' }
                ]
            }
        ]
    },
    {
        text: '职业生涯计划',
        items: [
            { text: '2019年学习计划', link: '/plan/2019plan' }
        ]
    },
    {
        text: '🌈分享链接',
        items: [{
                text: 'GitHub',
                link: 'https://github.com/mrjerryli'
            },
            {
                text: '码云',
                link: 'https://gitee.com/ljtJerry'
            },
            {
                text: 'D2admin',
                link: 'https://doc.d2admin.fairyever.com/zh/'
            },
            {
                text: '技术胖',
                link: 'https://jspang.com'
            },
            {
                text: '爱搜资源',
                link: 'https://www.aisouziyuan.com'
            }
        ]
    },
    { text: '个人介绍', link: '/about/' }
];

const sidebar = {
    '/css/': [{
        title: '样式学习',
        collapsable: true,
        children: [
            'css1',
            'css2'
        ]
    }],
    // 打开FAQ主页链接时生成下面这个菜单
    '/otherProse/': [
        //多级菜单形式
        {
            title: 'Gogs服务器安装教程',
            collapsable: true,
            children: ['gogsInstall'],
        },
        {
            title: 'markdown扩展',
            collapsable: true,
            children: ['markdown扩展'],
        }
    ],
    '/resources/': [{
        title: "开源资源",
        collapsable: true,
        children: ['resources', 'books']
    }],
    '/plan/': [{
        title: '职业生涯计划',
        children: [
            '/plan/2019plan'
        ]
    }],
    '/js/': [
        // '/js/',
        {
            title: 'javascript学习',
            children: [
                '/js/js1',
                '/js/js2',
            ]
        }
    ],
    '/vue/': [
        // '/vue/',
        {
            title: 'vue学习',
            children: [
                '/vue/vue1',
                '/vue/vue2'
            ]
        }
    ],
    '/java/': [
        // '/java/', // JAVA文件夹的README.md 不是下拉框形式
        {
            title: '开始学习java',
            children: [
                '/java/java1', // 以docs为根目录来查找文件 
                '/java/java2' // 以docs为根目录来查找文件 
            ]
        }
    ],
    '/springboot/': [
        // '/springboot/',
        {
            title: '开始学习springboot',
            children: [
                '/springboot/springboot1',
                '/springboot/springboot2'
            ]
        }
    ],
    '/springcloud/': [{
            title: '微服务前言',
            children: ['/springcloud/']
        },
        {
            title: '微服务架构之nacos',
            children: [
                '/springcloud/springcloud-nacos',
            ]
        },
        {
            title: '微服务架构···',
            children: [
                '/springcloud/springcloud2'
            ]
        }
    ]
};

const head = [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],
];
// 文件排序，默认显示最新，README在最前
function sortFile(files) {
    // console.log(files.map(i => i.path))
    files.sort((a, b) => (a.stat.ctime < b.stat.ctime))
    let o = files.find(i => i.name === 'README')
    if (o) {
        files.splice(files.indexOf(o), 1);
        files.unshift(o);
    }
}
module.exports = {
    /**
     设置base
    例如：你想要部署在https://foo.github.io 那么设置base为/,base默认就为/,所以可以不用设置
    想要部署在https://foo.github.io/bar/,那么 base 应该被设置成 "/bar/"
   */
    // 这是部署到github相关的配置
    base: '/myblog/',
    // 编译后输出文件进行修改
    // dest: '/Users/jerry/Development/WEB/webWorkSpace/LIJIATING/myblog/',
    evergreen: true,
    head,
    serviceWorker: true,
    //theme: 'ktquez', // 如果指定自定义主题，内置主题失效。
    //ga: 'UA-123456789-0', // 谷歌网站分析账户的 ID 号。
    //port: 8000, // 指定开发服务器端口号。
    locales: { // 设置多语言的根目录，设置首页的主副标题。
        '/': {
            lang: 'zh-CN', // 简体中文在「/」根目录。
            title: '李加廷の博客',
            description: '努力攒够了，梦想才会开花！🌼'
        }
    },

    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/mrjerryli/myblog.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/mrjerryli/myblog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'gh-pages',
        // 默认是 false, 设置为 true 来启用是否编辑
        editLinks: false,
        displayAllHeaders: false, // 默认为 false 仅打开当前文件标题。
        activateHeaderLinks: false,
        // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 2, // 侧边栏目录对应的 Markdown 标题，从二级标题开始显示两级。
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
        //导航栏配置
        nav,
        serviceWorker: { // 更新缓存网页提示及按钮名称。
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
        // sidebar: buildSidebar(nav)
        //侧边栏配置
        // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar: sidebar
    },
    markdown: {
        anchor: { permalink: true }, // 内置插件设置：文件内部链接。
        lineNumbers: false, // 代码块显示行号
        config: md => { // 外部插件设置：markdown-it-plugin。
            md.set({ breaks: true })
            md.use(require('markdown-it-abbr')),
                md.use(require('markdown-it-attrs')),
                md.use(require('markdown-it-checkbox')),
                md.use(require('markdown-it-fontawesome')),
                md.use(require('markdown-it-footnote')),
                md.use(require('markdown-it-katex')),
                md.use(require('markdown-it-kbd')),
                md.use(require('markdown-it-imsize')),
                md.use(require('markdown-it-mark')),
                md.use(require('markdown-it-plantuml')),
                md.use(require('markdown-it-sup')),
                md.use(require('markdown-it-sub')),
                md.use(require('markdown-it-task-checkbox'))
        }
    },
}


// 暂时没有用到
function buildSidebar(nav) {

    let task = [];

    function rev(list) {
        list.map(i => {
            if (i.auto) task.push(i);
            if (i.items) rev(i.items);
        })
    };
    rev(nav);

    let rst = {};
    task.map(i => {
        if (i.link && i.text) {
            rst[i.link] = [{
                title: i.text,
                collapsable: false,
                children: getList(i.link)
            }]
        }
    })

    return rst
}

function getList(link) {
    let p = path.join(__dirname, '..', link);
    let files = ls(p + '*.md');
    sortFile(files);
    let rst = [];
    for (let file of files) {
        rst.push(file.name === 'README' ? '' : file.name)
    }
    return rst;
}