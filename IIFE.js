//a. Print odd numbers in an array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
    if (function(num) { return num % 2 !== 0; }(number[i])) {
        console.log(number[i]);
    }
}

//b. Convert all the strings to title caps in a string array

var strings = ["hello", "world", "this", "india"];

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
})(strings);

console.log(strings);

//c. Sum of all numbers in an array

var numbers = [1, 2, 3, 4];

var sum = (function(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numbers);
 
console.log("Sum of all numbers:", sum);

//d. Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primes = (function(arr) {
  function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  var primeNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }

  return primeNumbers;
})(numbers);

console.log("Prime numbers:", primes);

//e. Return all the palindromes in an array

var words = ["level", "hello", "madam", "world", "malayalam"];

var palindromes = (function(arr) {
  function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
  }

  return arr.filter(function(word) {
    return isPalindrome(word);
  });
})(words);

console.log("Palindromes:", palindromes);

//f. Return median of two sorted arrays of the same size

var nums1 = [1, 2, 3];
var nums2 = [4, 5, 6];

var median = (function(arr1, arr2) {
  var mergedArray = [...arr1, ...arr2];
  var length = mergedArray.length;
  var middleIndex = length / 2;

  if (length % 2 === 0) {
    var lowerMiddle = mergedArray[middleIndex - 1];
    var upperMiddle = mergedArray[middleIndex];
    return (lowerMiddle + upperMiddle) / 2;
  } else {
    return mergedArray[Math.floor(middleIndex)];
  }
})(nums1, nums2);

console.log("Median:", median);


//g. Remove duplicates from an array

var nums = [1, 2, 2, 3, 4, 4, 5];

var uniqueArray = (function(arr) {
  return arr.filter(function(item, index, self) {
    return self.indexOf(item) === index;
  });
})(nums);

console.log("Original Array:", nums);
console.log("Array without Duplicates:", uniqueArray);

//h. Rotate an array by k times

var array = [1, 2, 3, 4, 5];
var k = 2; // Number of rotations

var rotatedArray = (function(arr, rotations) {
  var newArray = arr.slice(); // Create a copy of the original array

  for (var i = 0; i < rotations; i++) {
    var lastElement = newArray.pop();
    newArray.unshift(lastElement);
  }

  return newArray;
})(array, k);

console.log("Original Array:", array);
console.log("Array after rotation:", rotatedArray);











