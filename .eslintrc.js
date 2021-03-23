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
        'indent': ['error', 2],
        
        'no-param-reassign': [2, {
            props: false
        }],
        'linebreak-style': 0,
        'no-nested-ternary': 'off',
        'import/no-cycle': 'off',
        'max-len': ['error', {
            code: 160,
            tabWidth: 2
        }],
        'no-plusplus': [2, {
            allowForLoopAfterthoughts: true
        }],
        'operator-linebreak': ["error", "before"]
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
