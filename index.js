module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "spaced-comment": ["error", "always", { "line": { "exceptions": ["-", "/"] } }],
    "generator-star-spacing": ["error", {"before": true, "after": false}],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
    "no-param-reassign": ["error", { "props": false }],
    "no-constant-condition": [0],
    "object-curly-newline": [0],
    "no-restricted-syntax": [0],
    "import/no-unresolved": [0],
    "import/extensions": [0],
    "global-require": [0],
    "comma-dangle": ["error", {
        "functions": "never",
        "imports": "only-multiline",
        "arrays": "only-multiline",
        "objects": "only-multiline"
      }],
    "jsx-a11y/href-no-hash": [0]
  },
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
}
