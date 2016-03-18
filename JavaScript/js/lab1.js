/*var userInput = prompt('Enter two numbers with a space between them!');
var userOperation = prompt('Enter operation: / * + -');

var userInputArr = userInput.split(' ');

var a = userInputArr[0];
var b = userInputArr[1];
var c = parseInt(a, 10);
var d = parseInt(b, 10);

console.log(eval(c+userOperation+d));

var userInput = prompt('Enter two numbers with a space between them!');

if (userInput == 1) {
    console.log("1");
}else if (userInput == 2) {
    console.log("2");
}else{
    console.log("not 1 or 2");
}   

var person = {name:"John", surname:"Doe", age:25};
var text= "";
var x;
for (x in person) {
    text += person[x]+" ";
}
console.log(text); */

for(var i=1; i<=10; i++) {
    if(i % 2 === 0){
    console.log(i);
    }
}

for(var i=0; i<=10; i += 2) {
    console.log(i);
}