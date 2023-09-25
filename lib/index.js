/**
 * @fileoverview Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const plugin = require('./plugins/trimClassAttribute')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports.rules = {
	'eslint-trim-x-attribute': plugin,
}
module.exports.configs = {
	strict: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
}
