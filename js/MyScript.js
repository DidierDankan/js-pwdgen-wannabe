//test JS
console.log('hello')
// ask the users name
// ask user surname
// ask user favorite color
// give user a generated password with 21 at the end

//user data
//1 get users name
var userName = prompt('whats your name?');
console.log(userName);

//2 get users surname
var userSurName = prompt('whats your surname?');
console.log(userSurName);

//3 get user favorite color
var userFavColor = prompt('whats your favorite color?');
console.log(userFavColor);

//4 gives user his password
document.getElementById('mypassword').innerHTML = 'Your password is:'
document.getElementById('box-password').innerHTML = userName + userSurName + userFavColor + 21;

//password alert
document.getElementById('attention').innerHTML = 'Alert! This password is not safe!!!'