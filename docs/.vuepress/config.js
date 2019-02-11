module.exports = {
    title: '李加廷の博客',
    description: '努力攒够了，梦想才会开花！🌼',
    base: '/myblog/', // 这是部署到github相关的配置
    lang: 'zh-CN',
    // 编译后输出文件进行修改
    // dest: '/Users/jerry/Development/WEB/webWorkSpace/LIJIATING/myblog/',
    serviceWorker: true,
    evergreen: true,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        editLinks: true,
        //获取最后一次提交博客时间
        lastUpdated: true, // 最后更新时间
        displayAllHeaders: true, // 默认值：false
        activeHeaderLinks: true,
        repo: 'mrjerryli/myblog',
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        docsBranch: 'gh-pages',
        sidebarDepth: 2,
        docsDir: 'docs',
        //导航栏配置
        nav: [
            { text: '🚀首页', link: '/' },
            { text: '旧博客', link: 'https://www.lijiating.online', icon: 'reco-tag' },
            {
                text: '📗目录',
                items: [
                    {
                        text: '开源学习',
                        items: [
                            { text: '资源链接', link: '/resources/resources' },
                            { text: '开源书籍', link: '/resources/books' }
                        ],
                    },
                    {
                        text: '前端学习',
                        items: [
                            { text: 'JS', link: '/js/' },
                            { text: 'CSS', link: '/css/' },
                            { text: 'VUE', link: '/vue/' }
                        ]
                    },
                    {
                        text: '后端学习',
                        items: [
                            { text: 'JAVA', link: '/java/' },
                            { text: 'SPRINGBOOT', link: '/springboot/' },
                            { text: 'SPRINGCLOUD', link: '/springcloud/' }
                        ]
                    },
                    {
                        text: '爱好培养',
                        items: [
                            { text: '散文', link: '/prose/' }
                        ]

                    }
                ]
            },
            {
                text: '👓在线文档',
                items: [
                    {
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
                        items: [
                            {
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
                            }

                        ]
                    },
                    {
                        text: '移动端',
                        items: [
                            {
                                text: 'Flutter',
                                link: 'https://flutterchina.club/docs'
                            }
                        ]
                    },
                    {
                        text: '评论系统',
                        items: [
                            { text: 'valine无后端评论系统', link: 'https://valine.js.org' }
                        ]
                    }
                ]
            },
            {
                text: '👓在线工具',
                items: [
                    {
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
                items: [
                    {
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
        ],
        //侧边栏配置
        sidebar: {
            '/css/': [
                '',
                'css1',
                'css2'
            ],
            '/prose/': [
                {
                    title: '精品散文',
                    collapsable: true,
                    children: ['prose1'],
                },
                {
                    title: '人生哲理',
                    collapsable: true,
                    children: ['prose2'],
                }
            ],
            '/resources/': [
                {
                    title: "开源资源",
                    collapsable: true,
                    children: ['resources', 'books']
                }
            ],
            '/plan/': [
                '/plan/',
                {
                    title: '职业生涯计划',
                    children: [
                        '/plan/2019plan'
                    ]
                }
            ],
            '/js/': [
                '/js/',
                {
                    title: '开始学习js',
                    children: [
                        '/js/js1',
                        '/js/js2',
                    ]
                }
            ],
            '/vue/': [
                '/vue/',
                {
                    title: '开始学习vue',
                    children: [
                        '/vue/vue1',
                        '/vue/vue2'
                    ]
                }
            ],
            '/java/': [
                '/java/', // JAVA文件夹的README.md 不是下拉框形式
                {
                    title: '开始学习java',
                    children: [
                        '/java/java1', // 以docs为根目录来查找文件 
                        '/java/java2'  // 以docs为根目录来查找文件 
                    ]
                }
            ],
            '/springboot/': [
                '/springboot/',
                {
                    title: '开始学习springboot',
                    children: [
                        '/springboot/springboot1',
                        '/springboot/springboot2'
                    ]
                }
            ],
            '/springcloud/': [
                '/springcloud/',
                {
                    title: '开始学习springcloud',
                    children: [
                        '/springcloud/springcloud1',
                        '/springcloud/springcloud2'
                    ]
                }
            ]
        }
    }
}