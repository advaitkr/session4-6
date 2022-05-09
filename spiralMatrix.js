var generateMatrix = (arr) =>{
    let n = arr.length
    let m = n, i;
    let k = 0, l = 0, value = 1;

    let result = [];
    for (i = 0; i < n; i++) {
        result[i] = new Array(n);
    }

    while(k < m && l < n) {
        for(i = l; i < n; i++) {
            result[k][i] = value++;
        }
        k++;

        for(i = k; i < m; i++) {
            result[i][n - 1] = value++;
        }
        n--;

        for(i = n - 1; i >= l; i--) {
            result[m - 1][i] = value++;
        }
        m--;

        for(i = m - 1; i >= k; i--) {
            result[i][l] = value++;
        }
        l++;
    }

    return result;
};
let res = generateMatrix([[1,2,3],[8,9,4],[7,6,5]])
console.log(res)