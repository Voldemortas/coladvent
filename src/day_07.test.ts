import random from './day_07'

function plusMinus(number: number): number {
  return Math.max(number * 0.2, 5)
}

test('test smol', () => {
  const customers = 10
  for (let i = 0; i < 1000; i++) {
    const temp = random(2, 0.5, customers)
    expect(
      (temp + plusMinus(customers) >= 10 ||
        temp - plusMinus(customers) <= 10) &&
        temp > 0 &&
        temp <= 20
    ).toBeTruthy()
  }
})

test('test bik', () => {
  const customers = 1000
  for (let i = 0; i < 1000; i++) {
    const temp = random(1, 0.9, customers)
    expect(
      (temp + plusMinus(customers) >= 10 ||
        temp - plusMinus(customers) <= 10) &&
        temp > 0 &&
        temp <= 1000
    ).toBeTruthy()
  }
})
