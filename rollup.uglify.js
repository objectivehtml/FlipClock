import { each } from 'lodash';
import config from './rollup.config';
import uglify from 'rollup-plugin-uglify-es';

const plugin = uglify({
    keep_fnames: true
});

each(config, (config, i) => {
    config.output.file = config.output.file.replace(/\.js$/, '.min.js');
    config.plugins.push(plugin);
});

export default config;
