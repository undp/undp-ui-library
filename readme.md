# UNDP design system for react ![npm](https://img.shields.io/npm/v/@undp/design-system-react)

## Getting Started

[UNDP design system for react](https://react.design.undp.org/) is the implementation of [UNDP design system](https://design.undp.org/) in React. Before starting, it is recommended to learn React first, and correctly install and configure Node.js v18 or above.

We also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript/TypeScript, and React.

**Note: The library uses react v19.2**

Detailed documentation can be found [here](https://react.design.undp.org/)

NPM Package can be found [here](https://www.npmjs.com/package/@undp/design-system-react)

### Installation

**Using npm**

```
npm i @undp/design-system-react
```

**Using yarn**

```
yarn add @undp/design-system-react
```

### Import

It is recommended to import what you need and the use it. For example, import the `Checkbox` like this:

```
import { Checkbox } from '@undp/design-system-react'
```

It is also recommended to import the css because some setting expect the CSS to be imported to look good. You can import the css file like this:

```
import '@undp/design-system-react/style.css';
```

### TypeScript

UNDP visualization library provides a built-in ts definition, you don't need to install any type definitions.

### Dependencies

This component library is built using:

- ShadCN UI — A beautifully designed component collection built with accessibility and composability in mind.
- Tailwind CSS — A utility-first CSS framework for rapidly building custom user interfaces.
- rc-slider — For slider component.
- react-select — For multi-select component.
- React (of course!) (Peer dependency)
