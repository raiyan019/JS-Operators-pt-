function sum(number1 = 0,number2 = 0, number3 = 0) {
    return "sum result is ${ (number1 + number2 + number3 }" ;
}


function substraction(number1 = 0,number2 = 0, number3 = 0) {
    return "substraction result is ${ (number1 - number2 - number3 }" ;
}


function multiply(number1 = 0,number2 = 0, number3 = 0) {
    return "multiplyresult is ${ (number1 * number2 * number3 }" ;
}




function divison(number1 = 0,number2 = 0, number3 = 0) {
    return "divison result is ${ (number1 / number2 / number3 }" ;
}



function expo(number1 = 0,number2 = 0, number3 = 0) {
    return "expo result is ${ (number1 ** (number2 ** number3) }" ;
}




function modulas(number1 = 0,number2 = 0, number3 = 0) {
    return "modulas result is ${ (number1 % (number2 % number3) }" ;
}




const Unum1 = +prompt("Enter your number 1")
const Unum2 = +prompt("Enter your number 2")
const Unum3 = +prompt("Enter your number 3")



document.getElementById("number1").innerHTML = Unum1;
document.getElementById("number2").innerHTML = Unum2;
document.getElementById("number3").innerHTML = Unum3;

document.getElementById("result").innerHTML = sum(Unum1,Unum2,Unum3)+ "<br>";
document.getElementById("result").innerHTML += substraction(Unum1,Unum2,Unum3)+ "<br>";
document.getElementById("result").innerHTML += multiply(Unum1,Unum2,Unum3)+ "<br>";
document.getElementById("result").innerHTML += divison(Unum1,Unum2,Unum3)+ "<br>";
document.getElementById("result").innerHTML += expo(Unum1,Unum2,Unum3)+ "<br>";
document.getElementById("result").innerHTML += modulas(Unum1,Unum2,Unum3);