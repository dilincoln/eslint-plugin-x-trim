# eslint-plugin-class-trim

Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more
maintainable.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-class-trim`:

```sh
npm i eslint-plugin-class-trim --save-dev
```

## Usage

Add `class-trim` to the plugins section of your `.eslintrc` configuration file. You can omit the
`eslint-plugin-` prefix:

```json
{
	"plugins": ["class-trim"]
}
```

## Configuration

Config example:

```js
  "eslint-plugin-class-trim": ["error", {
    "classAttributes": ["className", "ngClass"], // default: ["class"]
    "fileExtensions": ["html", "vue"] // default: ["html"]
  }]
```
