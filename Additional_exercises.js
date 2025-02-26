/////Boda Boda rider
let BodaBodaRider={
    ///Properties involving the boda boda rider
    Name:"Mukasa",
    Location:"Kampala",
    BodaType:"Bajaj",
    FarePerKm:3000,
   
//Calculating the profits made by the boda boda rider
    calculateProfit:function(DistanceInKm){
        return DistanceInKm*this.FarePerKm;
    }
};
let profit=BodaBodaRider.calculateProfit(15);
//Print a statement showing the boda boda riders profits
console.log("The profit of the boda boda rider :", profit,"Uganda shillings");

////Ugandan football team
let UgandanFootballTeam={
    //Properties for a UgandanFootballTeam
    TeamName:"SC Kyombo",
  
        Player_Details:[
            {name:"Mugaya Pius",position:12,Goals_Scored:2},
            {name:"Muyizi Aaron",position:3,Goals_Scored:5},
            {name:"Mukibi DeoGracius",position:10,Goals_Scored:1},
            {name:"Okello Ben",position:2,Goals_Scored:1},
            {name:"Ssemitimba Jackson ",position:7,Goals_Scored:4},
            {name:"Adyeng James",position:11,Goals_Scored:20},
            {name:"Kikabbi Warren",position:4,Goals_Scored:5},
            {name:"Ssebitende Gareth",position:8,Goals_Scored:1},
            {name:"Ddumba Kenneth",position:15,Goals_Scored:0},
            {name:"Onyang Stansiluis",position:9,Goals_Scored:3},
            {name:"Ssegujja Annonyimous",position:16,Goals_Scored:12},
        ],
        calculateTotalGoals:function(){
            let total=0 ;
            for (let i=0;i<this.Player_Details.length;i++){
                total += this.Player_Details[i].Goals_Scored*this.Player_Details[i].Score;
            }
            return total;
        }
    
};
console.log("The total scores of this team are:",UgandanFootballTeam.calculateTotalGoals());

////Constructor for a hospital
function Hospital(name, location, crop, acres){
    this.name=name;
    this.HospitalLocation=location;
    this.numberOfBeds=1000;
    this.introduce=function(){
        return "I am ",this.name, "and I farm ", this.crop, "in", this.farmLocation;

    };
    

}
let Hospital1=("Hermes", "Mbarara", 100)
   function Beds(){
        let total=0 ;
        for (let i=0;i<this.numberOfBeds;i++){
            total += this.numberOfBeds[i].Hospital;
        }
        return total;
    }


console.log("The number of beds is:",Beds());



