///////STUDENT  STATUS////
//Create the variable
let students = [
    //Brief description of the students and their resource status
    {name: "Jane", hasInternet: true, hasSchool: false },
    {name: "Jameson", hasInternet: false, hasSchool: true },
    {name: "Abraham", hasInternet: true, hasSchool: true },
    {name: "Marcus", hasInternet: false, hasSchool: false },
];

//Access status
function checkAccess(students){
    let students_lacking_resources=[];

    //for loop for the student resources
    for (let i=0; i < students.length; i++) {
        let student =students[i];
        if (!student.hasInternet  || !student.hasSchool) {
            students_lacking_resources.push (student.name);
        }
    }
    return students_lacking_resources;
}

//Print students who are lacking resources
let student_without_Resources = checkAccess(students);
console.log("Students lacking Resources:",student_without_Resources);
