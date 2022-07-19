'use strict'

const student={
    name:['Arbaaz','Ayush','Laxman','Ajay','Soarabh','Sonu'],
    roll:[1,2,3,4,5,6],
    subject:['JavaScript','C++','Python','Ruby','Java','Python'],
    marks:[80,91,71,92,78,56],
    teacher:['Prof. Preeti','Ast Prof. Yashwant','Prof. Jaswant','Prof. Dr Sharma'],

    getInfo: function(fname,froll,fmarks){
        return [this.name[fname]],[this.roll[froll]],[this.marks[fmarks]];
    },

};

/* Normal way to assign (Without Destrucring Array)

let a=student.name[0];
let b=student.name[1];
let c=student.name[2];
let d=student.name[4];
console.log('a',a,b,c,d);
*/

//With Destrucing
let [x,,z,y]=student.name;
console.log('x: ',x,'z: ',z,'y: ',y);
console.log(x,z,y);

// Swaping
console.log('Without Destrucring');
let [marksA,marksB]=student.marks;
console.log('Is that Swap? A:',marksA,'B: ',marksB);
const temp=marksA;
marksA=marksB;
marksB=temp;
console.log('A: ',marksA,'B: ',marksB);


console.log('--------------------');
console.log('With Destrucring');
let [rollA,rollB]=student.roll;
console.log('Is that Swap? A:',rollA,'B: ',rollB);
[rollA,rollB]=[rollB,rollA];
console.log('A: ',rollA,'B: ',rollB);



console.log('---------Method/Function-------------');
const [Name,Roll,Marks]=student.getInfo(1,2,3);
console.log(Name,Roll,Marks);





///Nested array with destrucring
console.log('--------Nested array---------');
const nested= [2,1,3,[8,6]];
const[i,,j,k]=nested;
console.log(i,j,k);
//if we want to print individually from nested
const [a,,b,[c,d]]=nested;
console.log(a,b,c,d); 



//Default Values
let [p,q,r]=[9,5];
console.log(p,q,r); ////here r=undefined  but if we do this~
[p=1,q=1,r=1]=[7,4];
console.log(p,q,r);//Now  r=1  by default


