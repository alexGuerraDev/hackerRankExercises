/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const minNumber = Math.min(...arr)
  const maxNumber = Math.max(...arr)
  let minSum = []
  let maxSum = []
  arr.forEach(e => {
    if (e !== minNumber) minSum.push(e)
    if (e !== maxNumber) maxSum.push(e)
  })
  if (minSum.join("") === maxSum.join("")) {
    arr.pop()
    minSum = [...arr]
    maxSum = [...arr]
  }
  console.log(maxSum.reduce((a, b) => a + b, 0), minSum.reduce((a, b) => a + b, 0))
}


miniMaxSum([1, 3, 5, 7, 9])
miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([10, 2, 4, 51])
miniMaxSum([9, 8, 7, 6, 5])
miniMaxSum([5, 5, 5, 5, 5])