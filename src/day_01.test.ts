import shopping from './day_01'

test('all good', () => {
  expect(shopping(6, 6, 10, true)).toBeTruthy()
})

test('wrong balls', () => {
  expect(shopping(13, 7, 11, false)).toBeFalsy()
})

test('wrong cookies', () => {
  expect(shopping(13, 25, 11, false)).toBeFalsy()
  expect(shopping(13, 5, 11, false)).toBeFalsy()
})

test('December', () => {
  expect(shopping(18, 30, 12, true)).toBeFalsy()
})

test('tree on November', () => {
  expect(shopping(18, 30, 11, true)).toBeFalsy()
})
