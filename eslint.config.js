import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import nextjsPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import * as espree from 'espree';
import prettierConfig from './prettier.config.js';

const PROJECT_PATTERNS = ['./tsconfig.json'];

const reactPatterns = {
  files: ['**/*.{jsx,tsx}'],
};

const allGlobals = {
  ...globals.browser,
  ...globals.node,
  ...globals.es2021,
};

// TODO: clean up when bug is fixed
delete allGlobals['AudioWorkletGlobalScope '];

const configs = [
  {
    ignores: [
      '**/node_modules',
      '**/.cache',
      '**/*.cache',
      '**/build',
      '**/dist',
      '**/locales',
      '**/.next',
      '**/workbox-*.js',
      '**/sw.js',
      'pnpm-lock.yaml',
      '**/$path.ts',
      // TODO
      '**/cypress/**',
      '**/*.test.ts',
      '**/__tests__/**',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: allGlobals,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          globalReturn: false,
        },
      },
      sourceType: 'module',
    },
    settings: {
      // https://github.com/import-js/eslint-plugin-import#importcache
      'import/cache': {
        lifetime: '∞',
      },
      // https://github.com/import-js/eslint-plugin-import#importextensions
      'import/extensions': [
        '.mjs',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.d.ts',
        '.json',
        '.css',
        '.svg',
      ],
      // https://github.com/import-js/eslint-plugin-import#importparsers
      'import/parsers': {
        '@typescript-eslint/parser': [
          '.ts',
          '.cts',
          '.mts',
          '.tsx',
        ],
        espree: [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx',
        ],
      },
      // https://github.com/import-js/eslint-plugin-import#resolvers
      'import/resolver': {
        typescript: {
          project: PROJECT_PATTERNS,
        },
        node: true,
      },
      next: {
        rootDir: '.',
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'constructor-super': 'error',
      'default-case': 'warn',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-async-promise-executor': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-new-symbol': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-self-assign': 'error',
      'no-setter-return': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-labels': 'error',
      'no-useless-backreference': 'error',
      'no-useless-catch': 'error',
      'no-useless-escape': 'error',
      'no-with': 'error',
      'require-yield': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: espree,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      parser: espree,
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          globalReturn: false,
        },
        tsconfigRootDir: '.',
        project: './tsconfig.json',
      },
    },
    plugins: {
      ts: tsPlugin,
      import: importPlugin,
    },
    rules: {
      'constructor-super': 'off', // ts(2335) & ts(2377)
      'getter-return': 'off', // ts(2378)
      'no-const-assign': 'off', // ts(2588)
      'no-dupe-args': 'off', // ts(2300)
      'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
      'no-dupe-keys': 'off', // ts(1117)
      'no-func-assign': 'off', // ts(2539)
      'no-import-assign': 'off', // ts(2539) & ts(2540)
      'no-new-symbol': 'off', // ts(7009)
      'no-obj-calls': 'off', // ts(2349)
      'no-redeclare': 'off', // ts(2451)
      'no-setter-return': 'off', // ts(2408)
      'no-this-before-super': 'off', // ts(2376)
      'no-undef': 'off', // ts(2304)
      'no-unreachable': 'off', // ts(7027)
      'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
      'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
      'prefer-const': 'error', // ts provides better types with const
      'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
      'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      'valid-typeof': 'off', // ts(2367)
      'ts/adjacent-overload-signatures': 'error',
      'ts/ban-types': 'error',
      'no-array-constructor': 'off',
      'ts/no-array-constructor': 'error',
      'no-empty-function': 'off',
      'ts/no-empty-function': ['error', { allow: ['private-constructors'] }],
      'ts/no-empty-interface': 'error',
      'ts/no-explicit-any': 'warn',
      // 'ts/no-explicit-any': ['error', { ignoreRestArgs: false }],
      'ts/no-extra-non-null-assertion': 'error',
      'no-extra-semi': 'off',
      'ts/no-extra-semi': 'error',
      'ts/no-inferrable-types': 'error',
      'no-loss-of-precision': 'off',
      'ts/no-loss-of-precision': 'error',
      'ts/no-misused-new': 'error',
      'ts/no-namespace': 'error',
      'ts/no-non-null-asserted-optional-chain': 'error',
      'ts/no-non-null-assertion': 'warn',
      'ts/no-this-alias': 'error',
      'ts/no-unnecessary-type-constraint': 'error',
      'no-unused-vars': 'off',
      'ts/no-var-requires': 'error',
      'ts/prefer-as-const': 'error',
      'ts/prefer-namespace-keyword': 'error',
      'ts/triple-slash-reference': 'error',
      'ts/ban-tslint-comment': ['error'],
      'ts/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          minimumDescriptionLength: 10,
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-check': false,
        },
      ],
      // Delegate to eslint-plugin-unused-imports:
      // "ts/no-unused-vars": [
      //   "error",
      //   { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      // ],
      'ts/consistent-type-exports': 'error',
      'ts/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      'ts/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['function'],
          format: ['camelCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'objectLiteralProperty',
          format: [
            'camelCase',
            // Some external libraries use snake_case for params
            'snake_case',
            // Env variables are generally uppercase
            'UPPER_CASE',
            // DB / Graphql might use PascalCase for relationships
            'PascalCase',
          ],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: ['typeAlias', 'interface'],
          format: ['PascalCase'],
        },
        {
          selector: ['typeProperty'],
          format: ['camelCase'],
          // For graphql __typename
          leadingUnderscore: 'allowDouble',
        },
        {
          selector: ['typeParameter'],
          format: ['PascalCase'],
        },
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['-', '+'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        },
      ],
      'linebreak-style': ['error', 'unix'],
      // TypeScript compilation already ensures that imports are resolvable.
      'import/no-unresolved': 'off',
      'import/named': 'off',
    },
  },
  {
    plugins: {
      import: importPlugin,
      // tsImportResolverPlugin,
      unused: unusedImportsPlugin,
    },
    rules: {
      'unused/no-unused-imports': 'error',
      'unused/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      // 'import/namespace': 'error', // TODO: enable after it works with flat config
      // 'import/default': 'error', // TODO: enable after it works with flat config
      'import/export': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-duplicates': ['error', { considerQueryString: true }],
      'import/order': [
        'error',
        {
          // TODO: editor integration
          // groups: [
          //   'builtin',
          //   'external',
          //   'internal',
          //   'parent',
          //   'sibling',
          //   'index',
          //   'object',
          // ],
          // alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: reactPatterns.files,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      ts: tsPlugin,
      import: importPlugin,
    },
    rules: {
      'react/display-name': 2,
      'react/jsx-key': 2,
      'react/jsx-no-comment-textnodes': 2,
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-target-blank': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/no-children-prop': 2,
      'react/no-danger-with-children': 2,
      'react/no-deprecated': 2,
      'react/no-direct-mutation-state': 2,
      'react/no-find-dom-node': 2,
      'react/no-is-mounted': 2,
      'react/no-render-return-value': 2,
      'react/no-string-refs': 2,
      'react/no-unescaped-entities': 2,
      'react/no-unsafe': 0,
      'react/require-render-return': 2,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/anchor-ambiguous-text': 'off', // TODO: error
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/autocomplete-valid': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/control-has-associated-label': [
        'off',
        {
          ignoreElements: [
            'audio',
            'canvas',
            'embed',
            'input',
            'textarea',
            'tr',
            'video',
          ],
          ignoreRoles: [
            'grid',
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'row',
            'tablist',
            'toolbar',
            'tree',
            'treegrid',
          ],
          includeRoles: ['alert', 'dialog'],
        },
      ],
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': [
        'error',
        {
          tabbable: [
            'button',
            'checkbox',
            'link',
            'searchbox',
            'spinbutton',
            'switch',
            'textbox',
          ],
        },
      ],
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/media-has-caption': 'error',
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-interactive-element-to-noninteractive-role': [
        'error',
        {
          tr: ['none', 'presentation'],
          canvas: ['img'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-interactions': [
        'error',
        {
          handlers: [
            'onClick',
            'onError',
            'onLoad',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
          ],
          alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
          body: ['onError', 'onLoad'],
          dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
          iframe: ['onError', 'onLoad'],
          img: ['onError', 'onLoad'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        'error',
        {
          ul: [
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'tablist',
            'tree',
            'treegrid',
          ],
          ol: [
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'tablist',
            'tree',
            'treegrid',
          ],
          li: [
            'menuitem',
            'option',
            'row',
            'tab',
            'treeitem',
          ],
          table: ['grid'],
          td: ['gridcell'],
          fieldset: ['radiogroup', 'presentation'],
        },
      ],
      'jsx-a11y/no-noninteractive-tabindex': [
        'error',
        {
          tags: [],
          roles: ['tabpanel'],
          allowExpressionValues: true,
        },
      ],
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/no-static-element-interactions': [
        'error',
        {
          allowExpressionValues: true,
          handlers: [
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
          ],
        },
      ],
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',
      'import/no-anonymous-default-export': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      // Fine-tune naming convention react typescript jsx (function components)
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
      'ts/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        {
          selector: ['function'],
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
    },
  },
  // next
  {
    files: ['apps/**/*.{js,jsx,ts,tsx}', 'packages/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'next/google-font-display': 'warn',
      'next/google-font-preconnect': 'warn',
      'next/next-script-for-ga': 'warn',
      'next/no-before-interactive-script-outside-document': 'warn',
      'next/no-css-tags': 'warn',
      'next/no-head-element': 'warn',
      // https://nextjs.org/docs/messages/no-html-link-for-pages#pagesdir
      // 'next/no-html-link-for-pages': ['error', 'apps/*/pages/'],
      // 'next/no-html-link-for-pages': 'error', // TODO: fix for flat config
      'next/no-img-element': 'warn',
      'next/no-page-custom-font': 'warn',
      'next/no-styled-jsx-in-document': 'warn',
      'next/no-sync-scripts': 'warn',
      'next/no-title-in-document-head': 'warn',
      'next/no-typos': 'warn',
      'next/no-unwanted-polyfillio': 'warn',
      'next/inline-script-id': 'error',
      'next/no-assign-module-variable': 'error',
      'next/no-document-import-in-page': 'error',
      'next/no-duplicate-head': 'error',
      'next/no-head-import-in-document': 'error',
      'next/no-script-component-in-head': 'error',
    },
    plugins: { next: nextjsPlugin },
    settings: { next: { rootDir: 'apps/*/' } },
  },
  // prettier
  {
    rules: {
      curly: 0,
      'lines-around-comment': 0,
      'max-len': 0,
      'no-confusing-arrow': 0,
      'no-mixed-operators': 0,
      'no-tabs': 0,
      'no-unexpected-multiline': 0,
      quotes: 0,
      '@typescript-eslint/quotes': 0,
      'babel/quotes': 0,
      'vue/html-self-closing': 0,
      'vue/max-len': 0,
      'array-bracket-newline': 'off',
      'array-bracket-spacing': 'off',
      'array-element-newline': 'off',
      'arrow-parens': 'off',
      'arrow-spacing': 'off',
      'block-spacing': 'off',
      'brace-style': 'off',
      'comma-dangle': 'off',
      'comma-spacing': 'off',
      'comma-style': 'off',
      'computed-property-spacing': 'off',
      'dot-location': 'off',
      'eol-last': 'off',
      'func-call-spacing': 'off',
      'function-call-argument-newline': 'off',
      'function-paren-newline': 'off',
      'generator-star': 'off',
      'generator-star-spacing': 'off',
      'implicit-arrow-linebreak': 'off',
      indent: 'off',
      'jsx-quotes': 'off',
      'key-spacing': 'off',
      'keyword-spacing': 'off',
      'linebreak-style': 'off',
      'multiline-ternary': 'off',
      'newline-per-chained-call': 'off',
      'new-parens': 'off',
      'no-arrow-condition': 'off',
      'no-comma-dangle': 'off',
      'no-extra-parens': 'off',
      'no-extra-semi': 'off',
      'no-floating-decimal': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-multi-spaces': 'off',
      'no-multiple-empty-lines': 'off',
      'no-reserved-keys': 'off',
      'no-space-before-semi': 'off',
      'no-trailing-spaces': 'off',
      'no-whitespace-before-property': 'off',
      'no-wrap-func': 'off',
      'nonblock-statement-body-position': 'off',
      'object-curly-newline': 'off',
      'object-curly-spacing': 'off',
      'object-property-newline': 'off',
      'one-var-declaration-per-line': 'off',
      'operator-linebreak': 'off',
      'padded-blocks': 'off',
      'quote-props': 'off',
      'rest-spread-spacing': 'off',
      semi: 'off',
      'semi-spacing': 'off',
      'semi-style': 'off',
      'space-after-function-name': 'off',
      'space-after-keywords': 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-before-function-parentheses': 'off',
      'space-before-keywords': 'off',
      'space-in-brackets': 'off',
      'space-in-parens': 'off',
      'space-infix-ops': 'off',
      'space-return-throw-case': 'off',
      'space-unary-ops': 'off',
      'space-unary-word-ops': 'off',
      'switch-colon-spacing': 'off',
      'template-curly-spacing': 'off',
      'template-tag-spacing': 'off',
      'unicode-bom': 'off',
      'wrap-iife': 'off',
      'wrap-regex': 'off',
      'yield-star-spacing': 'off',
      '@babel/object-curly-spacing': 'off',
      '@babel/semi': 'off',
      '@typescript-eslint/brace-style': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/comma-spacing': 'off',
      '@typescript-eslint/func-call-spacing': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/keyword-spacing': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/object-curly-spacing': 'off',
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/space-before-blocks': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/space-infix-ops': 'off',
      '@typescript-eslint/type-annotation-spacing': 'off',
      'babel/object-curly-spacing': 'off',
      'babel/semi': 'off',
      'flowtype/boolean-style': 'off',
      'flowtype/delimiter-dangle': 'off',
      'flowtype/generic-spacing': 'off',
      'flowtype/object-type-curly-spacing': 'off',
      'flowtype/object-type-delimiter': 'off',
      'flowtype/quotes': 'off',
      'flowtype/semi': 'off',
      'flowtype/space-after-type-colon': 'off',
      'flowtype/space-before-generic-bracket': 'off',
      'flowtype/space-before-type-colon': 'off',
      'flowtype/union-intersection-spacing': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/jsx-wrap-multilines': 'off',
      'standard/array-bracket-even-spacing': 'off',
      'standard/computed-property-even-spacing': 'off',
      'standard/object-curly-even-spacing': 'off',
      'unicorn/empty-brace-spaces': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/number-literal-case': 'off',
      'vue/array-bracket-newline': 'off',
      'vue/array-bracket-spacing': 'off',
      'vue/arrow-spacing': 'off',
      'vue/block-spacing': 'off',
      'vue/block-tag-newline': 'off',
      'vue/brace-style': 'off',
      'vue/comma-dangle': 'off',
      'vue/comma-spacing': 'off',
      'vue/comma-style': 'off',
      'vue/dot-location': 'off',
      'vue/func-call-spacing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/html-end-tags': 'off',
      'vue/html-indent': 'off',
      'vue/html-quotes': 'off',
      'vue/key-spacing': 'off',
      'vue/keyword-spacing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/multiline-ternary': 'off',
      'vue/mustache-interpolation-spacing': 'off',
      'vue/no-extra-parens': 'off',
      'vue/no-multi-spaces': 'off',
      'vue/no-spaces-around-equal-signs-in-attribute': 'off',
      'vue/object-curly-newline': 'off',
      'vue/object-curly-spacing': 'off',
      'vue/object-property-newline': 'off',
      'vue/operator-linebreak': 'off',
      'vue/quote-props': 'off',
      'vue/script-indent': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/space-in-parens': 'off',
      'vue/space-infix-ops': 'off',
      'vue/space-unary-ops': 'off',
      'vue/template-curly-spacing': 'off',
      'indent-legacy': 'off',
      'no-spaced-func': 'off',
      'react/jsx-space-before-closing': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'prettier/prettier': ['error', prettierConfig],
    },
    plugins: { prettier: prettierPlugin },
  },
];

export default configs;
