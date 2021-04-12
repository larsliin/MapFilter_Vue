module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-param-reassign': [2, { props: false }],
        'linebreak-style': 0,
        'no-nested-ternary': 'off',
        'import/no-cycle': 'off',
        'max-len': ['error', { code: 160, tabWidth: 4 }],
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        'operator-linebreak': ["error", "before"],
        "vue/no-multiple-template-root": "off"        
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
