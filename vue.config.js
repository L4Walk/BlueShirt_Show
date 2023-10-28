const path = require('path');

module.exports = {
  lintOnSave: undefined,
  productionSourceMap: false, // 取消源代码映射

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')  // 这将 '@' 设置为 'src/' 目录的绝对路径
        // 你还可以添加其他别名，例如:
        // 'assets': path.resolve(__dirname, 'src/assets/')
      }
    }
  }
}
