/*
In the past JS has always had very little buil-in DATA STRUCTURES.
SO basically, we only had "OBJECT" and "ARRAYS"

But in ESX, two(2) more DATA STRUCTURES were finally introduced:
1- SETS
2- MAPS

So these are pretty common DATA STRUCTURES that already exists in other programming languages, and now ,they also exist in JavaScript.

*/


/////////////////////////////////   SETS   /////////////////////////////

// SET is basically just a collection of UNIQUE VALUES. So that means that a set can never have any duplicates And that property makes them useful in certain situations.  SETS are also ITERABLES       "The Main Use Case Of SETS is actually to Remove Duplicate Values Of Arrays. "

console.log('---------------------------------------------SETS------------------------------------');
//Creating SET
const orderSet= new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
    'Pizza',
    'Pizza',
]);
console.log('This will take only Unique Values: ',orderSet);

console.log(new Set('Arbaaaaaaaaaaaaazzz'));

//size is different from length of Array because length contain all the length even it is Unique or Not.
console.log('Getting Size of orderSet: ',orderSet.size);

//It is like include in Array but there is also diffrence
console.log('This will check the element Availibility: ',orderSet.has('Pizza'));
console.log('This will check the element Availibility: ',orderSet.has('Arbaaz'));

//Method
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.add('Brown Bread');
orderSet.add('Pizza');
console.log('Here we added some values: ',orderSet);

orderSet.delete('Garlic Bread');
console.log('Here we deleted Garlic-Bread: ',orderSet);

//clear
// orderSet.clear(); console.log('Here we use clear method to delete all: ' ,orderSet);


//SET is Iterables
for(const order of orderSet) console.log(order);


//  "The Main Use Case Of SETS is actually to Remove Duplicate Values Of Arrays. "
const staff =['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log('',staffUnique);
console.log(
    new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);
// They are not as important as ARRAYS.

/* If your goal is to actually store values in order and then retieve it, "Them the best use case, is to just use an ARRAY."

You wouldn't use set for that.

And so again, there's no need for getting values out of a set, BECAUSE idf you need it, then you will just use an ARRAY.
*/










/////////////////////////////////////////// MAPS  ////////////////////////////////////////////////////

/* MAPS are a lot more useful than SETS.  So what exactly is a map?

MAP is a DATA STRUCTURES that we can use to map values to keys. So, just like an object data is stored in key values pairs in MAPS.

 *Big Difference b/w OJECTS &MAPS  is that 
 --In MAPS,the keys can have any type and this can be huge.
 --So, in OBJECTS, the keys are basically always Strings. 
  But in MAPS, we can have any type of key. It could even be objects, or Arrays, or Other Maps.


*/
console.log('-----------------------------------------------  -MAPS-   ------------------------------------------------------------');

//Create MAP

const rest =new Map();  //Empty Map

//set method of MAP
rest.set('name','Arbaaz Khan');
rest.set(1,'Inaya');
console.log(rest.set(2, 'Ayush,Laxman'));

rest
    .set('Arbaz',['c','c++','Python','Ruby','Java','JavaScript'])
    .set('from',2019)
    .set('To','Still Going')
    .set(true,'I am Starting Coding')
    .set(false,'I make myself perfect')

console.log(rest.get('name'));    
console.log(rest.get(true));    
console.log(rest.get(1));


const time=21;
console.log(rest.get(time > rest.get('fom')&& time < rest.get('To')));


//Methods----------------------------
//
// has is like include 
console.log(rest.has('name'));
rest.delete(2);
//rest.clear();
rest.set([1,2],'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get([1,2]));





//// Maps are also ITRABLE ----------------
const question =new Map([
    ['Question', 'What is the best programming language in the World ?'],
    [1,'C++'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again!!'],
]);
console.log(question);



//Convert Object to Map
const tym={
    mon:{
        start:'2:30 PM',
        end:'3:00 PM',
    },
    tue:{
        start:'4:30 PM',
        end:'5:30 PM',
    },
    wed:{
        start:'3:00 PM',
        end:'4:00 PM',
    },
    thu:{
        start:'5:30 PM',
        end:'6:00 PM',
    },
    fri:{
        start:'3:00 PM',
        end:'3:30 PM',
    },
    sat:{
        start:'2:00 PM',
        end:'3:00 PM',
    },
};


//Convert Object to Map
console.log(Object.entries(tym));
const hoursMap = new Map(Object.entries(tym));
console.log(hoursMap);




// Above Map (Question):-
for(const [key, value] of question){
    if(typeof key ==='number') console.log(`Answer ${key}: ${value}`);
}