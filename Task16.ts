let guestsss:string[]=["Faizan", "Umer", "Haris", "Tayyaba"];
let unableToAtttend:string="Haris";   //this guest can't attend dinner
let new_guestsss:string="Awais";
let indexOfUnableToAtttend: number = guestsss.indexOf(unableToAtttend);  //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
guestsss.splice(indexOfUnableToAtttend, 1,new_guestsss);          // Remove the guest who can't attend and new guest is added at that index

//Add new guests to list
guestsss.unshift('Ali');  // add at beginning
guestsss.splice(Math.floor(guestsss.length/2),0,'Usman');  //add in middle 
guestsss.push('Ahmer')     // add at end


for(let i=0;i<guestsss.length;i++)
{
    console.log("Dear "+guestsss[i]+", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}

console.log("Huurah! Good News. We got a big dinner table.");