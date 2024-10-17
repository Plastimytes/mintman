//List for rainfall in Ghana in different regions
let Ghana_rainfall=[
    {Day:1, Amount:75},
    {Day:2, Amount: 90},
    {Day:3, Amount:100},
    {Day:4, Amount: 134},
    {Day:5, Amount: 85},
    {Day:6, Amount: 12},
    {Day:7, Amount: 85},
    {Day:8, Amount: 34},
    {Day:9, Amount: 23},
    {Day:4, Amount: 25}
]

//while loop for the rainfall in the rural region
let i=0;
while(i<=10, Ghana_rainfall.length){
        console.log(`Day ${Ghana_rainfall[i].Day} - Rainfall: ${Ghana_rainfall[i].Amount}mm`);
    }
    i++;
