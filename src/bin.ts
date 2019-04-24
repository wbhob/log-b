import { logBase } from './log-base'

let result

if (process.argv[3]) {
  result = logBase(+process.argv[2], +process.argv[3])
} else if (process.argv[2]) {
  result = logBase(+process.argv[1], +process.argv[2])
} else {
  console.log(`
Invalid arguments.

Usage:
$ log-base <base> <argument>

(Reads "log base BASE of ARGUMENT")
  `)
}

console.log(result)
