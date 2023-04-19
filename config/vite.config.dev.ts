import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      host: '0.0.0.0',    //解决“vite use `--host` to expose”
      port: 4200,
      open: true,
      fs: {
        strict: true,
      },
      // proxy: {
      //   '/api': {
      //     target: 'http://127.0.0.1:4131',
      //     ws: true,
      //     pathRewrite: {
      //       '^/api': '/'
      //     }
      //   },
      //   '/upload-files': {
      //     target: 'http://127.0.0.1:4131',
      //     ws: true,
      //     pathRewrite: {
      //       '^/upload-files': '/'
      //     }
      //   }
      // }
    },
    plugins: [],
  },
  baseConfig
);
