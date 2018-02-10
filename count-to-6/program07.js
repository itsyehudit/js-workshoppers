// var input = [1, 2, 3, 4, 5];
//
// average(...input) =>
//     var outcome = 0;
//     input.forEach(function(value) {
//       (outcome +=)/input.length;
//     });
module.exports = (...args) => {
    var sum = args.reduce( (holder, x) => holder + x, 0);
    return sum/args.length;
};
