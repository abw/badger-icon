// This is a clone of the main IconData used for examples in the web site
export const IconData = {
  defaults: {
    width: 512,
    height: 512,
    type: 'line',
  },
  icons: {
  }
}

export function addIcon(name, data, iconData=IconData) {
  iconData.icons[name] = data
}

export function addIcons(icons, iconData=IconData) {
  Object.entries(icons).forEach(
    ([name, data]) => addIcon(name, data, iconData)
  )
}

export default IconData