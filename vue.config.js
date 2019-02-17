const path = require('path');

const CoverageRules = process.env.NODE_ENV === 'coverage'
  ? [{
    test: /\.js|ts$/,
    exclude: /node_modules|tests|dist|config\.js|\.eslintrc\.js/,
    use: {
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
    },
  }]
  : [];

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        ...CoverageRules,
        {
          test: /\.obj$/,
          loader: 'obj2html/obj-loader',
          options: {
            classPrefix: 'vue-dice-component-dice',
            fontSize: 20,
            number: true,
            scale: 40,
          },
        },
      ],
    },
    // output: {
    //   libraryTarget: 'umd',
    // },
  },
  css: {
    extract: false,
  },
};
