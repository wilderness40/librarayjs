const heightOfYourFriend = 289;
const temperature = 13.9;
const fruits = ['apple', 'banana', 'orange'];

// 문자열 타입으로 변환하기

let heightOfYourFriend_string = heightOfYourFriend.toString();
let temperature_string = JSON.stringify(temperature);
let fruits_string = JSON.stringify(fruits);

console.log(typeof heightOfYourFriend_string);
console.log(typeof temperature_string);
console.log(typeof fruits_string);
