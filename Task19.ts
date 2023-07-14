let gueest:string[]=["Faizan", "Umer", "Haris", "Tayyaba"];
let unableToAtnd:string="Haris";   //this guest can't attend dinner
let new_gueest:string="Awais";
let indexOfUnableToAtnd: number = gueest.indexOf(unableToAtnd);  //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
gueest.splice(indexOfUnableToAtnd, 1,new_gueest);          // Remove the guest who can't attend and new guest is added at that index

//Add new guests to list
gueest.unshift('Ali');  // add at beginning
gueest.splice(Math.floor(gueest.length/2),0,'Usman');  //add in middle 
gueest.push('Ahmer')     // add at end

console.log("Oooops! Sorry, we can only invite two people to dinner");
let y:number=gueest.length;
for (i=0;i<(y-2);i++)
{
    let gueest_removed:string=gueest.pop()!;
    console.log(`Sorry, ${gueest_removed}. We regret to inform you that we can't invite you to dinner.`);   
}
for (var i = 0; i < gueest.length; i++) {
    console.log("Dear " + gueest[i] + ", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}        
console.log(gueest.length+" people are invited to dinner party");