module.exports = function (api) {

    api.cache(false);

    const presets = [
        ["@babel/preset-env", {
            // "useBuiltIns": "entry",
            // modules: false,
        }],
        "@babel/preset-react",
    ];

    const plugins = process.env.NODE_ENV === 'production' ? [
        '@babel/plugin-transform-react-remove-prop-types',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements'
    ] : [
        'react-hot-loader/babel',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-proposal-class-properties',
    ];

    return {
        presets,
        plugins
    };
}