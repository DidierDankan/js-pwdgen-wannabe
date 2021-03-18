console.log('hello')
// ask the users name
// ask user surname
// ask user favorite color
// give user a generated password with 21 at the end

//user data
//1 get users name
var userName = prompt('whats your name?');
//2 get users surname
var userSurName = prompt('whats your surname?');
//3 get user favorite color
var userFavColor = prompt('whats your favorite color?');
//verify if works
console.log(userName);
console.log(userSurName);
console.log(userFavColor);

//4 gives user his password
document.getElementById('mypassword').innerHTML = 'Your Password is: ' + userName + userSurName + userFavColor + 21;