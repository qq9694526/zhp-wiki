module.exports = [
  { text: '首页', link: '/' },
  {
    text: '知识库',
    link: '/wiki/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: '基础', link: '/pages/028cb3/' }, // 注意link结尾有斜杠和没有斜杠的区别,不带/访问的是028cb3.html
      { text: '框架', link: '/pages/df2660/' },
      { text: '工具', link: '/pages/8e1978/' }
    ]
  },
  { text: '说说', link: '/pages/f2e63f/'},
  { text: '关于', link: '/about/' }
]