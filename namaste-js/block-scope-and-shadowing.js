// {} :- Block. used to group statement.

// if(true) true // single statement
// 
// if(true) {
// var a = 10;
// console.log(a); // Multiple statements
// } 

// *********************************
// {
// var a = 10;  // Global Scope.
// let b = 20;  // Block Scope.
// const c = 30; // Block Scope.

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
// }

// console.log(a); // 10
// console.log(b); // Not defined
// console.log(c); // Not defined

// *********************************
// Shadowing.

// var a = 50;
// {
// var a = 10; // Shadowning.
// let b = 20;  
// const c = 30;
// }
// console.log(a) // 10. because of shadowing a is now 10. it's reinitialized.



// let b = 50;
// {
// var a = 10; // Shadowning.
// let b = 20;  // Local Scope.
// const c = 30;
// }
// console.log(b) // 50

// *********************************
// let a = 40;
// function MKBHD(){
//     var a = 30 // illegall showding. let with let. let with var not valid inBlock scope only.
//     console.log(a)
// }
// console.log(a)

// MKBHD()

// *********************************
// var a = 10;
// {
    // let a = 0
// }
// console.log(a)