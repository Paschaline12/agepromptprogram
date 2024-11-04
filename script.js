//IF statements: They execute a code when a set of conditions is true;
// when the set of conditions is not true, then they do something else. 

//let years=13;

//if(years>=18){
   // console.log("You are old enough to enter this site!");
//}
//else{
  //  console.log("You are a minor, you can't enter this site!");
//}
//let isStudent = true;
//if(isStudent){
  //  console.log("I am a student");
//}
//let age = 19;
//let hasLicence = false;
//if (age >= 16){
  //  console.log("You are old enough to have a drivers licence");
    //if(hasLicence){
    //console.log("You are allowed to hit the road and drive");
    //}
    //else{
      //  console.log("Please go to the driving school and have your licence! Thank you.");
    //}
//}
//else{
  //  console.log("You must be 16 years old to drive");
//}
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

if(age >= 100){
    resultElement.textContent = ("You are TOO OLD to enter this site");
}
   else if (age >= 18){
    resultElement.textContent = ("You are old enough to enter this site.");
    }
    else if (age == 0){
        resultElement.textContent = ("You have just been born!");
    }
    else if (age <= 0){
        resultElement.textContent = ("Your age can't be less than zero");
    }  

else{
    resultElement.textContent = ("You must be 18+ to enter this site");
}
}