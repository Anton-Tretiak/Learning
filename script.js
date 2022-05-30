let str = 'lana banana';

function capitalize(str) {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

console.log(capitalize(str));