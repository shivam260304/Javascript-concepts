let cart = ["iphone","s21","shoes","goggles"];

let promise = createcOrder(cart);

promise.then((orderID)=>{
    console.log(orderID);
    return orderID;
})
.catch((err)=>{
    console.log(err.message);
})
.then(function(orderID){
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
});



function createcOrder(cart){
    const pr = new Promise((resolve, rejecet)=>{
        if(!validate(cart)){
            const err = new Error("Card is not valid");
            rejecet(err);
        }
        const orderID = "1234";
        if(orderID){
            setTimeout(() => {
                resolve(orderID);
            }, 5000);
        }
    })
    return pr;
}

function validate(cart){
    return false;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("Payment successfull");
    });
}