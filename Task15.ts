let guestss:string[]=["Faizan", "Umer", "Haris", "Tayyaba"];
let unableToAttend:string="Haris";   //this guest can't attend dinner
let new_guestss:string="Awais";
let indexOfUnableToAttend: number = guestss.indexOf(unableToAttend);  //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
guestss.splice(indexOfUnableToAttend, 1,new_guestss);          // Remove the guest who can't attend and new guest is added at that index
for(let i=0;i<guestss.length;i++)
{
    console.log("Dear "+guestss[i]+", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}
console.log(unableToAttend+ " can not attend the dinner today due to some personal work");