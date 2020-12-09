export default function random(C: number, P: number, N: number): number {
  let answer = 0
  for (let i = 0; i < N; i++) {
    if (Math.random() <= P) {
      answer += C
    }
  }
  return C
}
