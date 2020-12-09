export default function speed(
  H: number,
  G: number,
  D: number,
  T: number
): number {
  const houses = (H * G) / 3600
  const time = T / 60 - houses
  return D / time
}
