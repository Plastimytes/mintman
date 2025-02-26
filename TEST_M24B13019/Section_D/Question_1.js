//Switch statements
//A program to print out the call rates of different network providers in Africa depending on the users input


//Prompt statement
console.log("Please choose a network provider:");
console.log("1. MTN");
console.log("2. Airtel");
console.log("3. Africell");
console.log()

//User inpput for Service proviers
let Service_provider="MTN"

//Switch and case
switch(Service_provider){
    case "MTN":
        console.log("MTN call rates: 2 UGX per second");
        break;
    case "Airtel":
        console.log("Airtel call rates: 1 UGX per second");
        break;
    case "Africell":
        console.log("Africell call rates: 0.5 UGX per second");
        break;
    default:
        console.log("Invalid service provider. Please choose from the above.");
        break;
}