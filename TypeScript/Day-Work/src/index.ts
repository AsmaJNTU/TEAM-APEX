// let sales: number=454_665_876;
// let course:string='TypeScript';
// let is_published: boolean=true;

//Arrays
let fruits: string[] = ["Apple", "Banana", "Orange"];
// console.log(fruits[1]); // Output: Apple


//Tuples
let nums: number[] = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4]
// console.log(nums)

const enum size{small=1,medium,large};
let mySize:size=size.large;
// console.log(mySize);

//Functions
// function hello(value:string):void{
//     console.log("Hello ",value);
// }//function with parameters and return type


// function sum(a:number,b=10):number{
//     return a+b;
// }


function calculateTax(income:number,taxYear=2024):number{
    if(taxYear<2025)
        return income*1.2;
    return income*1.3;
}

//  console.log(calculateTax(10000))
// console.log(calculateTax)

//Objects
let employee:{
    readonly id:number,
    name:string,
    retire:(date: Date)=>void
} = {
    id:1,
    name:'asma',
    retire:(date:Date)=>{
        console.log(date);
    }
}

// Type Aias
type Employee={
    readonly id:number,
    name:string,
    retire:(date: Date)=>void

}
let employee1: Employee={
    id:1,
    name:'asma',
    retire:(date:Date)=>{
        console.log(date);
    }
}

// Union Types
function kgToLbs(weight: number | string):number{
    //Narrowing
    if(typeof weight==='number')
         return weight*2.2;
        else
         return parseInt(weight)*2.2;
    }

    kgToLbs(10);
    kgToLbs('10kg');

// Intersection Types
type Draggable={
    drag:()=> void
};

type Resizable={
    resize: ()=>void
};

type UIWidget = Draggable&Resizable;
let textBox: UIWidget={
    drag:()=>{},
    resize:()=>{}
}


// Literal Types(exact.specific)
type Quantity=50|100;
let quantity:Quantity=100;

type Metric ='cm'|'inch';

// NULLABLE Types
function greet(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(undefined);

