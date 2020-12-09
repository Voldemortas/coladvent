import speed from './day_05'

test('test 1', () => {
  expect(speed(5, 3, 2, 4)).toBe(32)
})

test('test 2', () => {
  expect(speed(24, 30, 10, 60)).toBe(12.5)
})
