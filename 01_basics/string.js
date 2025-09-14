const name = "Aditya"
const repoCount = 50

// console.log(name + rempCount + "Value");

console.log(`My name is ${name} and repo count is ${repoCount}`);

const gameName = new String('adityaRAZE');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toLowerCase())
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,4);
console.log(newString)
const anotherString = gameName.slice(-8,4);
console.log(anotherString)

const newString1 = "    aditya   "
console.log(newString1)
console.log(newString.trim())

const url = "https://github.com/aditya%20raze"
console.log(url.replace("%20","-"))
console.log(url.includes('sunder'))

const str = "aditya-raze-2025-king"
console.log(str.split('-'))

