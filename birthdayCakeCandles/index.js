/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // return candles.filter(e => e === Math.max(...candles)).length // Failed tests by time limit
  const maxHeight = Math.max(...candles)
  const countOfCandles = candles.filter(e => e === maxHeight).length
  return countOfCandles
}


birthdayCakeCandles([4, 4, 1, 3])
birthdayCakeCandles([3, 2, 1, 3])
birthdayCakeCandles([2, 2, 2, 2])


