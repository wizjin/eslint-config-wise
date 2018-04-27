module.exports = {
  "extends": "airbnb",
  "rules": {
    "spaced-comment": ["error", "always", { "line": { "exceptions": ["-", "/"] } }],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
    "no-constant-condition": [0],
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
