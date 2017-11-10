// https://github.com/djds23/regularly-react/blob/master/config/babel.dev.js

module.exports =
{
    babelrc: false,
    cacheDirectory: true,
    presets:
    [
        'babel-preset-env',
        'babel-preset-es2015',
        'babel-preset-es2016',
        'babel-preset-react'
    ].map(require.resolve),
    plugins:
    [
        'react-hot-loader/babel',
        'babel-plugin-syntax-trailing-function-commas',
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-object-rest-spread',
        'babel-plugin-transform-async-generator-functions'
    ].map(require.resolve).concat(
    [
        [ require.resolve('babel-plugin-transform-runtime'),
        {
            helpers: false,
            polyfill: false,
            regenerator: true
        }]
    ])
};
  