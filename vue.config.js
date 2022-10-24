const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// 按需导入-自动引入组件
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');

// 按需导入-自动引入icon
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
// 读取自定义svg文件
const { FileSystemIconLoader } = require('unplugin-icons/loaders');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      AutoImport({
        dts: true,
        imports: [
          'vue',
          'vue-router',
          {
            '/src/hooks': [
              'useMessage',
              'useConfirm',
              'useEcharts',
              'useFormValidate',
              'usePageContent'
            ]
          }
        ],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json'
        }
      }),
      Components({
        dts: false,
        resolvers: [
          IconsResolver({
            componentPrefix: 'icon',
            customCollections: ['sy']
          })
        ]
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          sy: FileSystemIconLoader('src/assets/svgs', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        }
      })
    ],
    devServer: {
      proxy: {
        '/baseUrl': {
          target: 'http://localhost:8080',
          pathRewrite: {
            '^/baseUrl': ''
          }
        }
      }
    }
  }
});
