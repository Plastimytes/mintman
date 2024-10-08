//Iterating over a farmers properties
let ugandanFarmer={
    nme:"James",
    farmLocation:"Mbale",
    crop:"Coffee",
    numberOfAcres:5
};
for (let key in ugandanFarmer) {
    console.log(key,":", ugandanFarmer[key]);
}

//Using the school object to loop back
let school={
    Schname:"Katikato Primary School",
    location: "Muyenga",
    studentCount: 1300,
    establishedYear: 2000
};
for (let key in school) {
    console.log(key,":", school[key]);
}

