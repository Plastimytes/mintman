//An infinite loop is a sequence of instructions that continues indefinetly because a terminating condition is never met or no increament is set
//They can be stopped be adding exit conditions and using setTimeout or setInterval. One can also implement the timeouts

//An example
let time = Date.now();
while(true){
    if (Date.now()-time>2000){
        break
    }
}