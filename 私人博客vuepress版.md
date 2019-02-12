##复制node_modules/@vuepress/theme-default 文件夹
##粘贴至.vuepress/ 下并更名为theme
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles // 样式
│   │    │   ├── util // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json // 主题依赖
│   │    │   ├── README.md // 主题说明
│   │    └── config.js
│   ├── FAQ     // 求索模块
│   ├── Store   // 仓库模块
│   ├── Thought // 随笔模块
│   └── README.md   // 博客首页
└── package.json



-----
tree docs/
├─ README.md # 首页，渲染为「index.html」。
├─ .vuepress/ # 存放全局配置、静态资源及组件等。
│  ├─ config.js # 配置文件。
│  ├─ enhanceApp.js # 客户端应用的增强-???...
│  ├─ styles/ # 存放样式文件。
│  │  ├─ index.styl # 覆盖默认全局样式文件，渲染为 CSS 文件。
│  │  └─ palette.styl # 覆盖默认颜色常量。
│  ├─ templates/ # 渲染为一级子目录。
│  │  ├─ dev.html # 开发环境 HTML 模板文件。
│  │  └─ ssr.html # 构建 Vue SSR 模板文件。
│  ├─ public/ # 静态资源，渲染为根目录。
│  │  ├─ hero.png ### 首页调用图片。
│  │  ├─ manifest.json # ???...
│  │  └─ icons/ # 渲染后为一级子目录
│  │      └─ xx-00x00.png # 存放各类设备大小的图标。
│  ├─ components/ # 存放「vue 全局组件」目录。
│  │  └─ mermaid.md ### 启用「mermaid 的 vue 组件」。
│  └─ theme/ # 可选「自定义主题」目录。
│      └─ layout.md # 自定义主题渲染文件。
├─ config/ ### 自定义「config」目录。
│  └─ README.md
├─ default-theme/ ### 自定义「default-theme」目录。
│  └─ README.md
├─ guide/ ### 自定义「guide」目录。
│  ├─ README.md
│  ├─ guide-1.md
│  ├─ ...
├─ plugin/ ### 自定义「plugin」目录。
│  └─ README.md
├─ theme/ ### 自定义「theme」目录。
│  └─ README.md
├─ zh/ ### 多语言支持：中文。
│  ├─ config/ ### 重复「config」目录。
│  ├─ default-theme/
│  ├─ guide/
│  ├─ plugin/
│  └─ theme/
├─ jp/ ### 多语言支持：日语或其它语言。
├─ ... ### 重复「英语目录结构」。