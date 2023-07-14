var guestss = ["Faizan", "Umer", "Haris", "Tayyaba"];
var unableToAttend = "Haris"; //this guest can't attend dinner
var new_guestss = "Awais";
var indexOfUnableToAttend = guestss.indexOf(unableToAttend); //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
guestss.splice(indexOfUnableToAttend, 1, new_guestss); // Remove the guest who can't attend and new guest is added at that index
for (var i = 0; i < guestss.length; i++) {
    console.log("Dear " + guestss[i] + ", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}
console.log(unableToAttend + " can not attend the dinner today due to some personal work");
