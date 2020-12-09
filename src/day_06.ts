export default function recursion(L: number, cur = 0, val = 1): number {
  if (L < 1) {
    return 1
  }
  if (cur === L) {
    return val
  } else {
    return recursion(L, cur + 1, val * 2 + 2)
  }
}
