const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, 'src/scss/_settings.scss')],
          },
        },
      },
    ],
  });

  return config;
};
