const user={
    username:"vaibh",
    price:999,

    welcomemessage:function(){
        //console.log(`${this.username},welcome to website`);
//console.log(this);
    }
}
user.welcomemessage()


/*function duo(){
    let username="vaibh"
    console.log(this.username);
}*/
const chai=() => {
    let username="vaibh"
   //console.log(this.username);
}

/*const addTwo =(num1,num2) =>({username:"vaibh"})
console.log(addTwo(3,4))*/





//implicit return is used when function run without using return //

//mostly used in react 
const addTwo =(num1,num2) =>  num1 + num2

console.log(addTwo(3,4))
