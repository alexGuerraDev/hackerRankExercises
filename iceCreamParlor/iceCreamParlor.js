
function whatFlavors(cost, money) {
  const arr = [...cost];
  let result = [];
  let i = 0;
  while (i < cost.length) {
    cost[i] = { value: cost[i], index: i + 1 }
    const getElement = arr.shift();
    let indexElement = i
    const difference = money - getElement;
    let missingElement;
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === difference) {
        missingElement = arr[k];
        break;
      }
    }
    if (missingElement) {
      result.push({ value: getElement, index: indexElement + 1 }, { value: difference, index: cost.indexOf(missingElement) + 1 })
      break;
    };
    i++
  }
  console.log(result.map(e => e.index).join(' '));
}


// function whatFlavors(cost, money) {
//   let result = [];
//   let i = 0;
//   for (let i = 0; i < cost.length; i++) {
//     cost[i] = { value: cost[i], index: i + 1 }
//   }
//   const arr = [...cost]
//   while (i < cost.length) {
//     const getElement = arr.shift();
//     const difference = money - getElement.value;
//     let missingElement;
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[k].value === difference) {
//         missingElement = arr[k];
//         break;
//       }
//     }
//     if (missingElement) {
//       result.push(getElement, missingElement)
//       break;
//     };
//     i++
//   }
//   console.log(result.map(e => e.index).join(' '));
// }

whatFlavors([2, 2, 4, 3], 4); //1, 2
whatFlavors([1, 4, 5, 3, 2], 4); // 1, 4
whatFlavors([1, 2, 3, 5, 6], 5); // 2, 3
const array = require('./arr.json')
whatFlavors(array, 469529535); // 19155 23686

