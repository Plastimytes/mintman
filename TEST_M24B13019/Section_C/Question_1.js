//A program that will calculate the total price of three products and if the sum exceeds 100000 UGX they will receive a discount

//Assining variables for the goods
var Scholastics=20000;
var Iron_Sheets=50000;
var Toilet_seat=40000;

//Calculating the total price
var sum=Scholastics+Iron_Sheets+Toilet_seat

//Checking if the total price exceeds 100000 UGX
if(sum>100000){
  console.log("A discount is applicable");
}else{
    console.log("A discount is not applicable");
}
