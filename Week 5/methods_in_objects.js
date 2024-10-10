//Methods in objects
let ugandanFarmer={
    nme:"Mark",
    farmLocation:"Mbale",
    crop:"Coffee",
    numberOfAcres:5,
    cropPrice:3000,
    calculateRevenue: function(harvestedBags){
        return harvestedBags*this.cropPrice;
    }
};
let revenue = ugandanFarmer.calculateRevenue(200);
console.log("Total revenue for ",ugandanFarmer.crop, "is UGX ", revenue);


let school={
    Schname:"Katikato Primary School",
    location: "Muyenga",
    studentCount: 1300,
    establishedYear: 2000,
    calculateSchoolAge: function(currentYear){
        return currentYear-this.establishedYear;
    }
};
let SchoolAge=school.calculateSchoolAge(2024)
console.log("School's age is: ", SchoolAge);
