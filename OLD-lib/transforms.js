export const transforms = {
  flipX: transform =>
    transform.flipX = true,

  flipY: transform =>
    transform.flipY = true,

  grow: (transform, n) =>
    transform.size += parseInt(n),

  shrink: (transform, n) =>
    transform.size -= parseInt(n),

  left: (transform, n) =>
    transform.x -= parseInt(n),

  right: (transform, n) =>
    transform.x += parseInt(n),

  up: (transform, n) =>
    transform.y -= parseInt(n),

  down: (transform, n) =>
    transform.y += parseInt(n),

  rotate: (transform, n) =>
    transform.rotate += parseInt(n)
}

export default transforms
