export default function stairs(amount: number): string {
  let answer = ''
  for (let i = 1; i <= amount; i++) {
    for (let j = 1; j <= amount; j++) {
      if (amount - j >= i) {
        answer += ' '
      } else {
        answer += '#'
      }
    }
    answer += i === amount ? '' : '\n'
  }
  return answer
}
