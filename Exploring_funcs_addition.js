
//Total electricity bill of a household in Kampal
function Electricity( costOfUnit, UnitsConsumed, Bill){
//Call the function and create variabes 
    var UnitsConsumed=25
    var costOfUnit=1500
    var Bill= UnitsConsumed*costOfUnit
    //Console log statement
    console.log("A household in Kampala consumes", UnitsConsumed, "meaning it has a bill of UGX ", Bill);
}
Electricity()

//Function for a leap year
function leapYear(year){
   
    if (year%100!=0&&year%4==0);{
        console.log("The year is a leap year")}if(year%100==0&&year%4!=0);{
           console.log("It is not a  leap year")}
        }

leapYear(2023)

//Boda boda fare
function taxi(distance, fareperkm){
    return distance*fareperkm;
}
let distancebetweenTowns=10 //km
let fareperkm=2000 //UGX
let totalfare=taxi(distancebetweenTowns, fareperkm);
console.log("The Boda boda fare is UGX",totalfare);
/////////////////////////////////////////////////////////////////////////////


