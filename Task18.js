var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placessToVisit = ["New York", "Paris", "Jakarta", "Sydney", "London", "Adelaide", "Islamabad"];
console.log("Original Order:", placessToVisit);
console.log("Alphabetical Order: ", __spreadArray([], placessToVisit, true).sort());
console.log("Original Order:", placessToVisit);
console.log("Reversed Alphabetical Order:", __spreadArray([], placessToVisit, true).sort().reverse());
console.log("Original Order:", placessToVisit);
console.log("Reversed Order:", placessToVisit.reverse());
//console.log("Original Order:",placesToVisit);
console.log("Original Order:", placessToVisit.reverse());
//console.log("Original Order:",placesToVisit);
console.log("Alphabetical Order: ", placessToVisit.sort());
//console.log("Order Changed: ",placesToVisit);
console.log("Reversed Alphabatical Order: ", placessToVisit.sort().reverse());
