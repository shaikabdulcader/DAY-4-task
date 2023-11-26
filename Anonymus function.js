//a. Print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using a for loop and an anonymous function to print only odd numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        console.log(numbers[i]);
    }
}

//b. Convert all the strings to title caps in a string array

var num = ["ind", "aus"];
for(var i=0; i<num.length; i++){
    console.log(num[i][0].toUpperCase()+num[i].slice(1));
}

//c. Sum of all numbers in an array

var num = [1,2,3,4,5];
// using for loop and anoymous function 
var sum = 0;
for(var i=0; i<num.length; i++){
  sum += num[i];
}
console.log(sum);

//d. Return all the prime numbers in an array

var num = [1,2,3,4,5,6,7,8,9,10];

var primeNumber = [];
for(var i=0; i<num.length; i++){
    var isPrime = true;
    if(num[i]<2){
        isPrime = false;
    }else{
    for(var j=2; j<num[i]; j++){
    if(num[i]%j === 0) {
        isPrime = false;
        break;
    }
   }
 }
 if(isPrime){
     primeNumber.push(num[i]);
 }
}
console.log(primeNumber);

//e. Return all the palindromes in an array

let words = ["level", "hello", "madam", "world", "malayalam"];

let isPalindrome = function(word) {
  let lowercaseWord = word.toLowerCase();
  let reversedWord = lowercaseWord.split('').reverse().join('');
  return lowercaseWord === reversedWord;
};

let palindromes = words.filter(isPalindrome);

console.log("Palindromes:", palindromes);

//f. Return median of two sorted arrays of the same size

function findMedian(nums1, nums2) {
    var mergedArray = [...nums1, ...nums2];
    var length = mergedArray.length;
    var middleIndex = length / 2;
  
    if (length % 2 === 0) {
      var lowerMiddle = mergedArray[middleIndex - 1];
      var upperMiddle = mergedArray[middleIndex];
      return (lowerMiddle + upperMiddle) / 2;
    } else {
      var middleValueIndex = (length - 1) / 2;
      return mergedArray[middleValueIndex];
    }
  }
  
  // input 
  var nums1 = [1, 2, 3, 4, 5];
  var nums2 = [6, 7, 8, 9];
  
  var median = findMedian(nums1, nums2);
  console.log("Median:", median);
  
  //g. Remove duplicates from an array

  let array = [1, 2, 2, 3, 4, 4, 4, 5, 5];

let uniqueArray = function(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};

let result = uniqueArray(array);

console.log("Original Array:", array);
console.log("Array without Duplicates:", result);


//h. Rotate an array by k times

let arrays = [1, 2, 3, 4, 5];
let k = 1; // Number of rotations

let rotateArray = function(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  return arr;
};

// Apply the function to rotate the array
let rotatedResult = rotateArray(arrays, k);

console.log("Original Array:", arrays);
console.log("Array after rotation:", rotatedResult);










