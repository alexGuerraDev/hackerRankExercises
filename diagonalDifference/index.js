/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let leftToRigthDiagonal = [];
  let rigthToLeftDiagonal = []
  for (let i = 0; i < arr.length; i++) {
    leftToRigthDiagonal.push(arr[i][i])
    rigthToLeftDiagonal.push(arr[i][(arr.length - 1) - i])
  }
  const leftDiagSum = leftToRigthDiagonal.reduce((a, b) => a + b, 0)
  const rigthDiagSum = rigthToLeftDiagonal.reduce((a, b) => a + b, 0)
  console.log(Math.abs(leftDiagSum - rigthDiagSum))
  return Math.abs(leftDiagSum - rigthDiagSum)
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
])
diagonalDifference([
  [1, 2, 4, 5],
  [4, 5, 6, 8],
  [1, 8, 3, 1],
  [4, 5, 6, 8],
])

diagonalDifference([
  [1, 2, 4, 5,1,9],
  [4, 5, 6, 8,1,8],
  [1, 8, 3, 1,1,7],
  [4, 5, 6, 8,1,6],
  [4, 5, 6, 8,1,4],
  [4, 5, 6, 8,1,1],
])