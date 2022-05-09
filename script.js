let n = +prompt('Enter the number', '');

function f(n) {
    if (n === 1) return 1;
    return n * f(n - 1);
  }
if (n < 0) {
    (function () {
        throw new TypeError('Negative number');
    })();
}
else console.log(f(n));
