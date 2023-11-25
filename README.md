# badger-icon

This module implements a React component for rendering SVG icons.

What makes this unique is that icon names can have modifiers to change the
orientation, size, position and style properties of the icon.  For example,
if you have an `arrow` icon defined, pointing up, then specifying the name
as `arrow-right` will rotate it through 90 degrees to point to the right.

Similarly, `arrow-thick` will increase the stroke width and `arrow-thin` will
reduce it.

See the [website](https://abw.github.io/badger-icon) for full documentation
and examples.

## Getting Started

Add the `@abw/badger-icon` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/badger-icon

## using yarn
$ yarn add @abw/badger-icon

## using pnpm
$ pnpm add @abw/badger-icon
```

You can then import the modules and start using them.

```jsx
import { Icon } from '@abw/badger-icon'

const YourComponent = () =>
  <Icon name="arrow-right"/>

export default YourComponent
```

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/badger-icon.git
$ cd badger-icon
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To run the tests.

```bash
$ pnpm test
```

To build for production.

```bash
$ pnpm build
```

To build just the library code for production.

```bash
$ pnpm build:lib
```

To build just the the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```

## Author

Andy Wardley