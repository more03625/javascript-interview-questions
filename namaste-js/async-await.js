const asyncAwait = async () => {
    console.log('Messgae : a');
    console.log('Messgae : b');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // .
    const s = await response.json();
    console.log('first ===>',s)
    //  console.log('Messgae : c'); // API takes time execute so it will go back `log(g)` then execute next then come to log whatever in api here. but for now 'c' will not take log so it will print c then go to code out of this function.
    console.log('Messgae : d');
    console.log('Messgae : e');
}
console.log('Messgae : f');
asyncAwait()
console.log('Messgae : g');

const funBasyncAwait = async () => {
    console.log('Messgae : funBasyncAwait a');
    console.log('Messgae : funBasyncAwait b');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // .
    const s = await response.json();
    console.log('sec ===>',s)
    console.log('Messgae : funBasyncAwait d');
    console.log('Messgae : funBasyncAwait e');
}

funBasyncAwait(); 


// Output of funBasyncAwait() // f, a, b, c,g, funBasyncAwait a, funBasyncAwait b, funBasyncAwait c, d, e, funBasyncAwait d, funBasyncAwait e

// Go back after logging c to the console. execute all code outside the current function. then come back to execute code after `await` keyword
// Go back after logging c to the console. execute all code outside the current function. then come back to execute code after `await` keyword


