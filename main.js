//first code the function that will return the computer choice
//how it will work first it will call another function getrandom
//this function will return a random number from 0 to 2 
//which the compuetr choice function will use to return a string from an array
//holding the computers possible answers 
function getComputerChoice(){
    const Choices = ["rock", 'paper', 'scissors'];
    let index = getRandomIndex();
    return Choices[index];
}
function getRandomIndex(){
    return Math.floor(Math.random()*3) ;
}
for(let i = 0 ; i < 25 ; i++){
    console.log(getComputerChoice());
}
