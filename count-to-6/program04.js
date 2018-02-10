// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(function () {
//             console.log(this.yelp);
//         });
//     }
// };
// foot.kick();

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();

//
// var add = (x, y) => x+y;
//
// console.log(add(3, 10))
