'use strict'

/* The rest pattern looks exactly like the spread operator. It has the same syntax with three dots but it actually does the opposite of the spread operator. 

> To collect multiple elements and condense them into an array.

The spread is to unpack an Array.
The rest is to pack elementsinto an Array.
*/


//SPREAD, because on RIGHT side of assignmentOperator(=)
const Sarr=[1,2, ...[3,4]];

//REST, because on LEFT side of assignmentOperator(=)
const [A,B, ...others]=[1,2,3,4,5];
console.log('A: ',A,' B: ',B,' Others: ',others);

console.log('---------------------')
const food={
    startFood:['paratha','Chai/Coffe','Snacks','Oats','Dahi'],
    MainFood:['Thali','Rice','Veg Food', 'Non-veg Food'],
    time:{
        all:{
            open:'open 8:00 O clock, otherwise Acc to Days',
            close:'close 10:30'
        },
        mon:{
            open:'8:00',
            close:'10:00'
        },
        tue:{
            open:'According to Food timing',
            close:'10:30'
        },
        fri:{
            open:'9:00',
            close:'10:30'
        },
        sun:{
            open:'6:00',
            close:'11:30'
        }
    },
    // Order:function(){
    //     console.log('Order Fodd!');
    // }

};

//REST element must be last element like below, we can't put like this:- const[pizza, , risotto, ...otherFood, bread];.
const [pizza, ,risotto, ...otherFood]=[...food.MainFood, ...food.startFood];
console.log(pizza,risotto,otherFood);



//REST is also used in OBJECTS
const {fri, ...weekDays }={...food.time};
console.log(fri,weekDays);
//Here we declare 2 variables fri and weekDays, fri take fri from food object and REST of the variables goes to weekDays.





// REST with Functions
const add =function(...numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i];   
    }
    console.log(sum);
};

add(2,3);
add(5,5,2);
add(7,3,5,3,2,5,12);
 
///////////
const tempp=[3,5,7];
add(...tempp);



//Nullish: null and undefined (NOT 0 or '')
//Nullish Operator (??):-- its like if else,   if food.Order(available than it will execute) ?? (if not available than execute that) ;
console.log('--------------------------------NULLISH OPERATOR-----------------------------------')
// food.Order=10;
const foodOrder=food.Order ?? 'There is no option to order Food( No method available of Oder)';
console.log(foodOrder);




const hotel1={
    name:'King Level',
    numGuests:0,
};
const hotel2={
    name:'The Ark',
    owner:'Arbaz khan',
};

// hotel1.numGuests=hotel1.numGuests||10;
// hotel2.numGuests=hotel2.numGuests||10;

////////////////////// OR ASSIGNMENT OPERATOR (||=) /////////////////////////

hotel1.numGuests ||=10;
hotel2.numGuests ||=10;

console.log('Using OR operator because here 0 is not Execute: ',hotel1);
console.log(hotel2);



/////////////////////////////// NULLISH ASSIGNMENT OPERATOR (??=)///////////////////////////////
console.log('-------------------------NULLISH OPERATOR---------------------------------')
// hotel1.numGuests ??= hotel1.numGuests||10;
// hotel1.numGuests ??=10;                     //Uncomment that for checking
console.log('Using Nullish operator because 0 is falsy number: ',hotel1);


//////////////////////////////// AND ASSIGNMENT OPERATOR (&&=)/////////////////////////////////////////

// hotel1.owner=hotel1.owner && '<ANONYMOUS>';
// hotel2.owner=hotel2.owner && '<ANONYMOUS>';

hotel1.owner &&= '<ANONYMOUS>'
hotel2.owner &&= '<ANONYMOUS>'
console.log('Using AND ASSIGMENT (&&=): ',hotel1); 
console.log('Using AND ASSIGMENT (&&=): ',hotel2); 

