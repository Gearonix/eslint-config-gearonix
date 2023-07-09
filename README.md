# ESLint (and Prettier) config

[![npm version](https://badge.fury.io/js/eslint-config-gearonix.svg)](https://badge.fury.io/js/eslint-config-gearonix)
 ![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) 
 [![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/leonardofaria/leozera-ui/blob/master/LICENSE) 


These are settings for ESLint and Prettier used by me.

## Installing

1. In your project folder, run:

```
npm i -D eslint-config-gearonix
```
You will also have to install peer dependencies.


2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'gearonix'
  ]
}
```
