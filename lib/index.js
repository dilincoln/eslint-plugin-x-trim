/**
 * @fileoverview Simplify and clean up tag attributes in your code effortlessly, making your HTML tags cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

const { defaultConfig } = require('../config')
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const plugin = require('./rules/trimTagAttribute')

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
				'trim-x-attribute/trim-x-attribute': [
					'warn',
					{
						tagAttributes: defaultConfig.tagAttributes,
						fileExtensions: defaultConfig.fileExtensions,
					},
				],
			},
		},
	},
}
