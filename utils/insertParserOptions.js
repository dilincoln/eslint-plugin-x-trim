const { parserOptions } = require('../config')

const insertParserOptions = (value) => {
	return value.map((v) => ({ ...v, parserOptions }))
}

module.exports = insertParserOptions
