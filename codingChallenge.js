// const arr = ['a','n','u','p']
// // converting array into string
// const str = arr.join('');
// console.log(str)

// GETTING FACTORIAL
// const getFactorial = (num) => {
//   var result = 1;
//   for (var i = 1; i < num; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(getFactorial(10));

// CHECKING IF A STRING IS A PALLINADRONE OR NOT

// const checkPalindrome = (str) => {
//   var reg = /[\W_]/g;
//   var smallStr = str.toLowerCase().replace(reg,'')
//   var reversed = smallStr.split("").reverse().join("");
//   if (reversed === smallStr) {
//     return true;
//   } else return false;
// };

// console.log(checkPalindrome("racecar"));

// FINDING THE LONGEST WORD IN A STRING

// const longWord = (str) => {
//   var words = str.split(" ");

//   var longest = "";
//   for (var word of words) {
//     if (word.length > longest.length) longest = word;
//   }
//   return longest.length ;
// };
// console.log(longWord("The best to figure out the world is nepture"))

//TITLE CASE A STRING
// const titleCase = (str) => {
//   var arr = str
//     .toLowerCase()
//     .split(" ")
//     .map((x) => {
//       return x[0].toUpperCase() + x.slice(1);
//     });

//   return arr.join(" ");
// };
// console.log(titleCase("prem"));

/// RETURN LARGERST NUMBER IN ARRAY

// const largerstNum = (arr) => {
//   var maxArr = [];

//   for (i = 0; i < arr.length; i++) {
//     // console.log(arr[i]) to print all index inside array
//     var tempMax = arr[i][0];

//     for (var j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j]) looping inside index of given array.
//       var currentEle = arr[i][j];
//       if (currentEle >= tempMax) {
//         tempMax = currentEle;
//       }
//     }
//     maxArr.push(tempMax);
//   }
//   return maxArr;
// };

// console.log(
//   largerstNum([
//     [4, 5, 6, 7],
//     [13, 56, 78, 23],
//     [32, 45, 57, 56],
//     [1000, 1001, 857, 1],
//   ])
// );
