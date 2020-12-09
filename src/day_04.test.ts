import chimney from './day_04'

test('fit', () => {
  expect(chimney(2, 2, 1, 1, 3)).toBe(0)
  expect(chimney(10, 3, 7, 8, 3)).toBe(0)
})

test('does not fit', () => {
  expect(chimney(4, 1, 5, 3, 2)).toBe(30)
})
