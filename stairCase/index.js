/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  const str = '#'
  for (let i = 0; i < n; i++) {
    let arr = []
    let spaces = []
    for (let j = n - 1; j > i; j--) {
      spaces.push(" ")
    }
    for (let k = 0; k <= i; k++) {
      arr.push(str)
    }
    console.log(spaces.join("") + arr.join(""))
  }
}


staircase(4)
staircase(5)
staircase(6)
staircase(8)
staircase(9)
staircase(20)