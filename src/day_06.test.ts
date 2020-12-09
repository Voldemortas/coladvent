import recursion from './day_06'

test('L = 0', () => {
  expect(recursion(0)).toBe(1)
})

test('L = 1', () => {
  expect(recursion(1)).toBe(4)
})

test('L = 2', () => {
  expect(recursion(2)).toBe(10)
})

test('L = 5', () => {
  expect(recursion(5)).toBe(94)
})
