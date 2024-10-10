///////////////////////////////////////////////////////////////////////
//Creating and accessing an object
let ugandanFarmer={
    nme:"Mark",
    farmLocation:"Mbale",
    crop:"Maize",
    numberOfAcres:5
};
//Accessing properties
console.log("Farmer's Name: ", ugandanFarmer.nme);
console.log("Farms Location: ", ugandanFarmer.farmLocation);

let school={
    Schname:"Katikato Primary School",
    location: "Muyenga",
    studentCount: 1300,
    establishedYear: 2000
};
console.log("School's name: ", school.Schname);
console.log("School's Location: ", school.location);

//Methods in Object
//Adding and modifying object properties
ugandanFarmer.cropsHarvested=1000//Adding
ugandanFarmer.crop="Maize"//modifying
console.log(ugandanFarmer);


//School object
school.schoolType="Primary"
school.studentCount=2500
console.log(school);

///////////////////////////////////////////////////////////////////

