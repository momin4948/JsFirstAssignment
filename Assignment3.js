// https://github.com/momin4948/JsFirstAssignment


// Task1(Kilotometer To Meter Conversion)

function kilometerToMeter(kilo) {
    var Meter = kilo * 100;
    return Meter;
}
var test = kilometerToMeter(500);
console.log(test);


// Task-2(Budget Calculator)

function budgetCalculator(watch, mobile, laptop) {
    cost = (watch * 50) + (mobile * 100) + (laptop * 500);
    return cost;
}
var total = budgetCalculator(2, 1, 2);
console.log(total);


// Task-3 (Hotel Cost)

function hotelCost(day) {
    //Calculating cost for first 10 days.//
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    //Calculating cost for Eleventh to twenty days.//
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    //Calculating cost for more than twenty days.//
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirtPart = remaining * 50;
        cost = firstPart + secondPart + thirtPart;
    }
    return cost;
}
var totalCost = hotelCost(19);
console.log(totalCost);

// Task-4(Longest Name in Array)

function megaFriend(array) {
    var megaName = "";
    array.forEach(function (word) {
        if (word.length > megaName.length) {
            megaName = word;
        }
    });
    return megaName;
}
var test = megaFriend(["Rahim", "Karim", "SirajUdDaulah"]);
console.log(test);