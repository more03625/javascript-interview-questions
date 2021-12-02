function x() {
    var i = 10;
    setTimeout(function() {
        console.log("i", i)
    }, 1000);
    console.log("Rahul More")
}
x(); 
// Rahul More
// i, 1

// No matter if you put 1 Million Console.logs() it will print 1 million log then value inside setTimeOut