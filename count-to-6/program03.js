// var argNum = process.argv[2];
// console.log(process.argv);
var inputs = process.argv.slice(2);
var result = inputs.map(
  input => input.charAt(0)
//   function(input){
//     return input.charAt(0);
//   }
)
console.log(`[${inputs}] becomes "${result.join('')}"`);
