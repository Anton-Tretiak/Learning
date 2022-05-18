let nums = [1,2,3,4,5,6,7,8,9,10]
let size = 3; 
let subarray = []; 
for (let i = 0; i <Math.ceil(nums.length/size); i++){
    subarray[i] = nums.slice((i*size), (i*size) + size);
}
console.log(subarray);