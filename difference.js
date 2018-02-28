var unsorteddim = [6, 4, 2, 1, 7, 3, 8];
//у вас есть массив целых чисел, найдите наибольшую разность между такими двумя элементами, что элемент с меньшим значением стоит перед элементом с большим значением.

var maxdif = 0;

for (let i = 0; i < unsorteddim.length-1; i++) {
    var el1 = unsorteddim[i];
    for (let y = i+1; y < unsorteddim.length; y++) {
        var el2 = unsorteddim[y];
        if(el2 > el1) {
            var dif = el2 - el1;
            if(maxdif < dif)
                maxdif = dif;
        }
    }
}

var msg = maxdif;
console.log(msg);
