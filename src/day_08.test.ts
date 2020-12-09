import stairs from './day_08'

test('bad stairs', () => {
  expect(stairs(0)).toBe('')
  expect(stairs(-1)).toBe('')
})

test('good stairs', () => {
  expect(stairs(1)).toBe('#')
  // prettier-ignore
  expect(stairs(4)).toBe(
`   #
  ##
 ###
####`
  )
})
