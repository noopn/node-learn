console.log('a');
exports.something = { a: 1 }
exports = {};
console.log(exports, 222)

module.exports = (ccc) => {
  console.log(1);
}

console.log(exports, 111)
