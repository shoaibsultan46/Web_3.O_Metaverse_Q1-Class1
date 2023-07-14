let guest:string[]=["Faizan", "Umer", "Haris", "Tayyaba"];
let unableToAtend:string="Haris";   //this guest can't attend dinner
let new_guest:string="Awais";
let indexOfUnableToAtend: number = guest.indexOf(unableToAtend);  //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
guest.splice(indexOfUnableToAtend, 1,new_guest);          // Remove the guest who can't attend and new guest is added at that index

//Add new guests to list
guest.unshift('Ali');  // add at beginning
guest.splice(Math.floor(guest.length/2),0,'Usman');  //add in middle 
guest.push('Ahmer')     // add at end

console.log("Oooops! Sorry, we can only invite two people to dinner");
let x:number=guest.length;
for (i=0;i<(x-2);i++)
{
    let guest_removed:string=guest.pop()!;
    console.log(`Sorry, ${guest_removed}. We regret to inform you that we can't invite you to dinner.`);   
}
for (var i = 0; i < guest.length; i++) {
    console.log("Dear " + guest[i] + ", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}
guest.splice(0);          //remove the last two guest from list 
console.log("Guest List: "+guest);