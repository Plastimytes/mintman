let ugandanFarmer={
    nme:"James",
    farmLocation:"Mbale",
    crop:"Coffee",
    numberOfAcres:5,

introduceFarmer:function(){
   return "Hello, my name is",this.nme, "and i farm",this.crop, "in ",this.farmLocation;
  }
}
console.log(ugandanFarmer.introduceFarmer());

let school={
    Schname:"Katikato Primary School",
    location: "Muyenga",
    studentCount: 1300,
    establishedYear: 2000,
    introduceschool:function(){
        return "Hello, this is",this.Schname, "we are located in",this.location, "with ",this.studentCount;
    }
}
console.log(school.introduceschool());        