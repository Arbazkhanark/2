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

//// 2nd way:  If we want to remove that ^ from array 
console.log('------------------ 2. Remve From Array --------------------');
for (const [itemIndex,itemElement] of getTeacher.entries()){
    console.log(itemIndex,itemElement);
}

