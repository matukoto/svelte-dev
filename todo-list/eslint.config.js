import antfu from '@antfu/eslint-config';
import gitignore from 'eslint-config-flat-gitignore';

export default antfu(
	{
		formatters: true,

		/** general rules */
		rules: {
			'eqeqeq': ['error', 'always', { null: 'ignore' }],
			'no-unexpected-multiline': 'error',
			'no-unreachable': 'error',
		},

		stylistic: {
			indent: 'tab',
			quotes: 'single',
			semi: true,
		},
		typescript: true,
		yaml: true,
		markdown: true,

		svelte: {
			overrides: {
				'svelte/indent': [
					'error',
					{ indent: 'tab', alignAttributesVertically: true },
				],
				'svelte/html-self-closing': ['error', 'all'],
				'svelte/sort-attributes': 'error',
			},
		},
	},
	gitignore(),
);
