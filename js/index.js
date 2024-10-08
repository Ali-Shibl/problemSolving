
let numbers=[10,5,16,15,20,100,80,151,10,5,15]



// 1

function even(nums) {
 return   nums.filter(num=> num % 2 ==0 )
}
let resultEven=even(numbers)
console.log(resultEven);


// 2
function maxNumber(nums) {

    let num1=nums[0]

 for (let i = 0; i < nums.length; i++) {
     
     if (nums[i] > num1) {
        num1=nums[i]
     }
    
 }
 return num1
}
let bigNumber=maxNumber(numbers)
console.log(bigNumber);



// 3
let text='mohamed'

function reverseName(term) {
   return  term.split("").reverse().join('')  
}

let resultText=reverseName(text)

console.log(resultText);


// 4

function Notfrequent(nums) {

 return   Array.from(new Set (nums))
}
let newNumbers=Notfrequent(numbers)
console.log(newNumbers);
