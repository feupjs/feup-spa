// 更多配置文档：https://www.feup.cn/fig-cli
module.exports = {
  name: 'feup-spa',
  dingdingNoticeId: 'fe',
  webpackConfig: {
    optimization: {
      // spa
      splitChunks: {
        chunks: 'async', // 异步加载代码块， all
        minSize: 0,
        maxSize: 1024 * 800,
        maxAsyncRequests: 6, // 最大的异步请求数
        maxInitialRequests: 6,
        name: true,
      },
    },
  },
  pxtorem: {
    include: [
      'src/components/Mc',
      'src/views/mIndex',
      'src/views/about/MC',
      'src/views/experienceCourse/Mc',
      'src/views/VIP/Mc',
    ],
  },
  // https://babeljs.io/docs/en/babel-preset-env#targets
  targets: {
    browsers: ['ie >=10', 'last 2 version', '> 5%', 'not dead'],
  },
  lintShow: false,
};
