
/***********************************scope =>{}****************************/


//var c=300
let a=300

//block_scope in {}

if (true)
{

let a =10
const b= 20
//console.log("INNER",a);

}


//golobal_scope


//console.log(a);
//console.log(b);
//console.log(c);

/*************************************Nested_scope********************************* */


function one()
{
    const username="vaibh"
    function two()
    {
        const website="tube"
        //console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if (true)
{

const username="vaibh"
if(username==="vaibh")

{
    const website="tube"
    //console.log(username+website);

}
//console.log(website);
}

//console.log(username);
