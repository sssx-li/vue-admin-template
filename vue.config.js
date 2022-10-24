const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// 按需导入-自动引入组件
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers');

// 按需导入-自动引入icon
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
// 读取自定义svg文件
const { FileSystemIconLoader } = require('unplugin-icons/loaders');

const DefineOptions = require('unplugin-vue-define-options/webpack');

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
        dts: false,
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
        resolvers: [AntDesignVueResolver()],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json'
        }
      }),
      Components({
        dts: false,
        resolvers: [
          IconsResolver({
            componentPrefix: 'icon',
            customCollections: ['sy']
          }),
          AntDesignVueResolver()
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
      }),
      DefineOptions()
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
