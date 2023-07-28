const name = "Durga"
const repoCount = 50

// console.log(name + repoCount + " Value");

// String Interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// console.log(newString);

const newString2 = gameName.slice(0,4)
// console.log(newString2);
const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   hitesh    ";
// console.log(newStringOne.trim());

const replace = "My apple are tasty";
console.log(replace.replace("tasty","fresh"));
console.log(replace.includes("as"));