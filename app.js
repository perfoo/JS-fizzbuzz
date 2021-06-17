var fizzBuzz = [];

for (var i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        fizzBuzz.push("fizz");
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        fizzBuzz.push("buzz");
    }
    else if (i !== 0 && i % 15 === 0) {
        fizzBuzz.push("fizzbuzz");
    }
}
console.log(fizzBuzz);
console.log(fizzBuzz.length);