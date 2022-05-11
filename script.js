// метод this
let obj = {
    age_1: 18,
    age_2: 19,
    sumOfAges: function () {
        return this.age_1 + this.age_2;
    }
}
console.log(obj.sumOfAges());