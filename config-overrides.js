// module.exports = function override (config, env) {
//     console.log('override')
//     let loaders = config.resolve
//     loaders.fallback = {
//         // "fs": false,
//         // "tls": false,
//         // "net": false,
//         // "http": require.resolve("stream-http"),
//         // "https": false,
//         // "zlib": require.resolve("browserify-zlib") ,
//         // "path": require.resolve("path-browserify"),
//         // "stream": require.resolve("stream-browserify"),
//         // "util": require.resolve("util/"),
//         // "crypto": require.resolve("crypto-browserify")
//     }
    
//     return config
// }

// const webpack = require('webpack');

// module.exports = function override(config, env) {

//     config.resolve.fallback = {

//         url: require.resolve('url'),

//         fs: require.resolve('fs'),

//         assert: require.resolve('assert'),

//         crypto: require.resolve('crypto-browserify'),

//         http: require.resolve('stream-http'),

//         https: require.resolve('https-browserify'),

//         os: require.resolve('os-browserify/browser'),

//         buffer: require.resolve('buffer'),

//         stream: require.resolve('stream-browserify'),

//     };

//     config.plugins.push(

//         new webpack.ProvidePlugin({

//             process: 'process/browser',

//             Buffer: ['buffer', 'Buffer'],

//         }),

//     );
//     return config;
// }
