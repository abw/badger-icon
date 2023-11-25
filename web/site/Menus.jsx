export const GettingStartedMenu = {
  title:  'Getting Started',
  path: '/getting-started',
  items: [
    { to: '/getting-started/installation',     text: 'Installation' },
    { to: '/getting-started/basic-use',        text: 'Basic Use' },
    { to: '/getting-started/icons',            text: 'Default Icons' },
  ]
}

export const IconMenu = {
  title:  'Icon',
  path: '/icon',
  items: [
    {
      to: '/icon',
      text: 'Introduction',
      exact: true
    },
    {
      to: '/icon/name',
      code: 'name',
    },
    {
      to: '/icon/icons',
      code: 'icons',
    },
    {
      to: '/icon/className',
      code: 'className',
    },
    {
      to: '/icon/path',
      code: 'path',
    },
    {
      to: '/icon/size',
      code: 'size',
    },
    {
      to: '/icon/type',
      code: 'type',
    },
    {
      to: '/icon/style',
      code: 'style',
    },
    {
      to: '/icon/transform',
      code: 'transform',
    },
  ]
}


export const ModifiersMenu = {
  title:  'Modifiers',
  path: '/modifiers',
  items: [
    {
      to: '/modifiers',
      text: 'Introduction',
      exact: true
    },
    {
      to: '/modifiers/direction',
      text: 'Direction',
      tocName: 'direction',
    },
    {
      to: '/modifiers/rotate',
      text: 'Rotate',
      tocName: 'rotate',
    },
    {
      to: '/modifiers/flip',
      text: 'Flip',
      tocName: 'flip',
    },
    {
      to: '/modifiers/grow',
      text: 'Grow',
      tocName: 'grow',
    },
    {
      to: '/modifiers/shrink',
      text: 'Shrink',
      tocName: 'shrink',
    },
    {
      to: '/modifiers/weight',
      text: 'Weight',
      tocName: 'weight',
    },
    {
      to: '/modifiers/strokewidth',
      text: 'Stroke Width',
      tocName: 'strokewidth',
    }
  ]
}

export const PrimitivesMenu = {
  title:  'Primitives',
  path: '/primitives',
  items: [
    {
      to: '/primitives',
      text: 'Introduction',
      exact: true
    },
    {
      to: '/primitives/circle',
      code: 'circle',
    },
    {
      to: '/primitives/ellipse',
      code: 'ellipse',
    },
    {
      to: '/primitives/line',
      code: 'line',
    },
    {
      to: '/primitives/path',
      code: 'path',
    },
    {
      to: '/primitives/polygon',
      code: 'polygon',
    },
    {
      to: '/primitives/polyline',
      code: 'polyline',
    },
    {
      to: '/primitives/rect',
      code: 'rect',
    },
  ]
}

export const LibraryMenu = {
  title:  'Icon Library',
  path: '/library',
  items: [
    {
      to: '/library',
      text: 'Introduction',
      exact: true
    },
    {
      to: '/library/utilities',
      text: 'Utility Functions',
      exact: true
    },
    {
      to: '/library/data-format',
      text: 'Data Format',
      exact: true
    },
    {
      to: '/library/badger-icon-tools',
      text: 'Badger Icon Tools',
      exact: true
    },
    {
      to: '/library/integration',
      text: 'integration',
      exact: true
    },
  ]
}
