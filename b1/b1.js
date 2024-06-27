function getFibonacci(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var series = getFibonacci(n - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
}

var n = 10;
var fibSeries = getFibonacci(n);
console.log(fibSeries.join(", "));
