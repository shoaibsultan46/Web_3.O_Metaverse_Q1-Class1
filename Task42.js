function show_magicianss(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
        console.log(magicians[i]);
    }
}
// Calling the function to create album objects
var magicianss = ['Harry Houdini', 'David Copperfield', 'Criss Angel', 'Penn Jillette', 'Teller'];
show_magicianss(magicianss);
make_great(magicianss);
