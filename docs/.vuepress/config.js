module.exports = {
	title: "can\'t find it anymore",
	description: '小哥哥小姐姐进来玩啊~(✿◡‿◡)',
	head: [['link', { rel: 'icon', href: '/icon.png' }]],
  port: 3000,
  base: '/rjx/',
	// markdown: {
	// 	lineNumbers: false,
  // },

  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/CantFindItAnymore/myBlog',
    repoLabel: 'Github',
    nav: [
      {
        text: '前端面试梳理',
        link: '/interview/'
      },
      {
        text: 'TS',
        link: '/ts/'
      },
      {
        text: 'webpack',
        link: '/webpack/'
      },
      {
        text: '运维',
        link: '/devops/'
      },
      {
        text: 'node',
        link: '/node/'
      },
      {
        text: '实战',
        link: '/actualCombat/'
      }
    ],
    // sidebar: {
    //   '/webpack/': [webpackSidebar],
    //   '/vueAnalysis/': vueAnalysisSidebar
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@components': '.././components'
      }
    }
  }
}
