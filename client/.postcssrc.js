// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
      require('autoprefixer')({
          browsers: ['last 5 versions']
      })
  ]
}