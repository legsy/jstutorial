var unsorteddim = [6, 4, 2, 1, 7, 3, 8];
//неотсортированный массив содержит (n-1) чисел из последовательности {1,2,…,n} (границы определены), найдите недостающий элемент массива за время o(n)

var len = unsorteddim.length + 1;
var sum1 = (len*(len + 1))/2;
var sum2 = 0;


for (let i = 0; i < unsorteddim.length; i++) {
    sum2 = sum2 + unsorteddim[i];
}

var msg = sum1 - sum2;
console.log(msg);
