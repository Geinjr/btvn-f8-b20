function reverseInteger(number) {
    var reversed = 0;
    while (number !== 0) {
        var digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    return reversed;
}

var n = 12345;
var reversed = reverseInteger(n);
console.log(reversed);
