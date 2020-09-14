var result = process.argv.slice(2).map(function (x) {
  return Number(x);
});
let sum = result.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(sum);
