let calculator = {
    read: function () {
        this.num1 = +prompt('Enter the first num','');
        this.num2 = +prompt('Enter the second num','');
    },
    sum: function () {
        return (this.num1 + this.num2);
    },
    mul: function () {
        return (this.num1 * this.num2);
    }
}



calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
console.log(calculator);