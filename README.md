# eslint-plugin-trim-x-attribute

Simplify and clean up tag attributes in your code effortlessly, making your HTML tags cleaner and
more maintainable.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-trim-x-attribute`:

```sh
npm i eslint-plugin-trim-x-attribute --save-dev
```

## Usage

Add `trim-x-attribute` to the plugins section of your `.eslintrc` configuration file. You can omit
the `eslint-plugin-` prefix:

```json
{
	"plugins": ["trim-x-attribute"]
}
```

## Configuration

Config example:

```js
	"rules": {
		"trim-x-attribute/trim-x-attribute": [
			"warn",
			{
				"tagAttributes": ["ngClass"], // default ["class", "className"]
				"fileExtensions": ["html"] // default ["html" ,"jsx" , "tsx"]
			}
		]
	},
```
