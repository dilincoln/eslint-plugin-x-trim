/**
 * @fileoverview Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const plugin = require('./rules/trimClassAttribute')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
	rules: {
		'trim-x-attribute': plugin,
	},
	configs: {
		recommended: {
			plugins: ['trim-x-attribute'],
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			rules: {
				'trim-x-attribute/trim-x-attribute': 'warn',
			},
		},
	},
}
