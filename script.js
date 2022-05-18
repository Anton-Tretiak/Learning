let list1 = [1,2,4], list2 = [1,3,4];
let arr = [].concat(list1, list2);
arr.sort(function (a, b) {
    return a - b;
});

console.log(arr);