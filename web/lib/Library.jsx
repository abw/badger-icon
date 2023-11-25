// This is a clone of the main library used for examples in the web site
export const Library = {
  defaults: {
    width: 512,
    height: 512,
    type: 'line',
  },
  icons: {
  }
}

export function addIcon(name, data, library=Library) {
  library.icons[name] = data
}

export function addIcons(icons, library=Library) {
  Object.entries(icons).forEach(
    ([name, data]) => addIcon(name, data, library)
  )
}

export default Library