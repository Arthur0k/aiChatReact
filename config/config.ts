import { defineConfig } from 'umi';
import routes from './routes';
import px2rem from 'postcss-plugin-px2rem';

export default defineConfig({
  // base: '',
  // publicPath: '/static/',
  title: 'hi',
  hash: true,
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  alias: {
    // components: '@/components'
    utils: '@/common/utils',
    context: '@/common/utils/context'
  },
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 16,
    })
  ],
  dva: {
    hmr: true,
  },
  antd: {
    compact: true
  }
});
