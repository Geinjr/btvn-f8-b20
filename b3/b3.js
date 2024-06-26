function getnumbertowords(number) {
    var unit = [
        "không",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ];
    var row = ["", "mươi", "trăm", "nghìn"];
    var result = "";

    var nghin = Math.floor(number / 1000);
    var tram = Math.floor((number % 1000) / 100);
    var chuc = Math.floor((number % 100) / 10);
    var donViSo = number % 10;

    if (nghin > 0) {
        result += unit[nghin] + " " + row[3] + " ";
    }

    if (tram > 0) {
        result += unit[tram] + " " + row[2] + " ";
    }

    if (chuc > 0) {
        if (chuc === 1) {
            result += row[1] + " ";
        } else {
            result += unit[chuc] + " " + row[1] + " ";
        }
    }

    if (donViSo > 0) {
        result += unit[donViSo];
    }

    return result.trim();
}

var number = 1234;
var getnumber = getnumbertowords(number);
console.log(getnumber);
