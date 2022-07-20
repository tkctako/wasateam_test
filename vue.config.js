// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: './',
  lintOnSave:false,
  devServer: {
    open: true,
    host: 'localhost',  // 設置主機地址
    port: 8080,         // 設置默認埠號
    proxy: {
      '/api': {
        target: 'https://mocki.io/v1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
