//----------------------------------------JavaScript Conditional Statements Assignment-------------------------------

//Q=1.Write a JavaScript program to find the maximum between three distinct numbers.

let a = 2;
let b = 6;
let c = 10;

if(a>b && a>c){
    console.log(a + " is Maximum");
}
else if(b>a && b>c){
    console.log(b + "is maximum");
}
else{
    console.log(c + " is maximum");
}


//Q-2.Write a JavaScript program to check whether a year is a leap year or not.

let year = 2024;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " = is a leap year");
}
else{
    console.log(year + " = is not a leap year");
}


//Q-3.Write a JavaScript program to check whether a number is even or odd.

let num = 20;
if(num % 2 === 0){
    console.log(num + " is Even");
}
else{
    console.log(num + " is odd");
}


//Q-4.Write a JavaScript program to check whether a character is an alphabet, digit, or a special character.

let ch = 4;
 
if((ch>='A' && ch<='Z')||(ch>='a' && ch<='z')) {
    console.log(ch + " is an Alphabet");
}
else if(ch>='0' && ch<='9') {
    console.log(ch + " is a Digit");
}
else{
    console.log(ch + " is aspecial character");
}


//Q-5.Write a JavaScript program to check whether three given angles form a valid triangle.

let angle1 = 60;
let angle2 = 30;
let angle3 = 45;

if (angle1 + angle2 + angle3 === 180) {
    console.log("The angles form a Triangle");
} else {
    console.log("The angles do not form a Triangle");
}








