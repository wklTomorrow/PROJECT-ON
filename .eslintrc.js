// module.exports = { 
//     parserOptions: {
//         ecmaFeatures: {
//             legacyDecorators: true
//         }
//     }
// }
module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module'
    },
    parser: "vue-eslint-parser",
    
    // parser: "babel-eslint",
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    rules: {
      'no-console': 'off',
    },
    // parserOptions: {
    //     ecmaFeatures: {
    //         legacyDecorators: true
    //     }
    // }
}