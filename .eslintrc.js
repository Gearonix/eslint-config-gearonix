module.exports = {
    extends : [
        "google",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "eslint:recommended",
        "prettier"
    ],
    env: {
        "browser": true,
        "node": true,
        "jest": true
    },
    rules:  {
        "max-len": "off",
        "no-tabs": "off",
        "require-jsdoc": "off",
        "react-hooks/exhaustive-deps": "off",
        "new-cap": "off",
        "no-empty-function": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "semi": [
            "error",
            "never"
        ],
        "@typescript-eslint/no-empty-interface": "warn",
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "no-trailing-spaces": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "react/display-name": "off",
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // `react` first, `next` second, then packages starting with a character
                    ['^react$', '^next', '^[a-z]'],
                    // Packages starting with `@`
                    ['^@'],
                    // Packages starting with `~`
                    ['^~'],
                    // Imports starting with `../`
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Imports starting with `./`
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports
                    ['^.+\\.s?css$'],
                    // Side effect imports
                    ['^\\u0000']
                ]
            }
        ],
        "simple-import-sort/exports": "error"
    },
    plugins:  ["@typescript-eslint","react","react-hooks","simple-import-sort"],
    parser: "@typescript-eslint/parser"
}
