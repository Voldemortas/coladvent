export default function shopping(
  B: number,
  C: number,
  M: number,
  T: boolean
): boolean {
  return (
    B % 6 === 0 && // balls divisible by 6
    C >= 6 && // cookies more than 6
    C <= (T && M !== 11 ? 48 : 24) && // Cookies less than 24 unless the tree exists and month is not November
    M > 0 && // month cannot be 0 or less
    M < 12 // month cannot be December
  )
}
