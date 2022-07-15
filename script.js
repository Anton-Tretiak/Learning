// res == [{white:"goodness"},{blue:"tranquility"}]
let arr = [["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]];
let resArr = [];

for (let i = 0; i < arr.length; i++) {
    let obj = {};
    obj[arr[i][0]] = arr[i][1];
    resArr.push(obj);
}
console.log(resArr);