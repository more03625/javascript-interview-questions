// setTimeout(function () {
//     console.log('Timer');
// }, 3000)

// async function x(y) {
//     y()
//     console.log('x')

// }
// function y() {
//     console.log('y')
// }
// console.log(x(y))

// *****************************************
let counter = 0
document.getElementById('clickMe').addEventListener('click', function(){
    console.log('Button Clicked!', ++counter)
})