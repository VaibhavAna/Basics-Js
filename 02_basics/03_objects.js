//singleton
//Object.create

//objects litearls

const mySym=Symbol("key1")


const A_user= {

   name: "vaibh",
   [mySym]:"mykey1",
   age:20,
   location:["Dubai"],
   isloggedIn:false,
   lastloginday:["mon"],

}


console.log(A_user.location)
console.log(A_user.isloggedIn)
console.log(A_user.lastloginday)
console.log(A_user["name"])
console.log(A_user[mySym])

A_user.location="punjab"
Object.freeze(A_user)
A_user.location="lahore"
console.log(A_user);


A_user.greeting=function(){
   console.log("hello");
}


A_user.greeting=function(){
   console.log(`hello, ${thisname}`);
}

console.log(A_user.greeting);
console.log(A_user.greetingTwo());
