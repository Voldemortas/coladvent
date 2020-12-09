export default function day3(homes: number[], density: number[]): number {
  return homes.reduce(
    (accumulator, house, i) => accumulator + Math.ceil(house * density[i]),
    0
  )
}
