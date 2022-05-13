let user = {
    name: "John",
    age: 30
};
// Проверка пустой ли обьект
let len = Object.keys(user);
if (len.length > 0) {
    console.log('not empty');
}
else {
    console.log('empty');
}
// Проверка есть ли свойство 'age' в обьекте user
if ('age' in user) {
    console.log('Age is here');
}
else {
    console.log('Age is not here');
}