const p = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("resolved");
    }, 5000);
})

// async function getData(){
//     p.then((res)=>{
//         console.log(res);
//     })
// }


//  USING await INSTEATD OF .then
async function getData(){
    console.log("Hello World");
    const val = await p;
    console.log("Namaste Javascript");
    console.log(val);
}

const data = getData();