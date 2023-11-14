export const GettingStartedMenu = {
  title:  'Getting Started',
  path: '/getting-started',
  items: [
    { to: '/getting-started/installation',     text: 'Installation' },
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
