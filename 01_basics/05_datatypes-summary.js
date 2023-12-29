//Primitive

//7 types: String,Number,Boolean,Null, Symbol 
const score = 100
const ScoreValue =100.3

const isLoggedIn=false

const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id=== anotherId);



//Reference (Non primitive)

//Arrays,objects,function

const heros=["shaktiman","nagraj"];
let myObj={
   name:"vaib",
    age:22,
}

const myFunction=function(){
    console.log("hello world")
}



console.log(typeof BigNumber);

//***************************************************** */

// Stack (Primitive ),Heap (Non primitive)

let myyoutubename="absc"

let anothername=myyoutubrname
anothername="chai"

console.log (myyputubename);
console.assertlog(anothername);