module.exports = {
  css: {
    loaderOptions: {
      // 加载共享全局样式变量
      scss: {
        // 旧版本
        // additionalData: `@import "~@/styles/variables.scss"`
        // 新版本
        prependData: '@import "~@/styles/variables.scss"'
      }
    }
  }
}
