module.exports = {
  ident: 'postcss',
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      browserslist: [
        '> 0.5%',
        'last 2 versions',
        'Firefox ESR',
        'not dead',
        'IE 11',
        'not IE 10'
      ]
    })
  ]
};
