//synchronous callback example
function one(message) {
  message();
}
function two() {
  console.log("hellow call back function");
}
one(two); //passed as a argument
// this is synchronous callback
