/*********************************1.Valine评论***********************************/

function renderValine(router) {
    // 重新渲染 评论区
    router.afterEach((to, from) => {
        let $page = document.querySelector('.page')
        let vcomments = document.getElementById('vcomments')
        if (!vcomments) {
            vcomments = document.createElement('div')
            vcomments.id = 'vcomments'
            vcomments.style.margin = '6em 4em 0 4em'
        }
        if ($page && !vcomments) {
            $page.appendChild(vcomments)
        } else {
            // 获取不到vuepress的page加载完成时的钩子，只能采用笨方法
            setTimeout(() => {
                $page = document.querySelector('.page')
                $page.appendChild(vcomments)
                valine()
            }, 500)
        }
        valine()
    })
}
function valine() {
    const Valine = require('valine')
    const leancloudStorage = require('leancloud-storage')
    // require window 
    if (typeof window !== 'undefined') {
        window.AV = leancloudStorage
    }
    // 初始化valine
    new Valine({
        el: '#vcomments',
        appId: 'ieGnPpPeO2tGnNsUuVKwxxSB-gzGzoHsz',// your appId
        appKey: 'obSnkXqdIFFqG24Jf7hHDElo', // your appKey
        notify: false, // 邮件提醒 
        verify: false, // 验证码
        avatar: 'mrjerryli',
        placeholder: '说点什么呢',
        path: window.location.pathname // 虽然默认就是这个，但是不加会导致不重新加载评论
    });
}

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    try {
        // 生成静态页时在node中执行，没有document对象
        document && renderValine(router)
    } catch (e) {
        console.error(e.message)
    }
}


/*********************************2.gitment评论***********************************/
/** 
function integrateGitment(router) {
    const linkGitment = document.createElement('link')
    linkGitment.href = 'https://imsun.github.io/gitment/style/default.css'
    linkGitment.rel = 'stylesheet'
    const scriptGitment = document.createElement('script')
    document.body.appendChild(linkGitment)
    scriptGitment.src = 'https://imsun.github.io/gitment/dist/gitment.browser.js'
    document.body.appendChild(scriptGitment)

    router.afterEach((to) => {
        // 已被初始化则根据页面重新渲染 评论区
        if (scriptGitment.onload) {
            renderGitment(to.fullPath)
        } else {
            scriptGitment.onload = () => {
                const commentsContainer = document.createElement('div')
                commentsContainer.id = 'comments-container'
                commentsContainer.classList.add('content')
                const $page = document.querySelector('.page')
                if ($page) {
                    $page.appendChild(commentsContainer)
                    renderGitment(to.fullPath)
                }
            }
        }
    })

    function renderGitment(fullPath) {
        const gitment = new Gitment({
            id: fullPath,
            owner: 'mrjerryli', // 必须是你自己的github账号
            repo: 'myblog', // 上一个准备的github仓库，作为评论，非全称（仓库名）
            oauth: {
                // 关于OAuth只需在github中的setting/Developer application新建获取
                client_id: 'dbf9a585a65bb6ba3bf4', // 第一步注册 OAuth application 后获取到的 Client ID
                client_secret: 'feea0d90c1053ba355304e47098b55fc99510b10', // 第一步注册 OAuth application 后获取到的 Clien Secret
            },
        })
        gitment.render('comments-container')
    }
}

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    try {
        // 生成静态页时在node中执行，没有document对象
        document && integrateGitment(router)
    } catch (e) {
        console.error(e.message)
    }
}
*/