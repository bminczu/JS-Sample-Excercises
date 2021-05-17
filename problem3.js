// take string and shift forward one letter of alphabet


const moveCharsForward = (str) => 
str.split("").map(char => String.fromCharCode(char.charCodeAt(0)+1)).join("");

console.log(moveCharsForward("amazing"));