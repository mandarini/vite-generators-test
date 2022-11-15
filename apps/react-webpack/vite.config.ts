import { mergeConfig } from 'vite';
import baseConfig from '../../vite.config';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';

export default mergeConfig(baseConfig, {
  plugins: [
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
});
