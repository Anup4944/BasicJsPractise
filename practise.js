
console.log("Welcome to JavaScript practise")


//EXERCISE ONE

//*write a js program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

// const isEqual = (a,b) => 
// a === 100 || b === 100 || (a +b === 100);


// console.log(isEqual(100,30))
// console.log(isEqual(0,30))
// console.log(isEqual(70,30))


//EXERCISE TWO

// write a js program to get the extension of a filename.

// const getFileExt = (str) =>
//     str.slice(str.lastIndexOf('.')) //extracts parts of a string and returns the extracted parts in a new string.

//     console.log(getFileExt("index.css"))


//EXERCISE THREE

// write a js program to replace every character in a given string with the character following it in the alphabet.

// const moveCharsForward = (str) =>
// str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')

// // split splits a string into an array of substrings, and returns the new array.


// console.log(moveCharsForward('abcdefgth'))


//EXERCISE FOUR

// write a js program to get the current data.


// const getDate = (date = new Date()) =>{

//     const days = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     return `${days}/${month}/${year} `
// }

// console.log("todays date is " ,  getDate())


//EXERCISE FIVE

// write a js program to create a new string adding "New !" in front of a given string.If the given string begins with "New!" already then return the original string.

// const newString = (str) =>
// str.indexOf('New! ') === 0 ? str : `New! ${str}`
// console.log(newString('New! Offers'))


//EXERCISE SIX
// Write a js program to create a new string from a given string taking the first 3 characters and last 3 character of a string and adding them together. The string length must be 3 or more, if not , the original string is returned.

// const newString = (str) =>
// str.length < 3 ? str : str.slice(0,3) + str.slice(-3)

// console.log("abc")
// console.log("abcsfdsdvsd")
// console.log("ab")


//EXERCISE SEVEN
// Write a js program to extract the first half of a string of even length.

// const firstHalf = (str) =>
// str.slice(0, str.length / 2)

// console.log(firstHalf('Anup'))
// console.log(firstHalf('Anupam'))

//EXERCISE EIGTH

// Write a js program to concatenate two strings and except their first character. 

// const conCat = (str1, str2) => 
// str1.slice(1) + str2.slice(1);

// console.log(conCat("Anup" , "Poudel"))

//EXERCISE NINE

// given two values, write a js proram to find out which is nearest to 100


// const givenNumbers = (a,b) =>
// (100-a) < (100-b) ? a : b;

// console.log("The closet number is:" , givenNumbers(80,90))


//EXERCISE Ten

// write a js program to check a given string contains 2 to 4 occurances of a specified character. 


// const checkOccurance = (str,char) =>

// str.split('').filter(ch=> ch === char).length;
// // ch=> ch === char check and remove which are not repeated. 

// const contains2to4 = (str, char) =>
// checkOccurance(str,char) >=2 && checkOccurance(str,char) <=4

// console.log(checkOccurance("ooh" ,"o"))

 


