// Write your solution below this line:
var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
for (let i = 0; i < nums.length; i++)
if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
    console.log('fizzbuzz');
}
else if (nums[i] % 3 === 0) {
    console.log('fizz');
}
else if (nums[i] % 5 === 0) {
    console.log('buzz');
}

else {
        console.log(nums[i])
    }
