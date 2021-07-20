
const bonAppetit = (bill, k, b) => {
  bill.splice(k, 1);
  bill = bill.reduce((a, b) => a + b, 0)
  const price = b - (bill / 2)
  if(price === 0){
    console.log('Bon Appetit')
  }else{
    console.log(price)
  }
}


bonAppetit([3, 10, 2, 9], 1, 12)
bonAppetit([3, 10, 2, 9], 1, 7)