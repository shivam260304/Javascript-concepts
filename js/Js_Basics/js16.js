// BASIC EXAMPLE

// function z(){
//     var b =900;
//     function x(){
//         var a =7;
//         function y(){
//             console.log(a,b );
//         }
//         y();
//     }
//     x();
// }
// z();

// PRINT 1-5 WITHOUT USINF LET VARIABLE    

function x(){
    for (var i = 0; i <=5; i++) {
        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x*1000);
        }
        close(i);
    }
}
x();