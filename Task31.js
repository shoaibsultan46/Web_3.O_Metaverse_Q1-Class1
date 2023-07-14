var userrname = ['admin', 'msaleh', 'mfizan', 'musama', 'mkhan'];
for (var i = 0; i < userrname.length; i++) {
    if (userrname[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello! ", userrname[i], "thank you for logging in again");
    }
}
if (userrname.length < 1) {
    console.log("We need to find some users!");
}
userrname.splice(0);
console.log("We need to find some users!");
