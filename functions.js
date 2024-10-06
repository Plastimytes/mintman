var num = 23;

var num2 = 2;

var sum = num+num2;
console.log("sum:",sum);

var num3 = 40;

var num4 = 4;

var sum2 = num3+num4;
console.log("sum2:",sum2);

//FUNCTIONS
function summation(){
    var num5 = 40;

var num6 = 4;

var sum3 = num5+num6;

console.log("sum three:",sum3);
}//Parameters enter the round bracket

summation()

//Returning function
function summation_two(){
    var num5 = 40;

var num6 = 4;

var sum3 = num5+num6;

return sum3;
}

console.log("Sum4:",summation_two())

//Assinging the value to a variable
var sum4 = summation_two();

var sum5 = summation();//not returning function (void function)

console.log(sum5)

//functions with parameters
function summation_three(num5, num6) {
    var sum6 = num5+num6;

    console.log("The sum of " ,num5,"+",num6, sum6);
}

summation_three(40, 20)
summation_three(40, 1000)

//Returning functions with parameters
function summation_four(num5, num6) {
    var sum6 = num5+num6;

    return num5+num6;
}
//print directlty in terminal
console.log("sum_five:",summation_four(23,58));

//Assigning tthe value to a variable
var sum_five = summation_four(234,587);








