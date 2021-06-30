/*
 * Complete the 'gameOfStones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER n as parameter.
 */
// function gameOfStones(n) {
//   const playerMoves = [2, 3, 5]
//   let player1 = false
//   let player2 = false
//   let bestMove
//   let faltante
//   if (n < playerMoves[0]) {
//     player2 = true
//     player1 = false
//   } else {
//     for (let i = 0; i < 3; i++) {
//       if (playerMoves.includes(n)) {
//         player1 = true
//         player2 = false
//         break
//       }
//       bestMove = n - 1
//       if (playerMoves.includes(bestMove)) {
//         n = n - bestMove
//         if (!playerMoves.includes(n)) {
//           player1 = true
//           player2 = false
//           break
//         }
//       }
//       faltante = n - playerMoves[i]
//       if (!playerMoves.includes(faltante)) {
//         player1 = true
//         player2 = false
//         n = faltante
//       } else {
//         player2 = true
//         player1 = false
//         n = faltante
//       }
//     }
//     console.log(n)
//   }
//   console.log(player1 ? 'First' : 'Second')
// }


function gameOfStones(n) {
  const playerMoves = [2, 3, 5]
  let winner = ''
  let turn = 'p1'
  let bestMove
  do {
    if (turn === 'p1') {
      if (n === 1) {
        winner = 'Second'
        n = n
        break
      }
      if (playerMoves.includes(n)) {
        winner = 'First'
        n = playerMoves.find(e => e === n) - n
        break
      } else {
        const imparElement = playerMoves.filter(e => e % 2 !== 0)
        const element = 
        if (n % 2 === 0 ) { }
        // if (playerMoves.includes(n - 1)) {
        //   n = n - 1
        //   turn = 'p2'
        // }
        console.log(n)
      }
    }
    if (turn == 'p2') {
      console.log(n)
      console.log('jugador 2')
    }
  } while (winner !== '')
  console.log(winner)
}


gameOfStones(1) // Second
gameOfStones(2) // First
gameOfStones(3) // First
gameOfStones(4) // First
gameOfStones(5) // First
gameOfStones(6) // First
gameOfStones(7) // Second
// gameOfStones(10) // First

// console.log('******************************')

// gameOfStones(10)// First
// gameOfStones(55)// First
// gameOfStones(11)// First
// gameOfStones(34)// First
// gameOfStones(92)// Second
