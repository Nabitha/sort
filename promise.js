let data = false; //data tharum

const database = new Promise((resolve, reject) => {
  if (data) {
    resolve(console.log("data found"));
  } else {
    reject(console.log("not found"));
  } //object create using new keyword
})
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("Take data");
  })
  .finally(() => {
    console.log("finished");
  }); //finally handler
