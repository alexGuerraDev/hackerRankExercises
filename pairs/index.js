
function pairs(k, arr) {
  let count = 0
  let current;
  let i = 0
  do {
    current = arr.shift()
    for (let j = 0; j < arr.length; j++) {
      const result = Math.abs(current - arr[j])
      if (result === k) count += 1
    }
    i++
  } while (arr.length > 1)
  console.log(count)
}


pairs(2, [1, 5, 3, 4, 2]) //3
pairs(1, [
  363374326, 364147530,
  61825163, 1073065718,
  1281246024, 1399469912,
  428047635, 491595254,
  879792181, 1069262793
]) // 0
pairs(2, [
  1, 3, 5, 8,
  6, 4, 2
]) //5