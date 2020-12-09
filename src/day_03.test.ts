import day3 from './day_03'

test('default test', () => {
  expect(day3([1, 2], [1, 3])).toBe(7)
  expect(day3([5, 4, 8], [2, 1.5, 2.5])).toBe(36)
})

test('decimal test', () => {
  expect(day3([5, 4, 8], [2, 1.5, 2.5])).toBe(36)
})

test('bad decimal test', () => {
  expect(day3([1, 1, 1], [1.1, 1.1, 1.1])).toBe(6)
})
