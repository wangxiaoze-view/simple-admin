const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const {
  transpileDependencies,
  publicPath,
  outputDir,
  lintOnSave,
  assetsDir,
  productionSourceMap,
  css,
  pwa,
  devServer,
  pluginOptions,
  cdn,
  productionGzipExtensions,
  isProcess,
} = require('./src/config/index');

module.exports = defineConfig({
  transpileDependencies,
  publicPath,
  outputDir,
  lintOnSave,
  assetsDir,
  productionSourceMap,
  css,
  // PWA 插件相关配置
  pwa,
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer,
  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  pluginOptions,

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'));
    config.optimization.runtimeChunk('single');

    if (isProcess) {
      config.plugin('html').tap((args) => {
        args[0].cdn = cdn;
        return args;
      });
    }

    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
    // 压缩代码
    config.optimization.minimize(true);
  },

  configureWebpack: (config) => {
    if (isProcess) {
      config.mode = 'production';

      config.externals = cdn.externals;

      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
          threshold: 10240,
          minRatio: 0.8,
        })
      );
      // 开启分离js
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `${packageName.replace('@', '')}`;
              },
            },
          },
        },
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_console: true, // console
                drop_debugger: false,
                pure_funcs: ['console.log'], // 移除console
              },
            },
          }),
        ],
      };
      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积
        maxAssetSize: 30000000,
        // 只给出 ts 文件的性能提示
        assetFilter(assetFilename) {
          return assetFilename.endsWith('.ts');
        },
      };
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';

      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `${packageName.replace('@', '')}`;
              },
            },
          },
        },
      };
    }

    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    );
  },
});
