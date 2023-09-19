// This is a comman array we're going to use in all the examples
let arr =[1,2,3,4,5];


//  MAPPING --> Used to map each elements

// ex1) -> double all the elements in the array
let double = arr.map((x)=>{
    return x*2;
});
console.log(double);

// ex2) -> convert all the elements in the Binary form
let binary = arr.map((x)=>{
    return x.toString(2);
});
console.log(binary);


//  FILTERING --> filter some elements

// ex 1) -> return all odd elemets
let odd = arr.filter((x)=>{
    return x%2==1;
});
console.log(odd);

// ex2) -> return elements greater than 3
let output = arr.filter((x)=>{
    return x>3;
});
console.log(output);


//  REDUCING -> Used to return one element through iterating

// ex1) -> return max element
let max = arr.reduce(function (max,cur){
    if(cur>max){
        max = cur;
    }
    return max;
},0);
console.log(max);

// ex2) -> find sum of all the element in given array
let sum = arr.reduce((sum,cur)=>{
    sum = sum + cur;
    return sum;
},0);
console.log(sum);


// Tricky questions on map(), filter() and reduce()!
let users =[
    {firstname : "Shivam", lastname:"Rajput", age : 19 },
    {firstname : "Virat", lastname : "kohli", age: 34},
    {firstname : "Aman", lastname : "Sharma", age:20},
    {firstname : "Abhishek",lastname: "Sharma", age: 19}
];

// Return full anme of all the users

let names = users.map((x)=>{
    return x.firstname + " " + x.lastname;
})
console.log(names);

// Return name of the people whose age is 19

let name = users.filter((x)=>x.age<=19).map((x)=>x.firstname);
console.log(name);;