//const tinderUser=new object()

const tinderUser={}
tinderUser.id="1234"
tinderUser.name="sam"
tinderUser.isloggedin=false

//console.log(tinderUser);

const regularuser={
    email:"vaibhav@gmail.com",
    fullname:{
        userfullname:{

    firstname:"ankur",
        lastname:"singh"
    }
}
}
//console.log(regularuser);

//**************************************Destructure**********************************************************/

const course={
    courename:"js in eng",
    price:"499",
    courseInstruct:"vaibh"

}

//Course.courseInstructor

const {courseInstruct:Instructor}=course
console.log(Instructor);


/**********************************************API****************************************************************/

/*{
    "name":"vaibh",
    "price":"499",


}*/

//Json
[
    {},
    {},
    {}
]

