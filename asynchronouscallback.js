//asynchronous callback//
function data(email) {
  setTimeout(() => {
    console.log(email);
  }, 3000);
}
console.log("other code");
const user = data("nab@gmail.com");
