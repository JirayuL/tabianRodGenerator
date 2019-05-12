function main() {
  console.log('Start');

  let notWant = [1, 3, 6, 0]
  let notWantSum = [13]
  let wantEndWith = 9

  let startWith = 8

  for (let i = 0; i < 9999; i++) {
    let splitNum = i.toString().split('')
    let sum = startWith + splitNum.reduce((partial_sum, n) => partial_sum + parseInt(n), 0)
    // console.log(sum);
    // console.log(sum + startWith);

    let sumStr = sum.toString()
    // console.log(sumStr);

    let result = '-1'
    for (let j = 0; j < notWant.length; j++) {
      if (checkElementNotInArray(splitNum, notWant[j]) && checkElementNotInArray(notWantSum, sum) && sumStr.endsWith(wantEndWith)) {
        result = startWith + ' ' + i + ' sum = ' + sumStr
        // console.log(startWith + ' ' + i)
      }
    }
    if (result != '-1') {
      console.log(result);
    }
  }

  console.log('End');

}

function checkElementNotInArray(arr, element) {
  return arr.indexOf(element) < 0
}

main()
