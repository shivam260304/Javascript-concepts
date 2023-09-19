// This keyword's scopes are-->

// Global - Window
// Function - Window
// Method - Object


function abc(val1, val2, val3){
    // console.log(this);      //Line 2 & line 11 will show window function to (this)
    console.log(this.age,val1,val2,val3);
}

let obj={
    age:19
}

// call
// abc.call();
abc.call(obj,1,2,3);

// apply
abc.apply(obj, [1,4,5]);        // Similar to the call but need to pass in array form

// bind
let a = abc.bind(obj, [1,1,1]); //Bind will not show anything but it get binded in the variable a 
a();
