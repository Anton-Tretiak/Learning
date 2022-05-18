let nums = [1,3,6];
let target = 2;

if (nums.includes(target)) {
    console.log(nums.indexOf(target));
}
else {
    nums.push(target); // закидываем число в массив
    nums.sort(function (a,b) {  // сортируем массив
        return a - b;
    })
    console.log(nums.indexOf(target)); // выводим индекс таргета
}
console.log(nums);