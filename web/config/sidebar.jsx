export const GettingStartedMenu = {
  title:  'Getting Started',
  revealable: true,
  openPath: '/getting-started',
  menu: [
    { to: '/getting-started/installation',     text: 'Installation' },
    { to: '/getting-started/basic-use',        text: 'Basic Use' },
    { to: '/getting-started/icons',            text: 'Default Icons' },
    { to: '/getting-started/compound',         text: 'Compounds Icons' },
  ]
}

export const IconMenu = {
  title:  'Icon',
  revealable: true,
  openPath: '/icon',
  menu: [
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
      to: '/icon/library',
      code: 'library',
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
  revealable: true,
  openPath: '/modifiers',
  menu: [
    {
      to: '/modifiers',
      text: 'Introduction',
      exact: true
    },
    {
      to: '/modifiers/orientation',
      text: 'Orientation',
      tocName: 'orientation',
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
      to: '/modifiers/move',
      text: 'Move',
      tocName: 'move',
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
    },
    {
      to: '/modifiers/colors',
      text: 'Stroke and Fill Colors',
      tocName: 'colors',
    }
  ]
}

export const PrimitivesMenu = {
  title:  'Primitives',
  revealable: true,
  openPath: '/primitives',
  menu: [
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
  revealable: true,
  openPath: '/library',
  menu: [
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
      text: 'Integration',
      exact: true
    },
  ]
}

export const TestingMenu = {
  title:  'Testing',
  revealable: true,
  openPath: '/testing',
  menu: [
    {
      to: '/testing/errors',
      text: 'Error handling',
      exact: true
    },
    {
      to: '/testing/alignment',
      text: 'Alignment',
      exact: true
    },
    {
      to: '/testing/scale',
      text: 'Scaling',
      exact: true
    },
  ]
}

export const sidebar = {
  sections: [
    GettingStartedMenu,
    IconMenu,
    ModifiersMenu,
    PrimitivesMenu,
    LibraryMenu,
    ...(
      import.meta.env.DEV
        ? [ TestingMenu ]
        : [ ]
    )
  ]
}

export default sidebar