///Business object
let  business ={
    Name:"Kampala Electronics",
    location:"Kampala",
    products:[
         {Name:"TV",price:100000,quantity:50},
         {Name:"Radio",price:150000,quantity:200},
         {Name:"Laptop",price:300000,quantity:30},

    ],
    calculateTotalValue:function(){
        let total=0 ;
        for (let i=0; i<this.products.length; i++) {
            total += this.products[i].price*this.products[i].quantity ;
    }
    return total ;
}
};
console.log("Total value of products in stock: " ,business.calculateTotalValue(), "UGX");


//Market vendor selling multiple products
let  marketVendor ={
    Name:"Antonio Bamukwana",
    location:"Kampala",
    products:[
         {Name:"Bananas",price:1000,quantity:500},
         {Name:"Cassava",price:500,quantity:800},
         {Name:"Tomatoes",price:300,quantity:300},

    ],
    calculateTotalrevenue:function(){
        let total=0 ;
        for (let i=0; i<this.products.length; i++) {
            total += this.products[i].price*this.products[i].quantity ;
    }
    return total ;
}
};
console.log("Total revenue of products in stock: " ,marketVendor.calculateTotalrevenue(), "UGX");