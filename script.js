let arr = [1,-2,3,-4,5];
arr.forEach((item, index, arr) => {
    (item > 0) ? console.log(Number(' ' + item), index) : console.log(item, index);
})