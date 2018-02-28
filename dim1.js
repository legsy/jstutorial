//var unsorteddim = [6, 4, 2, 1, 7, 3, 8];
var unsorteddim = [1, 2, 3, 4];
//у вас есть массив целых чисел, выведите такой массив, что output[i] равен произведению всех элементов массива за исключением i-ого. (Решите за O(n) без операции деления).

var maxdif = 0;
var output = [];

console.log(dim1(unsorteddim));

function dim1(array) {
    let func = 1;
    for (let i = 0; i < array.length; i++) {
        output.push(func);
        func *= array[i];
    }
    func = 1;
    for (let i = array.length - 1; i >= 0 ; i--) {
        output[i] *= func;
        func *= array[i];
    }
    return output;    
}
