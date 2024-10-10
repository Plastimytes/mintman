////Nested if statements
let age =18;
if (age >=18){
    if (age < 65){
        console.log("You are elligible to work");
    }else{
        console.log("You are of retirement age");
    }
}else{
    console.log("You are too young to work");
}

////Rewrite the code using a single if-else structure without nesting

let Age=65;
if(Age>=18 && Age<65){
    console.log("You are elligible to work");
}else if (Age>=65 ){
    console.log("You are of retirement age");
}else{
        console.log("You are too young to work");
}

