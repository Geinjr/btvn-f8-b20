function getFibonacci(n) {
    if (n === 1) {
        return [0, 1];
    }

    var series = [0, 1];

    for (var i = 2; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

var n = 10;
var fibSeries = getFibonacci(n);
console.log(fibSeries.join(", "));
