var unsorteddim = [6, 4, 2, 1, 7, 3, 8];
//Удалите все одинаковые значения в массиве, возвращая массив, состоящий из уникальных элементов

var len = unsorteddim.length + 1;
var sum1 = (len*(len + 1))/2;
var sum2 = 0;


for (let i = 0; i < unsorteddim.length; i++) {
    sum2 = sum2 + unsorteddim[i];
}

var msg = sum1 - sum2;
console.log(msg);
