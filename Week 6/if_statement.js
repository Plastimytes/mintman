///Syntax of an if statement
//if(condition){console.log(print statement)}

////Purpose of using if statements
///To execute block of code that is conditionally based allowing for decision making

///TRUE && TRUE =TRUE
///FALSE && TRUE =FALSE
///FALSE && FALSE =FALSE

///TRUE || TRUE =TRUE
///FALSE || TRUE =TRUE
///FALSE || FALSE =FALSE

//Temperatures
let temperatures=20;
if (temperatures>25){
    console.log("It's Hot");
}else{console.log("It's cold");}

///Temperatures modified
let temperature=22;
if (temperature>25){
    console.log("It's Hot");
}else if(temperature>=15 && temperature<=25){
    console.log("It's warm");
}else{console.log("It's cold");}