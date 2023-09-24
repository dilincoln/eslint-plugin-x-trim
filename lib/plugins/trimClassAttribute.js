/**
 * @fileoverview Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

const messageTemplate = require('../../utils/messageTemplate')

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more maintainable.',
			recommended: false,
			url: 'https://github.com/dilincoln/eslint-plugin-class-trim/blob/main/docs/rules/eslint-plugin-class-trim.md',
		},
		messages: {
			trimClassAttribute: messageTemplate('{{value}}', '{{trimmedValue}}'),
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					classAttributes: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
					fileExtensions: {
						type: 'array',
						items: {
							type: 'string',
						},
					},
				},
			},
		],
	},
	create(context) {
		const options = context.options[0] || {}
		const classAttributes = options.classAttributes || ['class']
		const fileExtensions = options.fileExtensions || ['html']
		const fileExtension = context.filename.split('.').pop()

		if (!fileExtensions.includes(fileExtension)) {
			return {}
		}

		return {
			JSXAttribute(node) {
				if (!classAttributes.includes(node.name.name)) {
					return
				}

				const value = node.value.value
				const trimmedValue = value.trim()

				if (value === trimmedValue) {
					return
				}

				context.report({
					node,
					messageId: `trimClassAttribute`,
					data: {
						value,
						trimmedValue,
					},
					fix: (fixer) => {
						return fixer.replaceText(node.value, `"${trimmedValue}"`)
					},
				})
			},
		}
	},
}
