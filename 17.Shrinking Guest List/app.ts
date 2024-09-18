let guest_list : string[] = ['ali' , 'farhan' , 'raza' ,'ayesha'];
//for(let i=0; i<guest_list . length; i++){

//console.log('Respected Sir/Madam ' + guest_list [i] + ', \nWe invited you on dinner tomorrow.\nThank You\n')

//}

let not_present : string = 'farhan';
let new_guest : string = 'Babar';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list . length; i++){

//console.log('Respected Sir/Madam ' + guest_list [i] + ', \nWe invited you on dinner tomorrow.\nThank You\n')

//}

    console.log(` Mr. ${not_present} will not comming tomorrow dinner . `)

    guest_list.unshift('shaheen' , 'sarfaraz' , 'rizwan');

   // for(let i=0; i<guest_list . length; i++){

//console.log('Respected Sir/Madam ' + guest_list [i] + ' , \nWe invited you on dinner tomorrow. we found big table so we deide to icnvite 3 more guest\nThank You\n')
        
    //}

console.log(`\nUnfortunately we can not arrange big table , Only two people allow.`)
while(guest_list.length>2){     
let remove_guest = guest_list .pop();
console.log(`sorry Sir/Madam. ${remove_guest} you are not invited for dinner,`);
    
       }

       for(let i=0; i<guest_list . length; i++){

        console.log('Respected Sir/Madam ' + guest_list [i] + ' , \nWe invited you on dinner tomorrow.\nThank You\n')
                
            }
    guest_list.splice(0,2)
    console.log(guest_list)             



