let user = {
    name: 'John',
    money: 1000,

    toString() {
        return `{Name: "${this.name}"}`;
    },

    valueOf() {
        return this.money; 
    }      
};

console.log(user);
alert(user);
console.log(Number(user));
