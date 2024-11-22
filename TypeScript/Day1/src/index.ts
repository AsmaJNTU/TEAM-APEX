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

 console.log(calculateTax(10000))
// console.log(calculateTax)



