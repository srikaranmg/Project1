//Variables
var a =10;
var b = 20;

//consle.log is like a syntax for printing code

console.log(a+b);

//Const is also a local variable
{
    const g = 3.14
    //g = 2
    console.log(g)
}


let price = 10
let tax = 1.8
let product = 'Pencil'

//we need to use comma to introduce variables or other functions in console
console.log("The price of the", product)
console.log("The price of the " + product)
console.log(price+tax)

/*
this is the syntax for 
multi line comments
*/

s = typeof(a)
console.log(s)

//fucntion
function abc(aname = "Sri Karan")
{
    console.log(aname)
}

abc()
abc("Gowtham")

/*
This below funciton considers the numbers as string and by default
it concates the String.
To add the string just mention the data type eg.number 
infornt of name of the variable
*/

function Addition(number1,number2)
{
Total = number1 + number2
Total1 = Number(number1) + Number(number2)
console.log(Total)
console.log(Total1)
}

Addition('2','4')

// division example with retun keyword function

function Division(a1,a2)
{
    Divide = Number(a1) / Number(a2)
    return Number(Divide)
}

newdivide = Division(82,5)
console.log(newdivide)