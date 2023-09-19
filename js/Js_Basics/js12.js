//      BASIC SYNTAX OF PROMISE 
// let promise = new Promise(function(resolve,reject){
//     // STATEMENTS
// })

let ticket = new Promise(function(resolve, reject){
    let isboarded = true;
    if(isboarded){
        resolve('ticket is booked');
    }
    else{
        reject('Tickt is not booked');
    }
})

ticket.then((data)=>{
    console.log('wow',data);
}).catch((data)=>{
    console.log('oh no', data);
})