module.exports = function (str) {
  return /^(cat|dog|robot)([^a-zA-Z\s]+)$/.test(str)
}
