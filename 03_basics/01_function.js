
//sayMyName

/*function addtwonumber(number1,number2)
{
//console.log(number1+number2);
}
*/
//const result = addtwonumbers(3,5)
// console.log("Result:",result);


/****************************************************************************/


function loginUserMessage(username){
    if(username=== undefined){
        //console.log("pls enter rollno");
        return
    }
return `${username} just logged in`

}
//console.log(loginUserMessage("vaibh"))
//console.log(loginUserMessage())

function calculatecartprice(val1,val2,...num1){
    return num1
}
//console.log(calculatecartprice(200,400,600,2000))


const user ={
    username:"vaibh",
    price:500
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject({
    username:"vaibh",
    price:399
})


const MyNewArray=[200,300,400]
function returnsecvalue(getArray){
    return getArray[1]
}
console.log(returnsecvalue([200,300,400]));