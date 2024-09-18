var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
//for(let i=0; i<guest_list . length; i++){
//console.log('Respected Sir/Madam ' + guest_list [i] + ', \nWe invited you on dinner tomorrow.\nThank You\n')
//}
var not_present = 'farhan';
var new_guest = 'Babar';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ' , \nWe invited you on dinner tomorrow.we found big table so we deide to icnvite 3 more guest\nThank You\n');
}
console.log(" Mr. ".concat(not_present, " will not comming tomorrow dinner . "));
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ' , \nWe invited you on dinner tomorrow. we found big table so we deide to icnvite 3 more guest\nThank You\n');
}
