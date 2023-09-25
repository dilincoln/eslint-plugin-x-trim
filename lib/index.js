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
module.exports = {
	rules: {
		'trim-x-attribute': plugin,
	},
	configs: {
		recommended: {
			plugins: ['trim-x-attribute'],
			rules: {
				'trim-x-attribute/trim-x-attribute': 2,
			},
		},
	},
}
