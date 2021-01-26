const presets = [
  [
    '@babel/preset-env',
    {
      modules: false
    }
  ],
  ['@babel/preset-react'],
]
const plugins = [
  [
    'styled-jsx/babel',
  ],
]

module.exports = {
  presets,
  plugins,
}
