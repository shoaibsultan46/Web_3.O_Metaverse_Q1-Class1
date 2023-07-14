function show_magicianss(magicianss: string[]):void {
    for(let i:number=0;i<magicianss.length;i++){
      console.log(magicians[i]);
    }
  }
  function make_greatt(magicianss: string[]):void{
    for (let i = 0; i < magicianss.length; i++) {
        magicians[i] = "the Great " + magicians[i];
        console.log(magicians[i]);
    }
  }
  
  // Calling the function to create album objects
  let magiciansss:string[]=['Harry Houdini', 'David Copperfield', 'Criss Angel', 'Penn Jillette', 'Teller'];
  show_magicianss(magiciansss);
  make_greatt(magiciansss);