// trying out ideas for icons that can be composed from smaller parts
export const iconSets = {
  line: {
    arrow: '....',
    check: '....',
    square: '....',
  },
  fill: {
    home: '...'
  }
}
export const modifiers = {
  fill: {
    style: {
      fill: 'currentColor',
    }
  },
  thick: {
    style: {
      strokeWidth: 80
    }
  }
}
export const icons = {
  checkbox: {
    paths: [
      {
        d: iconSets.line.square,
        modify: 'fill'
      },
      {
        d: iconSets.line.check,
        transform: 'shrink:4',
        modify: 'thick'
      }
    ]
  }
}

export default icons