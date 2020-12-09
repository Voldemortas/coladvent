import day2 from './day_02'

test('default test', () => {
  const input = `BBBBBBBBBBBB
MMMMMMM
CCCCCCCCCC
T`
  expect(JSON.stringify(day2(input))).toBe(JSON.stringify([12, 7, 10, 1]))
})

test('no tree', () => {
  const input = `B
M
C
`
  expect(JSON.stringify(day2(input))).toBe(JSON.stringify([1, 1, 1, 0]))
})

test('nothing', () => {
  const input = `


`
  expect(JSON.stringify(day2(input))).toBe(JSON.stringify([0, 0, 0, 0]))
})
