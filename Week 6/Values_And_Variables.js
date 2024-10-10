////Dfference between var, let and const in JavaScript
///These are key words used to declare variables. Var is used to declare function-scoped variables,Let is used to declare block-scoped variables,Const is used to create constant values
//You can redeclare variables of var but not let
////What happens if you try to reassign variables declared with let or const
///Let allows for reassignment. But if constis used it will display an error because const declares a constant refference that cannot be reassigned

////Output
var x =10;
let y=5;
const z=3;

x=20;
y=15;
//z=7;//z is already a const so it wont work
console.log(x,y,z);

////Name of student and a constant for the total number of students
var student_name = "Marcus Arelius";
const student_number = 38;
console.log("The student's name is ",student_name,"and the number of students in the IT class is ",student_number);

////Rainfall
let district="Kampala"
var rainfall_amount = 1000//We declare with var because rainfall amount changes everyday. Let can also work since reassignment can also work
console.log("The rainfall amount in ",district,"is",rainfall_amount);
