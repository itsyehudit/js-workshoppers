module.exports = (...args) => {
    var sum = args.reduce( (holder, x) => holder + x, 0);
    return sum/args.length;
};
