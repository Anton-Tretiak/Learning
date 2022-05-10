let min = +prompt('Введите начало диапазона', '');
let max = +prompt('Введите конец диапазона', '');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(min, max));
