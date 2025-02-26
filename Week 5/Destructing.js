//Destructing for Ugandan farmers
let ugandanFarmer={
    nme:"James",
    farmLocation:"Mbale",
    crop:"Coffe",
};

let {nme, farmLocation,crop}=ugandanFarmer;
console.log(nme,"farms",crop,"in",farmLocation,);

//Destructuring for the school
let school={
    Schname:"Katikato Primary School",
    location: "Muyenga",
    studentCount: 1300,
    establishedYear: 2000
};

let {Schname, location,studentCount}=school;
console.log(Schname,"is in",location,"with",studentCount,"students");
