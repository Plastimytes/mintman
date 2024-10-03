
/////Calculate the addition, subtraction, multiplication and division of given numbers/////
////Method 1
function maths(num1, num2){
    var add = num1+num2
    var subtract = num1-num2
    var multiply = num1*num2
    var divide = num1/num2
    console.log("The addition of ", num1, "and",num2, "is", add, " subtraction is", subtract, " multiplication is", multiply, " division is", divide)
}
maths(23,45)

////method2
///add
function add(num1, num2){
    var sum = num1 + num2
    //Print statement for the addition
    console.log("The addition of ", num1, "and", num2, "is", sum)
    //if statement incase the sum is positive or negative
    if (sum >= 0){
        console.log("The number is greater than zero");    
    } else {
        console.log("Try a different number")
    }
     
    //Subtraction for nested function
     function sub(num1, num2){
         var subtract = num1 - num2
         //Print statement for the subtraction
         console.log("The subtraction of", num1, "and", num2, "is", subtract)
         if (subtract >= 0){
            console.log("The number is greater than zero");    
        } else {
            console.log("Try a different number")
        }

         //Multiplication for nested function
         function mult(num1, num2){
            var mul = num1 * num2
            //Print statement for the multiplication
            console.log("The multiplication is", mul)
            if (mul >= 0){
                console.log("The number is greater than zero");    
            } else {
                console.log("Try a different number")
            }

            //Division nested function
            function div(num1, num2){
                var div = num1 / num2
                //Print statement for the division
                console.log("The division is", div)
                if (div >= 0){
                    console.log("The number is greater than zero");    
                } else {
                    console.log("Try a different number")
                }
            }
            div(20,2)
         }
         mult(56, 67)
     }
     sub(4,25)

}
add(23,34)



////method2
////ver.2
///add
function math(num1, num2){
    var add = num1 + num2
    //Print statement for the addition
    console.log("The addition of ", num1, "and", num2, "is", add)
    //if statement incase the sum is positive or negative
    if (add >= 0){
        console.log("The number is greater than zero");    
    } else {
        console.log("Try a different number")
    }
     
    //Subtraction for nested function
     function math(num1, num2){
         var subtract = num1 - num2
         //Print statement for the subtraction
         console.log("The subtraction of", num1, "and", num2, "is", subtract)
         if (subtract >= 0){
            console.log("The number is greater than zero");    
        } else {
            console.log("Try a different number")
        }

         //Multiplication for nested function
         function math(num1, num2){
            var mul = num1 * num2
            //Print statement for the multiplication
            console.log("The multiplication of", num1, "and", num2, "is", mul)
            if (mul >= 0){
                console.log("The number is greater than zero");    
            } else {
                console.log("Try a different number")
            }

            //Division nested function
            function math(num1, num2){
                var div = num1 / num2
                //Print statement for the division
                console.log("The division is", num1, "and", num2, "is", div)
                if (div >= 0){
                    console.log("The number is greater than zero");    
                } else {
                    console.log("Try a different number")
                }
            }
            
         }
         
     }
     

}
math(23,34)

