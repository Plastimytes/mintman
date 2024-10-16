//Score
let score=80;
if (score >90 && score <=100){
    console.log("A grade");
}else if (score>75 && score<=90){
    console.log("B grade");
}else if (score>50 && score<=75){
    console.log("C grade");
}else{
    console.log("Fail");
}
///Output is B grade

//Switch Statement
//Switch statements dont work with ranges
//If you have to deal with ranges youd have to type the ranges for all numbers in the ranges
//If you have to deal with ranges use if statements

let Score =90
switch (Score){
    case 90:
     console.log("A grade");
      break;
      ///Each case has to break
      //Without break the code prints every consol.log in the code
    case 80:
      console.log("B grade"); 
       break;
    case 50:
      console.log("C grade"); 
       break; 
    default:
      console.log("Fail"); 
       break;
}