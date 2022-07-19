'use strict'
/*Whenever we need the elements of an array individually then we can use the Spread operator. 

And that is useful when we write an array and when we need to pass multiple elements into a function.

There are mainly 2 use to spread opertor:------
> We use the spread to build new arrays. 
> or to pass multiple values into function.
*/

//Iterables:arrays,strings,maps,sets, but NOT objects.
//Spread operator is not applicable for objects.

console.log('----------------------Spread Operator--(...)--------------------');

const arr=[2,5,8];
const badNewArr =[4,2,arr[0],arr[1],arr[2]]; //This is bad but it will work

const newArr=[4,2, ...arr];  //This is Spread operator here
console.log(newArr);

console.log('arr', ...arr);             //This will spread the array elements individually with the help of Spread operator(...)
console.log('newArr: ', ...newArr);     //This will spread the array elements individually with the help of Spread operator(...) 
console.log('badArr: ', ...badNewArr);  //This will spread the array elements individually with the help of Spread operator(...)      


const hotel={
    name:'Ark',
    location:['Himachal','Ludhiana','Delhi','Alwar','Jaipur','Mumbai','Haryana'],
    room:['Simple','Classic','Luxary'],
    bh:['1BHK','2BHK','3BHK','3BHK with Swimming facility'],
    budget:[1800,2900,4400,5500],
    contact:[8287417016,7011136686,8710002820,8268734126],

    book:function(places,price,food){
        console.log(`Here is your best place to book a room,
        where they we room in ${places} at very cheap price ${price-199} only,
        except that We serve your ${food} for free at first time,
        Thank you. `)
    }
};

const arr0=[...hotel.location, 'Jammu','Goa'];
console.log('arr0: ' ,arr0);

//Copy array
const arrCopy=[...arr0];
console.log('arrCopy: ',arrCopy);

//Join 3 arrays
const arrJoin=[...hotel.location, ...hotel.room, ...newArr];
console.log("Join Array:  ",arrJoin);


//Strings (spread operator)
console.log('----------------------String with Spread --------------------------');
const str='Arbaaz';
const strToArr=[...str, ,'s'];
console.log('String to Array with the help of spread: ',strToArr); 

console.log('String with spread: ',...str);

const aboutHotel=[
    prompt("Let's Select Where You Want To Take Hotel: "),
    prompt("Your Budget: "),
    prompt("Free food service in which time (BreakFast/Lunch/Dinner): "),
];

// console.log(aboutHotel[0],aboutHotel[1],aboutHotel[2]);
console.log(...aboutHotel);
hotel.book(aboutHotel);



//Now ES6 gave some basic facility to use spread operator in Object also
console.log('----------------------------------Object ES6 spread operator---------------------------------------');
const newHotel={
    foundedIn:2021,
    ...hotel,
    foundar:'Arbaz khan'
};
console.log('newHotel: ',newHotel);

//Copy in oject using spread
const objCopy={...newHotel};
objCopy.name='Ask';
console.log('objCopy: ',objCopy); //it will not change the real array name.


