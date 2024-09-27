//If statements in Javascript//
//Example 1 :Checking if a number is positive//
let number=5
if (number>0) {
    console.log("The number is positive");
}

//Example2//
let isRaining =true; 
if (isRaining){
    console.log("Don't forget your umbrella");
}

//Example3//
let age=18;
if (age>=18){
    console.log("You are elligible to vote.");
}

//If-Else//

//Example4//
let num=7;
if (num%2===0){
    console.log("The number is even.");
} else {
    console.log("The number is odd.")
}

//Else-If//

//Example5//
let score = 75; if (score>=80)
{console.log("You got an A.");
} else if (score>=60) {
    console.log("You got a B");
}else {
    console.log("You need to improve");
}

//Excercise Number 1//
let temperature = 30; if (temperature>30)
    {console.log("It's too hot!");
    } else if (temperature>=20 && temperature<=30) {//&& logical AND operator//
        console.log("It's moderate");
    }else {
        console.log("It's cold");
    }

//Exercise Number 2; Admission//
let Score = 55; if (Score>=70)
    {console.log("Elligible for admission ");
    } else if (Score>=50 && Score<=69) {
        console.log("Admission on probration");
    }else {
        console.log("Not elligible for Admission");}

    
//Exercise Number 3; Access to clean water//
let waterAvailable = 300; if (waterAvailable>500)
    {console.log("Enough water");
    } else if (waterAvailable>=200 && waterAvailable<=500) {
        console.log("Admission on probration");
    }else {
        console.log("Not elligible for Admission");}

//Exercise Number 4; Nested ifs; Quality of product//
let expired = false;  
let  Quality = 7;
if (expired===true){console.log("Do not use")};
if (expired===false){if (Quality>8){console.log("Good Quality");} else if (Quality>=5&&Quality<=8){console.log("Average Qualitty");} else{console.log("Poor Quality")}}
