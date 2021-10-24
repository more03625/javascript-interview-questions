console.log('start');

setTimeout(function cb() {
    console.log('Callback')
}, 5000); 
// this will go to callstack after 5 seconds as we 
// have passed this delay! Through the call back queue.

console.log('end');