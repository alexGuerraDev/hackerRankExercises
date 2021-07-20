function sockMerchant(n, ar) {
  const pairs = {}
  let total = 0
  ar.forEach(sock => {
    pairs[sock] = !pairs[sock] ? 1 : pairs[sock] += 1
  })
  for (const key in pairs) {
    const pairOfSocks = pairs[key] / 2
    if (pairOfSocks % 2 === 0) {
      total += pairOfSocks
    } else if (pairOfSocks >= 1) {
      total += parseInt(pairOfSocks)
    }
  }
  return total
}


sockMerchant(9, [
  10, 20, 20, 10, 10,
  30, 50, 10, 20
])
sockMerchant(10, [
  1, 1, 3, 1, 2,
  1, 3, 3, 3, 3
])