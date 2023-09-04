// function myfunc(){
//     A = "global"
//     var v = "var v"
//     let le = "let"
//     console.log(A);
//     console.log(v);
//     console.log(le);
//     console.log("Demonstrating diff between var and let, scope")
//     for(var i = 0; i < 10;i++){
//         console.log(i);
//     }
//     console.log("i still exist even out of for loop, sice it is var and is still within function scope and it is "+i)
//     console.log("Function scope->var")
//     for(let j = 0; j < 10;j++){
//         console.log(j);
//     }
//     console.log("j doesn not exist out of for loop, sice it is let and not within for loop scope, block scope ->let")
//     // console.log(j);
    
// }
// myfunc();
// console.log("var v out of scope out of function")
// // console.log(V)
// console.log(A);
// var cb1 = ()=>{console.log("cb1")};
// var cb2 = ()=>{console.log("cb2")};

// console.log("Start.....");
// setTimeout(cb1,1000)
// setTimeout(cb2,500);
// console.log("End.....");