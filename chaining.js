console.log("chaining.js");
let intAfterMath = 0
let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

integers.sort();
integers.sort(function(first, second) {return first - second; }).reverse().splice(0, 4,);
console.log("integers:", integers);

return integers;

function mathStuff(num) {
    intAfterMath = integers(a, b)
}


// function filterNineteen() {
//     integers.replace(0, 4, "");
// }

// console.log(filterNineteen());



