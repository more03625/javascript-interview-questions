// function OuterFunction() {

//     let outerVariable = 500;

//     function InnerFunction() {
//         alert(outerVariable);
//     }

//     return InnerFunction;
// }
// var innerFunc = OuterFunction();

// innerFunc(); // 100

function x() {
    var a = 7;

    function y() {
        console.log(a); // `a` referce has been returned.
    }

    a = 100

    return y
}

var z = x()
console.log(z); // recived function by calling x();
z()