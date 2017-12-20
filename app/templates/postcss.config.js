module.exports = ctx => ({
  plugins: {
    'postcss-import': true,
    'postcss-cssnext': true,
    cssnano: ctx.env === 'production' ? {} : false
  }
});
