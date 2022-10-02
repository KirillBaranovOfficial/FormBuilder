# FormBuilder

## Introduction

> **FormBuilder** - easy way for creating custom forms

### Creating custom widget
1. Create file in `FormBuilder/Widgets` with widget name
2. Create interface with required and optional params
3. Open `FormBuilder/Config/config.ts` and add your widget in config
4. **(Optional)** if your widget require custom values/fields/context etc:
   1. Go to `FormBuilder/Blocks/FormField/FormField.vue`
   2. Edit `widgetProps` as u wish (For example you can add condition for specific widget type and pass special values)

### How to use?
1. Add `FormBuilder` component to your page
2. Create and pass `model` in `FormBuilder` 
3. Create and pass `schema` in `FormBuilder`
4. (**Optional**) if required - create and pass `extraModel` in `FormBuilder`

### Recommendations
- Keep all `schemas` in `schemas folder`

### Changelog

### Plans

## Project setup for contributors

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Install required packages
```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests without watching

```sh
yarn test:unit
```

### Run Hot-Reload Unit Tests

```sh
yarn test:unit-watch
```

### Get unit tests coverage

```sh
yarn test:unit-coverage
```

### Run eslint & fix problems

```sh
yarn lint:fix
```