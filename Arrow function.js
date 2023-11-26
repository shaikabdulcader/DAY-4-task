//a. Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using arrow function to print odd numbers
numbers.forEach(number => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});

//b. Convert all the strings to title caps in a string array

var strings = ["hello", "fun", "title"];

// Using forEach and arrow function to convert strings to title case
var titleCaseStrings = [];
strings.forEach(str => {
  titleCaseStrings.push(str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
});

// Output
console.log(titleCaseStrings);


//c. Sum of all numbers in an array

var numbers = [1, 2, 3, 4, 5];

var sum = 0;
numbers.forEach(num => sum += num);

// Output 
console.log("Sum of all numbers:", sum);

//d. Return all the prime numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primes = numbers.filter(num => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});

//Output
console.log("Prime numbers:", primes);

//e. Return all the palindromes in an array

var words = ["level", "hello", "madam", "world", "malayalam"];

var palindromes = words.filter(word => {
  let lowercaseWord = word.toLowerCase();
  let reversedWord = lowercaseWord.split('').reverse().join('');
  return lowercaseWord === reversedWord;
});

//Output
console.log("Palindromes:", palindromes);


