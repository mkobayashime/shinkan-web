module.exports = {
  parserOptions: {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "react/prop-types": "off",
    "eqeqeq": "error",
    "no-console": "warn",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "lf",
        "semi": false,
        "singleQuote": false,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ]
  }
}
