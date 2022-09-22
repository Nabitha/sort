arraydemmy = [1, 4, 2, 5];

// for (let i = 0; i <= arraydemmydemmy.length; i++) {
//   for (let j = 0; j <= arraydemmydemmy.length; i++) {
//     if (arraydemmydemmy[j] > arraydemmydemmy[j + 1]) {
//       temp = arraydemmydemmy[j];
//       arraydemmydemmy[j] = arraydemmydemmy[j + 1];
//       arraydemmydemmy[j] = temp;
//     }
//   }
// }

// console.log(arraydemmydemmy);

for (var i = 0; i <= arraydemmy.length; i++) {
  // Last i elements are already in place
  for (var j = 0; j < arraydemmy.length; j++) {
    // Comparing two adjacent numbers
    // and see if first is greater than second
    if (arraydemmy[j] > arraydemmy[j + 1]) {
      // Swap them if the condition is true
      var temp = arraydemmy[j];
      arraydemmy[j] = arraydemmy[j + 1];
      arraydemmy[j + 1] = temp;
    }
  }
}
// Print the sorted arraydemmy
console.log(arraydemmy);
