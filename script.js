let user = [
    {
      name: "John",
      age: 30
    },
    {
      name: "Bob",
      age: 21
    },
    {
      name: "Anna",
      age: 19
    }
];

// Получаем обьект из массива обьектов по заданному параметру

for (let i = 0; i < user.length; i++) {
    if (user[i].name == 'Bob') {
        object = user[i];
        break;
    }
}
console.log(object);
console.log(user);

// Удаляем обьект из массива обьектов если имя = Анна

for (let i = 0; i < user.length; i++) {
    if (user[i].name == 'Anna') {
        delete user[i];
    }
}
console.log(user);

