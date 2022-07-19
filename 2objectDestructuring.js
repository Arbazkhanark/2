'use strict'
console.log('----------------------OBJECT-----------------------------------');
const restaurant={
    name:'Ark',
    location:'Delhi , Alwar',
    categories:['Indian Thalis','Pizzeria','Vegetarian','Non-Vegetarian','Organic'],
    starterMenu:['Veg Momos', 'Indian Vegetable Momos','Steamed Wontons','Dragon Rolls'],
    mainMenu:['Butter Chicken','Palak Paneer','Pizza','Pasta','Risotto'],
    openingHours: {
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0, //Open 24 hours
            close:24,
        },
    },

    order:function(starterIndex,mainIndex){
        return this.starterMenu[starterIndex],this.mainMenu[mainIndex];
    },

    //We make this function who has object parameters that's it is  inside of curly bracec.
    orderDelivery:function({starterIndex=1,mainIndex=0,address,timing='20:00'}){
        console.log( `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be Delivered to ${address} at ${timing}`);

    },


};


const { name,openingHours,categories}=restaurant;
console.log('Name: ',name,'Timing: ',openingHours,'categories: ',categories);


//change variable name
console.log('---------------------------------changing variable names---------------------------------------');
const {
    name:restaurantName,
    openingHours:timing,
    categories:tags,
}=restaurant;
console.log(restaurantName,timing,tags);


//Mutating variables
console.log('----------------------------Mutating varibles in Object-------------------------------');
let num1=100;
let num2=82;
console.log('Before:-- Num1: ',num1,'num2: ',num2);
const obj={num1:4,num2:18,num3:34}; //Object should have same variable to reasign value.
({num1,num2}=obj);  //here we have put this code into bracets otherwise it cause an error.
console.log('After:--- Num1: ',num1,'num2: ',num2);



//nested objects 
const { 
    fri:{open, close},
} =openingHours;
console.log('Friday:-- open:', open,'close: ',close);


const { sat:{open:satO , close:satClose}}=openingHours;
console.log('Satuarday:-- open: ',satO,'Close: ',satClose);


const {
    thu:{open:o , close:cl},
} = openingHours;
console.log('Thursday:-- open:', o,'close: ',cl);



//obj function call
console.log('-----------------Function/Method Object-----------------');
restaurant.orderDelivery({
    timing:'22:10',
    address:'D-7/21 Opp Uttam Nagar Terminal New Delhi',
    mainIndex:1,
    starterIndex:0
});

restaurant.orderDelivery({
    address:'g-8/43 Janak puri disctt center',
    starterIndex:3,
});

restaurant.orderDelivery({
    timing:'19:30',
    starterIndex:2,
    mainIndex:0,
    address:'a-43/b0 Jeewan Park JanakPuri'
});