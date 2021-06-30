/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const sizeArr = arr.length
  const positiveValues = []
  const negativeValues = []
  const zeroValues = []
  arr.forEach(e => {
    if (e > 0) positiveValues.push(e)
    if (e < 0) negativeValues.push(e)
    if (e === 0) zeroValues.push(e)
  })
  console.log((positiveValues.length / sizeArr).toFixed(6))
  console.log((negativeValues.length / sizeArr).toFixed(6))
  console.log((zeroValues.length / sizeArr).toFixed(6))
}


plusMinus([1, 1, 0, -1, -1])
plusMinus([-4, 3, -9, 0, 4, 1])