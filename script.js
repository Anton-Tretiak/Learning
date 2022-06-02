let arr = [1,-2,3,-4,5];
arr.forEach(function(item) {
    (item < 0) ? console.log(item) : console.log(item * 2);
})