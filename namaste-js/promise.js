let promise = new Promise(function(resolve, reject){
   let x = setTimeout(() => reject(new Error("Whoops!")), 1000)
   console.log(x);
});