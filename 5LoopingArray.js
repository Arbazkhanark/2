'use strict'

//// Looping Array :- The For-Of Loop

const teachers={
    name:['Jashwant','Preeti','Dinesh','Kamalpreet','Dr Sharma','Ayushi','Harsha','Gytri'],
    deparment:['Computer Application','CSE','IT','Electronics','Mechanical','Electrical'],
    subjects:{
        Jashwant:'Web-Development',
        Preeti:'Data Structure',
        Dinesh:'FCIT',
        Kamalpreet:'Operating System',
        Dr_sharma:'Python',
        Ayushi:'C++',
        Harsha:'Node',
        Gytri:'Java',
    },
    salarys:{
        Jashwant:40000,
        Preeti:42000,
        Dinesh:55000,
        Kamalpreet:45000,
        Ayushi:52000,
        Harsha:60000,
        Dr_sharma:75000,
        Gytri:58000
    },
};

console.log('----------------------------------    Looping Array  ---------------------------------------');
console.log('-----------------------     For-of Loop     --------------------------------------');

const getTeacher=[...teachers.name , ...teachers.deparment];
console.log(getTeacher);

//Normal For Loop
console.log('-------   Normal For Loop  ----------');
for(let i=0;i<getTeacher.length;i++){
    console.log(getTeacher);
}


//For-of Loop :-Each element logged one by one, Because "The item variable is always the current element in each iteration."
console.log('---------  For-of Loop  ---------- ');
for (const item of getTeacher){
    console.log(item);
}

// log index instead of element using For-Of Loop:(ENTRIES) Each will come in Array eg. All [index, element];
for (const item of getTeacher.entries()){
    console.log(item);
}

//log through index from For-Of Loop
for (const item of getTeacher.entries()){
    console.log('Index 0: ',item[0] , '              Index 1: ', item[1] );
}




/////////////////////////////////////////////////////////////////////////////
//If we want to remove that ^ from array 
console.log('------------------------ 1.Remve From Array --------------------------');
for(const item of getTeacher.entries()){
    console.log( `${item[0]+1}:${item[1]}` );
}

//// 2nd way:  If we want to remove that ^ from array USNIG DESTRUCTURING
console.log('------------------ 2. Remve From Array Using DESTRUCTURING --------------------');
for (const [itemIndex,itemElement] of getTeacher.entries()){
    console.log(itemIndex,itemElement);
}






// NEW  ENHANCED OBJECT LITERALS
console.log('----------------------------------------------------------- NEW  ENHANCED OBJECT LITERALS  -------------------------- ');
/* Now ES6 introduced three ways, which make it easier
to write object literals like this.
And so let's go through them one by one now, first off let's
say that we have an object that is outside of this object.
So let's take this one and create a separate object with it.
so that's a very handy enhancement

ES6 introduced three(3) ways, which make it easier to write object literals 
*/


//Ways:

// 1. First way: Let's take the oject from main object and create outside of that main object,  (But we have make that other object before the main object)
const weekdays=['mon','tue','Wednesday','Thusrday','friday','satuarday'];
const MotelOpeningHours= {
    [weekdays[2]]:{             //we make weekdays array below🤭!!!
        open:12,
        close:22,
    },
    [weekdays[5]]:{
        open:11,
        close:23,
    },
    [weekdays[6]]:{
        open:0, //Open 24 hours
        close:24,
    },
};

const motel={
    name:'Ark Motel',
    location:['Uttar Pradesh','Muhali','Himachal','Ludhiana','Delhi','Alwar','Jaipur','Mumbai','Haryana'],
    room:['Simple','Classic','Luxary','Special Rooms'],
    bh:['1BHK','2BHK','3BHK','3BHK with Swimming,Gyming,Entertaining facility'],
    budget:[1800,2900,4400,5500],
    contact:[8287417016,7011136686,8710002820,8268734126],

    motelStarterMenu:['Veg Momos', 'Indian Vegetable Momos','Steamed Wontons','Dragon Rolls'],
    MotelMainMenu:['Butter Chicken','Palak Paneer','Pizza','Pasta','Risotto'],
    
    // ES6 ENHANCED OBJECT LITERAL
    MotelOpeningHours,
    // openingHours: {
    //     thu:{
    //         open:12,
    //         close:22,
    //     },
    //     fri:{
    //         open:11,
    //         close:23,
    //     },
    //     sat:{
    //         open:0, //Open 24 hours
    //         close:24,
    //     },
    // },
};


// 2. Second way: second enhancement to object literals "is about Writing methods"
// Only Syntax change
const students={
    name:['Arbaaz','Ayush','Laxman','Ajay','Soarabh','Sonu'],
    roll:[1,2,3,4,5,6],
    subject:['JavaScript','C++','Python','Ruby','Java','Python'],
    marks:[80,91,71,92,78,56],
    teacher:['Prof. Preeti','Ast Prof. Yashwant','Prof. Jaswant','Prof. Dr Sharma'],

    // getInfo: function(fname,froll,fmarks){
    //     return [this.name[fname]],[this.roll[froll]],[this.marks[fmarks]];
    // },

    getInfo(fname,froll,fmarks){
        return [this.name[fname]],[this.roll[froll]],[this.marks[fmarks]];
    },
};
console.log("Some brower can't support that");
students.getInfo('arbaz',6,78);



// 3. Third ENHANCMENT:-- We can now Actually compute property names instead of having to write them out manually and literally.  compute(Calculate🤫).

// const weekdays=['mon','tue','Wednesday','Thusrday','friday','satuarday'];              //This same array is above, we put that here because this will not work after object, This should be before Object.
//We make some change above in MotelOpeningHours .









// Looping Objecs: Object Keys,Values,And Entries
/* So we learned about the for loop to loop over a race, which remember is an Iterable, 
But we can also loop over object,which are not Iterable, But in an Indirect way.

Now we have different options here,
depending on what exactly we want to loop over. So do we want to Loop over the objects,property names over the values or both together
*/

const schoolGamePeriod={
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

/// Let's start by simply looping over property names. And so remember they are also know as Keys

//////////////property names 
//Put Objects into Array
const properties=Object.keys(schoolGamePeriod);
console.log('This was an Object, But now it is in Array: ',properties);

let openStr=`We are open on ${properties.length} days: `;
for(const days of properties){
    openStr +=`${days}, `;
}
console.log(openStr);

//Object looping
for(const day of Object.keys(schoolGamePeriod)) console.log('Object is not Iterator, But we iterate the Object: ',day);


//// Property VALUES
const values=Object.values(schoolGamePeriod);
console.log('Using Values: ',values);


////Entries OBJECT
const entries= Object.entries(schoolGamePeriod);
console.log(entries);

for(const x of entries){
    console.log('Using entries: ',x);
}

for(const [key,{start,end}] of entries){     ////// Destructuring
console.log(` On ${key} we start Playing at ${start} and end at ${end} `);
}