function reverseInteger(number) {
    var reversed = 0;
    var isNegative = number < 0;

    if (isNegative) {
        number *= -1;
    }

    while (number !== 0) {
        var digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }

    if (isNegative) {
        reversed *= -1;
    }

    return reversed;
}

var n = -12345;
var reversed = reverseInteger(n);
console.log(reversed);
