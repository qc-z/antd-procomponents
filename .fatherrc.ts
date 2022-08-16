import { defineConfig } from 'father'

export default defineConfig({
  esm: { input: 'src/client', output: 'es' },
  cjs: { input: 'src/server', output: 'lib' },
  umd: {
    entry: 'src/client',
    name: 'fatherDemo'
  }
  // prebundle: {
  //   // 只配置要预打包的依赖
  //   deps: ['rimraf']
  // }
})
