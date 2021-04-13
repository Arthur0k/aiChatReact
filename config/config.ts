import { defineConfig } from 'umi';
import routes from './routes';
import px2rem from 'postcss-plugin-px2rem';

export default defineConfig({
  // base: '',
  // publicPath: '/static/',
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
  },
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 16,
    })
  ],
});
