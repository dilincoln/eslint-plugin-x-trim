/**
 * @fileoverview Simplify and clean up tag attributes in your code effortlessly, making your HTML cleaner and more maintainable.
 * @author Diego Lincoln
 */
'use strict'

const insertParserOptions = require('../../utils/insertParserOptions')
const messageTemplate = require('../../utils/messageTemplate')

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../lib/rules/trimTagAttribute'),
	RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('trim-x-attribute', rule, {
	valid: insertParserOptions([
		{
			code: '<button class="foo">Submit</button>',
			filename: 'foo.html',
			options: [{ fileExtensions: ['.html'], tagAttributes: ['class'] }],
		},
		{
			code: '<button className="foo bar">Submit</button>',
			filename: 'bar.jsx',
		},
		{
			code: '<button className="foo bar baz">Submit</button>',
			filename: 'foo.tsx',
		},
		{
			code: '<button ngClass="foo bar baz">Submit</button>',
			filename: 'bar.html',
			options: [{ fileExtensions: ['.html'], tagAttributes: ['ngClass'] }],
		},
	]),
	invalid: insertParserOptions([
		{
			filename: 'foo.html',
			code: '<div class="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div class="foo"></div>',
			options: [{ fileExtensions: ['html'], tagAttributes: ['class'] }],
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
			options: [{ fileExtensions: ['html'], tagAttributes: ['class'] }],
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
			options: [{ fileExtensions: ['html'], tagAttributes: ['class'] }],
		},
		{
			filename: 'bar.jsx',
			code: '<div className="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div className="foo"></div>',
		},
		{
			filename: 'foo.tsx',
			code: '<div className="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div className="foo"></div>',
		},
		{
			filename: 'bar.html',
			code: '<div ngClass="foo "></div>',
			errors: [{ message: messageTemplate('foo ', 'foo'), type: 'JSXAttribute' }],
			output: '<div ngClass="foo"></div>',
			options: [{ fileExtensions: ['html'], tagAttributes: ['ngClass'] }],
		},
		{
			filename: 'foo.tsx',
			code: '<div className=" fixed  h-48 w-full items-end   justify-center bg-gradient-to-t  lg:bg-none"></div>',
			errors: [
				{
					message: messageTemplate(
						' fixed  h-48 w-full items-end   justify-center bg-gradient-to-t  lg:bg-none',
						'fixed h-48 w-full items-end justify-center bg-gradient-to-t lg:bg-none'
					),
					type: 'JSXAttribute',
				},
			],
			output:
				'<div className="fixed h-48 w-full items-end justify-center bg-gradient-to-t lg:bg-none"></div>',
		},
	]),
})
