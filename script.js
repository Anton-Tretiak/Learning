let arr = [3,66,5,7,2,8,99,57,64]
let obb = []
let len = arr.length
let counter = 0
console.log(arr);

for (let i = 0; i < len; i++) { // Создаем массив чётных чисел
    if (arr[i] % 2 == 0) {
        obb.push(arr[i])
    }
}
obb.sort((a,b) => { return a - b }) // Сортируем массив чётных чисел

for (let i = 0; i < len; i++) { // Проверяем если число чётное, то заменить его на эл из массива чётных
    if (arr[i] % 2 == 0) {
        arr[i] = obb[counter]
        counter += 1
    }
}

console.log(arr) // начальный массив
console.log(obb) // конечный массив