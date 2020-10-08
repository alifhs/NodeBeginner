// function countMyself() {
//     // Check to see if the counter has been initialized
//     if ( typeof countMyself.counter == 'undefined' ) {
//         // It has not... perform the initialization
//         countMyself.counter = 0;
//     }
//     // Do something stupid to indicate the value
//     ++countMyself.counter
// }
// // countMyself();
// // countMyself();
// // console.log(countMyself.counter);
// function x(){
//     function y(f){
//         if(typeof x.a == "undefined")
//                 x.a = [f];
//             else
//                 x.a.push(f); 
//     }
//     if( typeof x.a == "undefined"){
//         x.y = y;
//         return x;
//     }
//    if(typeof x.a != "undefined")
//         x.a[0]();
//         x.a[1]();
// }
// const router = x();
// router.y(()=>{
//     console.log("Hello");
// })
// router.y(()=>{
//     console.log("World");
// })
// router();
// // const roo = x();
// // console.log(roo.z)
// var str = "A";
// console.log(typeof str);
// function Aadasdadad(){
//     this.a = "sss";
// }
// var x = new Aadasdadad();
// console.log(x.constructor.name);
//event emitter code
// const events = require('events');
// //create an object of EventEmitter class by using above reference
// const em = new events.EventEmitter();
// // register a listener for the 'knock' event
// em.on('knock', function (data) {
//     console.log('Received the knock event: ' + data);
// });
// // trigger an event called 'knock'
// em.emit('knock', "who's there?");
// const x = ()=>{
//     console.log("Hello");
// }
// x.y = "hello";
// console.log(x.y)
// const path = require('path')
// let x = path.dirname("sada/ad/adaf/dfs")
// console.log(x)
// console.log(__dirname)
// console.log(path.dirname(require.main.filename))
// console.log(require.main.filename)
// function  x(){
//     console.log(x.dd);
// }
// x();
// x.dd = 4;
// module.exports = ()=>{
// }
// console.log(typeof module.exports)
"use strict";