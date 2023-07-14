var gueest = ["Faizan", "Umer", "Haris", "Tayyaba"];
var unableToAtnd = "Haris"; //this guest can't attend dinner
var new_gueest = "Awais";
var indexOfUnableToAtnd = gueest.indexOf(unableToAtnd); //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
gueest.splice(indexOfUnableToAtnd, 1, new_gueest); // Remove the guest who can't attend and new guest is added at that index
//Add new guests to list
gueest.unshift('Ali'); // add at beginning
gueest.splice(Math.floor(gueest.length / 2), 0, 'Usman'); //add in middle 
gueest.push('Ahmer'); // add at end
console.log("Oooops! Sorry, we can only invite two people to dinner");
var y = gueest.length;
for (i = 0; i < (y - 2); i++) {
    var gueest_removed = gueest.pop();
    console.log("Sorry, ".concat(gueest_removed, ". We regret to inform you that we can't invite you to dinner."));
}
for (var i = 0; i < gueest.length; i++) {
    console.log("Dear " + gueest[i] + ", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}
console.log(gueest.length + " people are invited to dinner party");
