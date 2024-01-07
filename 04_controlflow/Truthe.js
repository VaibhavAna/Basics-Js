const usermail="vaibh.ai"

if(usermail){
    console.log("got user mail");

}else{
    console.log("not have mail");
}

//false value

false,0,-0,BigInt ,0n,"",null,undefined,NaN

//truthy value

//tuthy,"0",'false',"truthy",[],{},function(){}


if (usermail.length===0){
    console.log("array is empty");
}

const emptyobj={}
if (Object.keys(emptyobj).length===0){
    console.log("obj is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 =4 ??6
//val1=null??3
//val1=undefined ?? 10
//val1=null??10??13

console.log(val1);

//Terniary Operator 

//Condition ?true:false

const iceTeaprice=100
iceTeaprice>=80? console.log("less then 80"):console.log("more than 80")

