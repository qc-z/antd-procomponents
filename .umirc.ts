import { defineConfig } from 'dumi'

export default defineConfig({
  // 网站描述配置
  mode: 'site',
  title: 'antd-procomponents Library',
  favicon: '/images/logo.svg',
  logo: '/images/logo.svg',
  description: '用于快速二次封装pro-components组件',
  // 打包路径配置
  base: '/',
  publicPath: '/', // 打包文件时，引入地址生成 mydocs/xxx.js
  outputPath: 'docs-dist',
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入
  // hash: true, //加hash配置，清除缓存
  manifest: {
    fileName: 'manifest.json'
  },
  mfsu: {},
  esbuild: {},
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true
  //     },
  //     'antd'
  //   ]
  // ],
  navs: [
    {
      title: '文档',
      path: '/react'
    },
    {
      title: '组件',
      path: '/components'
    },
    {
      title: '示例',
      path: '/template'
    },
    {
      title: '工具',
      path: '/tools'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/qc-z/antd-packages'
    }
  ],
  alias: {
    '@': '/src'
  },
  chainWebpack(config) {
    config.module
      .rule('media')
      .test(/\.(mp3|4)$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'))
    config.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false)
  }

  // more config: https://d.umijs.org/config
})
