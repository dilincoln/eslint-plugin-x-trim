const parserOptions = {
	ecmaFeatures: {
		jsx: true,
	},
}

const defaultConfig = {
	tagAttributes: ['class', 'className'],
	fileExtensions: ['html', 'jsx', 'tsx'],
}

module.exports = {
	parserOptions,
	defaultConfig,
}
