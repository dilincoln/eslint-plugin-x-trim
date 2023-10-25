/**
 * @fileoverview Simplify and clean up tag attributes in your code effortlessly, making your HTML tags cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

const { defaultConfig } = require('../../config')
const trim = require('../../functions/trim')
const messageTemplate = require('../../utils/messageTemplate')

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Simplify and clean up tag attributes in your code effortlessly, making your HTML tags cleaner and more maintainable.',
			recommended: false,
			url: 'https://github.com/dilincoln/eslint-plugin-x-trim/blob/main/README.md',
		},
		messages: {
			trimTagAttribute: messageTemplate('{{tagName}}', '{{trimmedValue}}'),
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					tagAttributes: {
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
		const tagAttributes = options.tagAttributes || defaultConfig.tagAttributes
		const fileExtensions = options.fileExtensions || defaultConfig.fileExtensions
		const fileExtension = context.filename.split('.').pop()

		if (!fileExtensions.includes(fileExtension)) {
			return {}
		}

		return {
			JSXAttribute(node) {
				if (!tagAttributes.includes(node.name.name)) {
					return
				}

				const value = node.value.value

				if (!value) {
					return
				}

				const tagName = node.value.parent.name.name
				const trimmedValue = trim(value)

				if (value === trimmedValue) {
					return
				}

				context.report({
					node,
					messageId: `trimTagAttribute`,
					data: {
						tagName,
						trimmedValue,
					},
					fix: (fixer) => {
						return fixer.replaceText(node.value, `"${trimmedValue}"`)
					},
				})
			},
			JSXOpeningElement(node) {
				if (!tagAttributes.includes(node.name)) {
					return
				}

				const value = node.value

				if (!value) {
					return
				}

				const tagName = node.value.parent.name.name
				const trimmedValue = trim(value)

				if (value === trimmedValue) {
					return
				}

				context.report({
					node,
					messageId: `trimTagAttribute`,
					data: {
						tagName,
						trimmedValue,
					},
					fix: (fixer) => {
						return fixer.replaceText(node, `"${trimmedValue}"`)
					},
				})
			},
		}
	},
}
