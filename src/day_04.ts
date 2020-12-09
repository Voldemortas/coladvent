export default function chimney(
  W: number,
  H: number,
  X: number,
  Y: number,
  Z: number
): number {
  ;[W, H] = [W, H].sort((a, b) => a - b)
  ;[X, Y, Z] = [X, Y, Z].sort((a, b) => a - b)
  if (W >= X && H >= Y) {
    return 0
  } else {
    return X * Y * Z
  }
}
