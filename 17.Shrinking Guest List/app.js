var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
//for(let i=0; i<guest_list . length; i++){
//console.log('Respected Sir/Madam ' + guest_list [i] + ', \nWe invited you on dinner tomorrow.\nThank You\n')
//}
var not_present = 'farhan';
var new_guest = 'Babar';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list . length; i++){
//console.log('Respected Sir/Madam ' + guest_list [i] + ', \nWe invited you on dinner tomorrow.\nThank You\n')
//}
console.log(" Mr. ".concat(not_present, " will not comming tomorrow dinner . "));
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
// for(let i=0; i<guest_list . length; i++){
//console.log('Respected Sir/Madam ' + guest_list [i] + ' , \nWe invited you on dinner tomorrow. we found big table so we deide to icnvite 3 more guest\nThank You\n')
//}
console.log("\nUnfortunately we can not arrange big table , Only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam. ".concat(remove_guest, " you are not invited for dinner,"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ' , \nWe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
