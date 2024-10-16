///Logical operators are used to satisfy more than one condition in if statements
///&& is used to join two statements/conditions to satisfy them
/// || is uesd when atleast one condition is to be true
/// ! is used to reverse the truth value of a condition

///Example_Age_For_Voting
var age=18//Age is a variable
let citizenship="Ugandan"
if (age>=18 && citizenship=="Ugandan"){
    console.log("You are elligible to vote");
}else{console.log("You cannot vote");}

//Or cannot be used since both conditions cannot be satisfied

