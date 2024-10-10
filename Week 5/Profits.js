
//Function to calculate selling price, cost price and number of units sold and profits
function calculateProfit(sellingPrice, costPrice,units,profits) {
    //Create variables for selling price, units sold and cost price
    var sellingPrice = 20000
    var costPrice = 15600
    var units = 23
    var profits =(sellingPrice-costPrice)*units
    //console log statement
    console.log("The selling price is ", sellingPrice, "  the cost price is ", costPrice, "the units sold are",units, "and the profit is ", profits)
}
//calling the function
calculateProfit()