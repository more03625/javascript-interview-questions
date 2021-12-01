const get = (x) => {
    console.log('inside get')
    return x * x
};
var array = [1, 2, 3, 4, 5];

// array.map( async (value, index) => (
//       console.log('before get')
//       console.log(value, await get(value));
//       console.log('after get')
// ))

const asyncRes = await Promise.all(array.map(async (i) => {
      console.log('before get')
      console.log(i, await get(i));
      console.log('after get')
}));
console.log(asyncRes);