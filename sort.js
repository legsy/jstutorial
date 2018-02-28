var unsorteddim = [-10, 7, 29, 30, 5, -10, -70];
//есть массив целых чисел, найдите наибольшее произведение из трёх чисел данного массива

for (let i = 0; i < unsorteddim.length-1; i++) {
    var element1 = unsorteddim[i];
    var element2 = unsorteddim[i+1];
    if(element1 > element2) {
        var temp = unsorteddim[i];
        unsorteddim[i] = unsorteddim[i+1];
        unsorteddim[i+1] = temp;
        
        for (let y = i; y > 0; y--) {
            element2 = unsorteddim[y];
            element1 = unsorteddim[y-1];
            if(element1 > element2) {
                temp = unsorteddim[y-1];
                unsorteddim[y-1] = unsorteddim[y];
                unsorteddim[y] = temp;
            }
            else {
                break;
            }
        }      
    }
}

var msg = '1:' + unsorteddim[unsorteddim.length-1] + ' 2:' +  unsorteddim[unsorteddim.length-2] + ' 3:' +  unsorteddim[unsorteddim.length-3];
console.log(msg);
