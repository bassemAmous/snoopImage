module.exports = {
    "extends": "airbnb",
    "env": {
        "node": true,
        "es6": true
    },
    "rules":{
        "one-var": 0,
        "one-var-declaration-per-line": ["error", "initializations"],
        "no-inner-declarations": 0,
        "curly": ["error", "multi-or-nest"],
        "no-await-in-loop": 0,
        "class-methods-use-this": 0,
        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": ["**/*test.js", "**/*spec.js", "**/tools/*.js" ] }
        ],
        "consistent-return": 0,
        "import/no-dynamic-require": 0,
        "object-curly-newline": ["error", { "consistent": true }],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }],
        "arrow-parens": ["error", "as-needed"],
        "function-paren-newline": ["error", "consistent"],
        "strict": 1,
        "no-extra-semi": 1,
        "no-console": 1,
        "padded-blocks":1,
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "prefer-destructuring": ["error", {
            "array": false,
            "object": false
        }, {
            "enforceForRenamedProperties": false
        }]
    },
    overrides: [{
        files: "**/*spec.js",
        rules: {
            "no-unused-expressions": "off"
        }
    }]
};