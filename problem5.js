////write js program to create new string adding "new!"
// in front of given String. 
// if the given string begins with new return original string

const addNew = (str) => 
str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! Shirt'));