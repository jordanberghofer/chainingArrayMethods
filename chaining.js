console.log("chaining.js");
let intAfterMath = 0
let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function filterNineteen(number) {
    if(number <= 19){
        return number;
    }
};

function mathGarbage(ruffles){
    return (ruffles * 1.5) -1;
};

function sumGarbage(total, num){
    return total + num;
};


var newArray = integers.sort(function(first, second) {return first - second; });
console.log("pens", newArray);

var newerArray = newArray.reverse();
console.log("larger pens", newerArray);

var newestArray = newerArray.filter(filterNineteen);
console.log("largest pens", newestArray);

var mathArray = newestArray.map(mathGarbage);
console.log("holiest of pens", mathArray);

var sumArray = mathArray.reduce(sumGarbage);
console.log("angriest of pens", sumArray);

var newesterArray = integers.sort(function(first, second) {return first - second; }).reverse().filter(filterNineteen).map(mathGarbage).reduce(sumGarbage);
console.log("THE HAPPIEST OF PENS", newesterArray);

//this is going to be the chaining of everything. Hold onto your pants.
// integers.sort();
// integers.sort(function(first, second) {return first - second; }).reverse();
// console.log("integers:", integers);

// return integers;

// function mathStuff(num) {
//     intAfterMath = integers(a, b)
// }


// function filterNineteen() {
//     integers.replace(0, 4, "");
// }

// console.log(filterNineteen());



