// var a = window.prompt("Tell me your name", "Name");
// window.alert("Hello "+a);


// func1(1,2,3);

// function func1(a,b,c){
//     console.log(a+b+c);
// }

// var func2 = function(){
//     console.log("Hello");
// }

// func2();
// func1("Hello ", " Boom ", "Shakala" );

// var arr = [10, 3, 20, 13, 50, 76, 17];

// function asc(a,b){
//     return a-b;
// }

// function dsc(a,b){
//     return b-a;
// }


// console.log("No order: ");
// for( i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.sort(asc);
// console.log("Ascending order: ");
// for(item in arr){
//     console.log(arr[item]);
// }



// arr.sort(dsc);
// console.log("Descending order: ");
// for( i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// var x = arr.every(function(val){
//     return val > 5;
// });

// console.log(x);

// var person = {
//     firstName: "Bob",
//     lastName: "Smith",
//     id: 5555,
//     fullName:function(){
//         return this.firstName+ " "+this.firstName;
//     },
// }

// function person(f,l,i,a){
//     this.firstName = f;
//     this.lastName = l;
//     this.id = i;
//     this.age = a;
    
// }

// class person{
//     constructor(f,l,i,a){
//         this.firstName = f;
//         this.lastName = l;
//         this.id = i;
//         this.age = a;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
    
      
//     greet() {
//         console.log(`Hello, my name is ${this.getFullName()}`);
//     }
//     add110(){
//         this.age += 10;
//     }
//     toJSON() {
//         return {
//             firstName: this.firstName,
//             lastName: this.lastName,
//             id: this.id,
//             age: this.age
//         };
//     }

//     static fromJSON(json) {
//         const data = JSON.parse(json);
//         return new person(data.firstName, data.lastName, data.id, data.age);
//     }
// }

// var pes1 = new person("HabuGuDu", "Da", 12, 23);
// var pes2 = new person("HabuGuDu", "DaDA", 1222, 23)
// var arr = [];
// arr.push(pes1);
// arr.push(pes2);

// console.log(arr);

// var per1str = JSON.stringify(pes1);
// var per1obj2 = JSON.parse(per1str);
// var per2str = JSON.stringify(pes2);
// console.log(per1obj2);
// const per1obj = person.fromJSON(per2str);
// console.log(per1obj);
// per1obj.greet();

// var b = document.getElementById("button");
// b.onclick = function(evt){console.log(evt.clientX+ " "+evt.clientY);}

// function runCommand(a){
//     document.getElementsByTagName("h1")[0].innerHTML = "ADD User"
//     console.log(a);
// }

// // document.getElementById("button").onclick = function(){
// //     runCommand(a);
// // }
// document.getElementById("button").onclick = ()=>{
//     document.getElementsByTagName("h1")[0].innerHTML = "ADD User"
    
// } 

document.getElementById("button").addEventListener(('click'),()=>{
    console.log("Hello")
})

document.getElementById("button").addEventListener(('click'),()=>{
    console.log("World")
})

window.addEventListener('keypress',(evt)=>{
    console.log(evt.keyCode)
})