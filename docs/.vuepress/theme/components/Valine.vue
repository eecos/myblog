<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  // 初始化Valine组件
  mounted () {
    this.renderValine()
  },
  watch: {
    // 路由变化时重新初始化Valine组件
    $route (a, b) {
      if (a.path != b.path) {
        this.renderValine()
      }
    }
  },
  methods: {
    // 生成评论组件的 Dom 元素
    renderValine () {
      //因为此方法会构建dom节点，所以<template>中不需要再加相关dom元素
      let $page = document.querySelector('.page')
      let vcomments = document.getElementById('vcomments')
      if (!vcomments) {
        vcomments = document.createElement('div')
        vcomments.id = 'vcomments'
      }
      if (this.$page.frontmatter.hideFooter) {
        // 如果forntmatter中标注'hideFooter：true'则不渲染评论组件，使得评论组件在各个页面的显示可控
        vcomments.remove();
      } else {
        if ($page && !vcomments) {
          $page.appendChild(vcomments)
        } else {
          $page = document.querySelector('.page')
          $page.appendChild(vcomments)
        }
        this.valine()
      }
    },
    // 初始化valine实例
    valine () {
      const Valine = require('valine')
      const leancloudStorage = require('leancloud-storage')
      // require window
      if (typeof window !== 'undefined') {
        window.AV = leancloudStorage
      }

      new Valine({
        el: '#vcomments',
        appId: 'ieGnPpPeO2tGnNsUuVKwxxSB-gzGzoHsz',// your appId
        appKey: 'obSnkXqdIFFqG24Jf7hHDElo', // your appKey
        notify: true,
        verify: false,
        visitor: true,
        avatar: 'mrjerryli',
        placeholder: '说点什么呢',
        //placeholder: 'It\'s a long night, no mood to sleep.\n<注册Gravatar账号显示头像>',
        path: window.location.pathname
      });
    },
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/config.styl';
@require '../styles/wrapper.styl';

#vcomments {
  @extend $wrapper;
}
</style>
