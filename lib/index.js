/**
 * @fileoverview Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports.rules = requireIndex(__dirname + '/plugins')
module.exports.configs = {
	strict: {
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
}
