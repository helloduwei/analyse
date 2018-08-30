// my personal config
console.log('from my config...')

module.exports = {
  baseUrl: '/',
  outputDir: 'deploy',
  css: {
    extract: true,
    loaderOptions: {
      css: {},
      less: {},
      postcss: {}
    }
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hotOnly: true,
    open: true,
    useLocalIp: true
  }
}