/////Creating multiple farmers using a constructor
function Farmer(name, location, crop, acres){
    this.name=name;
    this.farmLocation=location;
    this.crop=crop;
    this.numberOfAcres=acres;
    this.introduce=function(){
        return "I am ",this.name, "and I farm ", this.crop, "in", this.farmLocation;

    };
}
let farmer1=new Farmer("Sarah", "Mbarara", "Bananas", 10)
let farmer2=new Farmer("David", "Gulu", "Sunflowers", 20)

console.log(farmer1.introduce());
console.log(farmer2.introduce());

function school(name, location, studentCount, schoolType){
    this.name=name;
    this.location=location;
    this.student=studentCount;
    this.schoolType=schoolType;
    this.introduce=function(){
        return "we are ",this.name, "and are located in ", this.location, "with", this.student,"and are a", schoolType;

    };
}
let school1=new school("CPS", "Mbarara", 1000, "Primary")
let school2=new school("KPS", "Gulu", 1002, "Primary")

console.log(school1.introduce());
console.log(school2.introduce());