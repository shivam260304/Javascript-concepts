function getCheese (callback){
    setTimeout(()=>{
        let cheese = "🧀" ;
        console.log('here is my ', cheese)
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback){
    setTimeout(()=>{
        let dough = cheese + "🍩";
        console.log('here is my dough', dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback){
    setTimeout(()=>{
        let pizza = dough + "🍕";
        console.log('Here is my pizza', pizza);
        callback(pizza);
    },2000);
}

getCheese((cheese) =>{
    makeDough(cheese,(dough)=>{
        bakePizza(dough,(pizza)=>{
            console.log('I got my pizza',pizza);
        })
    })
});
