//Syntax 
function funcName(paramters, name) {
    //code
    return value//Optional
}//basic function and how its supposed to look

//Greeting function
function greetnme(name) {
    console.log("Hello",name,"Welcome to Uganda");
}
greetnme("Richard")

//Function with parameters
//Taxi fare
function taxi(distance, fareperkm){
    return distance*fareperkm;
}
let distanceToWandegeya=10 //km
let fareperkm=5000 //UGX
let totalfare=taxi(distanceToWandegeya, fareperkm);
console.log("The taxi fare is UGX",totalfare);

//Task2
//Food expense
function meal(noOfmeals, costPerMeal){
    return noOfmeals*costPerMeal;
}
let MealNo=3 //km
let costMeal=3000 //UGX
let total=meal(MealNo, costMeal);
console.log("The total food expense is ",total, "Uganda shillings");

//Functions with return values
//Average score
function Average(scores){
    let total=0;
    for (let i=0; i<scores.length; i++){
        total += scores[i];
    }
    return total/scores.length;
}
let studscore =[78, 79, 98, 45];
let AveScore=Average(studscore); 
console.log("The average score is ", AveScore);

//Water usage average
function Water(Usage){
    let total=0;
    for (let i=0; i<Usage.length; i++){
        total += Usage[i];
    }
    return total/Usage.length;
}
let litres =[7, 13, 28, 15];
let AveUsage=Water(litres); 
console.log("The average daily water usage is ", AveUsage, "litres");

//Anonymous Functions
let grt=function(name){
    console.log("Hello", name,"how is Uganda");
};
grt("Richard");

//Arrow functions
let greet=(names)=>{
    console.log("Hello", names,"welcome to MTN");
};
greet("Richard");

//Arrow Function to calculate area
let calculateArea=(length, width, area)=>{
    var length=20
    var width=56
    var area=width*length
    console.log("The area of the land is ",area, "with", length,"and", width);
};
calculateArea("length", "width", "area");

//Functions with multiple parameters
//Revenue of a farmer
function calculateRevenue(pricePerBunch, numberOfBunch){
    return pricePerBunch*numberOfBunch;
}
let pricePerBunch=15000;
let bunchsold=30;

let revenue=calculateRevenue(pricePerBunch, bunchsold); 
console.log("The total revenue is UGX", revenue);

//Function to calculate selling price, cost price and number of units sold and profits
function calculateProfit(sellingPrice, costPrice,units,profits) {
    //Create variables for selling price, units sold and cost price
    var sellingPrice = 20000
    var costPrice = 15600
    var units = 23
    var profits =(sellingPrice-costPrice)*units
    //console log statement
    console.log("The selling price is ", sellingPrice, "  the cost price is ", costPrice, "the units sold are",units, "and the profit is ", profits)
}
//calling the function
calculateProfit()

//Functions with default parameters
//School fees and default boarding fee
function calculateFees(tution, boarding=500000) {
    return tution+boarding;
}
let Totalfees=calculateFees(150000);
console.log("Total fees are", Totalfees);

let TotalfeesWithoutBoarding=calculateFees(150000, 0);
console.log("Total fees without boarding are", TotalfeesWithoutBoarding);

//Internet Cost
function calculateInternetCost(Chrage, DataBundle=50000) {
    return Chrage+DataBundle;
}
let Total=calculateInternetCost(150000);
console.log("Total internet are", Total);

let TotalCostWithoutDataBundle=calculateFees(150000, 0);
console.log("Total fees without boarding are", TotalCostWithoutDataBundle);

//Recursive Functions
//Calculate Factorial
function factorial(n){
    if (n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
let result= factorial(5);
console.log("The factorial of 5 is ", result);

//
function countdown(n){
    if (n<0){
        return;
    }
    console.log(n);
    countdown(n-1);
}
countdown(10);

//Local and gloal variables
let globalVar="I need soup";
function testScope(){
    let localVar="It is nutritious";
    console.log(globalVar);
    console.log(localVar);
}
testScope();
console.log(globalVar);

//IIFE
(function(){
    console.log("This was invoked immediately")
})();

//message
(function(){
    console.log("Welcome to Javascript in Uganda")
})();

//Higher order functions
function processPayment(amount, paymentcallback){
    console.log("Processing payment of UGX ", amount);
    paymentcallback();
}
function OnPaymentSuccess(){
    console.log("Payment Successful!");
}
processPayment(50000, OnPaymentSuccess)

//Fetch Data
function fetchdata( paymentcallback){
    console.log("Processing data request")
}
function OnDataretrieve(){
    console.log("Data successfully retrieved!");
}
fetchdata( OnDataretrieve)

//Real world problems
function calculateIncome(km, bonus){
    let IncomeperKm=2000
    return km * IncomeperKm;
}
let KmTraveled = 50
let dailyIncome = calculateIncome(KmTraveled);
let bonus=dailyIncome*0.1

console.log("The total daily income is", dailyIncome, "and bonus is", bonus);
