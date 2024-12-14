function fibs(number) {
  const arr = [];
  const arrBase = [];
  for (let i = 0; i < number; i++) {
    arrBase.push(i);

    if (arrBase[i] < 2) {
      arr.push(arrBase[i]);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  console.log(arr);
}

fibs(8);

function fibonacciArray(n, arr = [0, 1]) {
  if (arr.length > n) {
    return arr.slice(0, n);
  }
  const nextNumber = arr[arr.length - 1] + arr[arr.length - 2];
  return fibonacciArray(n, [...arr, nextNumber]);
}

console.log(fibonacciArray(8));
