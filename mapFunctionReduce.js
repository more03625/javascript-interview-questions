const arr = [5, 1, 3, 2, 6]

/*
* function map accepts function `double`.
* so the map is Higher Order function
*/
const output = arr.map((x) => x * 2);
// console.log(output);


// Filter
function isOdd(x) {
    return x % 2;
}
function even(x) {
    return x % 2 == 0
}
function greaterThan(x) {
    return x > 4;
}
const FilterData = arr.filter(greaterThan)
// console.log(FilterData);

// Reduce

function findSum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
// console.log(findSum(arr));

const res = arr.reduce(function (acc, curr) { // Key, Value
    acc = acc + curr;
    return acc;
});
// console.log(res);

// find Max using Reduce

const maxUsingReduce = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
});
// console.log(maxUsingReduce);



const users = [
    { firstName: "Rahul", lastName: "More", age: 22 },
    { firstName: "Yogesh", lastName: "More", age: 22 },
    { firstName: "Rohit", lastName: "Bhosale", age: 17 },
    { firstName: "Nityanand", lastName: "Yevte", age: 28 },
    { firstName: "Sachin", lastName: "Yevte", age: 26 },
];

// get Full name of users
const fullName = users.map((x) => { // Now x has access to every elemet of array.
    // console.log(x.firstName + " " + x.lastName)
});

// Get the name of the users Whose age is greater than 20

const ageOfx = users.filter((x) => x.age > 20).map(x => x.firstName);
console.log(ageOfx);

// get The age & show the count of number of people present in that array! 

const countAge = users.reduce(function (acc, curr) {// intialValue, currentValue
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1
    }
    return acc;
}, {});
// console.log(countAge)







