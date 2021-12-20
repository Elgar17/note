const Nav = require("./nav.js")
const Sidebar = require("./sidebar/index.js")

module.exports = {
  title: '前端到全栈',
  base: '/docs/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }],
    [
      'meta', {
        name: 'baidu-site-verification',
        content: 'code-qGZsGsi6Kf'
      }
    ],
    // 添加百度统计
    [
      "script",
      {
      },
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fc5ff755829e74db29f25cb68a49a4e1";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  description: 'Go 语言全栈笔记', //描述
  dest: './dist', // 设置输出目录
  port: 2233, //端口

  themeConfig: { //主题配置
    lastUpdated: '更新时间', // string | boolean
    // 添加导航栏
    nav: Nav,
    // 为以下路由添加侧边栏
    sidebar: Sidebar,
    darkMode: true
  }
}