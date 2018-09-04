// my personal config
console.log('from my config...')

module.exports = {
  baseUrl: '/',
  outputDir: 'deploy',
  assetsDir: './src/assets/',
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
    useLocalIp: true,
    proxy: {
      '/index.php': {
        target: 'https://smgdatadev.smgtech.net',
        ws: true,
        changeOrigin: true
      }
    }
  }
}