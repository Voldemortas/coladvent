//yea I know you wanted me to read a file, just uncode the following code then (nah don't :D)
/*import * from fs;
const input = fs.readFileSync(__dirname + '/2-input.txt', 'utf-8')
//*/
export default function day2(input: string): number[] {
  return input.split('\n').map((e) => e.length)
}
