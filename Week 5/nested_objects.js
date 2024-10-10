//Nested objects
//Nested objects for a Ugandan city
let KampalaCity={
    cityname:"Kampala",
    population:1500000,
    districts:{
        central:"Kampala Central",
        east:"Nakawa",
        north:"Kawempe",
        south:"Makindye",
        west:"Rubaga"
    }
};
console.log("District north of Kampala is", KampalaCity.districts.north);

//University departments

let University={
    Uniname:"Katikato Primary School",
    location: "Muyenga",
    studentCount: 1300,
    establishedYear: 2005,
    department:{
        DepartmentOfComputing:"Mr. Kamoga Darius",
        DepartmentOfFinance:"Mrs. Nakiwala Joan",
        DepartmentOfMedicine:"Mr. Ssekaga Deograsius",
        DepartmentOfLaw:"Mrs. Okelot Anita",
        
        
    }
};
console.log("The unviersity's departments and their respective department heads are: ", University.department);








