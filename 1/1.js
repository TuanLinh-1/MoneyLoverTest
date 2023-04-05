const bubbleSort = (arr, length) => {
  let haveSwap = Boolean(false);
  for (let i = 0; i < length - 1; i++) {
    haveSwap = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        haveSwap = true;
      }
    }
    if (haveSwap === false) {
      break;
    }
  }
};

let arr1 = [9, 5, 10,997, 100, 50, 60, 1, 5, 3,80,];
let arr2 = [3, 5, -2, 14, -9, 30];
// bubbleSort(arr1, arr1.length);
// bubbleSort(arr2, arr2.length);
console.log(arr1);
console.log(arr2);

const soNguyenTo = (x) => {
  var count = 0;
  if (x > 2) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        count++;
        break;
      }
    }
  } else {
    return (count = 1);
  }
  return count;
};

const finalArray = arr2.filter((item) => {
  return soNguyenTo(item) === 0;
});
// console.log(finalArray);

function finalProgram(arr) {
  bubbleSort(arr, arr.length);
  const finalArray = arr.filter((item) => {
    return soNguyenTo(item) === 0;
  });
  return finalArray;
}
console.log(finalProgram(arr1));
console.log(finalProgram(arr2));
