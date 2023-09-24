/**
 * @fileoverview Simplify and clean up class attributes in your code effortlessly, making your HTML cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

const insertParserOptions = require('../../utils/insertParserOptions')
const messageTemplate = require('../../utils/messageTemplate')

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../lib/plugins/trimClassAttribute'),
	RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('eslint-plugin-class-trim', rule, {
	valid: insertParserOptions([
		{
			code: '<button class="foo">Submit</button>',
			filename: 'foo.html',
		},
		{
			code: '<button className="foo bar">Submit</button>',
			filename: 'bar.jsx',
			options: [{ fileExtensions: ['.jsx'], classAttributes: ['className'] }],
		},
		{
			code: '<button className="foo bar baz">Submit</button>',
			filename: 'foo.tsx',
			options: [{ fileExtensions: ['.tsx'], classAttributes: ['className'] }],
		},
		{
			code: '<button ngClass="foo bar baz">Submit</button>',
			filename: 'bar.html',
			options: [{ classAttributes: ['ngClass'] }],
		},
	]),
	invalid: insertParserOptions([
		{
			filename: 'foo.html',
			code: '<div class="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div class="foo"></div>',
		},
		{
			code: '<div class=" foo "></div>',
			errors: [
				{
					message: messageTemplate(' foo ', 'foo'),
					type: 'JSXAttribute',
				},
			],
			filename: 'bar.html',
			output: '<div class="foo"></div>',
		},
		{
			code: '<div class=" foo bar "></div>',
			errors: [
				{
					message: messageTemplate(' foo bar ', 'foo bar'),
					type: 'JSXAttribute',
				},
			],
			filename: 'foo.html',
			output: '<div class="foo bar"></div>',
		},
		{
			filename: 'bar.jsx',
			code: '<div className="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div className="foo"></div>',
			options: [{ fileExtensions: ['jsx'], classAttributes: ['className'] }],
		},
		{
			filename: 'foo.tsx',
			code: '<div className="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div className="foo"></div>',
			options: [{ fileExtensions: ['tsx'], classAttributes: ['className'] }],
		},
		{
			filename: 'bar.html',
			code: '<div ngClass="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div ngClass="foo"></div>',
			options: [{ fileExtensions: ['html'], classAttributes: ['ngClass'] }],
		},
	]),
})
