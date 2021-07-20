/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n number of pages in the book
 *  2. INTEGER p the page number to turn to
 */

function pageCount(n, p) {
  const pages = []
  let actual
  let next;
  const minFlipPage = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      pages.push([i])
    } else {
      actual = next + 1 || i;
      next = actual + 1 || i + 1
      if (actual === n) {
        pages.push([n])
        break
      } else if (next === n) {
        pages.push([actual, next])
        break
      } else {
        pages.push([actual, next])
      }
    }
  }
  pages.forEach((element, key) => {
    const aux = element.findIndex(page => page === p)
    if (aux >= 0) minFlipPage.push(key)
  });
  pages.reverse()
  pages.forEach((element, key) => {
    const aux = element.findIndex(page => page === p)
    if (aux >= 0) minFlipPage.push(key)
  });
  minFlipPage.sort((a, b) => a - b)
  return minFlipPage[0]
}

pageCount(6, 2)
pageCount(5, 4)


