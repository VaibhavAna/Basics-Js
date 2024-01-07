//For

for (let i = 0; i < 9; i++) 
{
    const element = i;
    console.log(element);
    if (element==5){
        console.log("5 is the best number")
    }

}
for (let i = 0; i <=10; i++) {
    console.log(`outer loop value:${iz}`);

for (let j = 0; j <=10; j++) {
  console.log(`inner loop value ${j} and inner loop ${i}`);
   console.log(i+'*'+j+'='+i*j);
    
}
}

//break and continue 

for (let index = 1; index <=10; index++) {
   if (index==5){
    console.log(`Detected 5`);
    break
   }
    console.log(`value of i is ${index}`);
}
