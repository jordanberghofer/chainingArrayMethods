console.log("chaining.js");

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers.sort();
integers.sort(function(first, second) {return first - second; }).reverse();
console.log("integers:", integers);

