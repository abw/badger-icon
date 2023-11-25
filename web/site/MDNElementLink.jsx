import React from 'react'

const MDNElementLink = ({element}) =>
  <p>
    See <a href={`https://developer.mozilla.org/en-US/docs/Web/SVG/Element/${element}`}>https://developer.mozilla.org/en-US/docs/Web/SVG/Element/{element}</a>{' '}
    for details of the supported attributes.
  </p>

export default MDNElementLink