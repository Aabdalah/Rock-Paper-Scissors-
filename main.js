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
//second write a function that plays one round
//how will it work it will take two pramerters 
//playerselection and computer selection
//it will compare both but first 
//the string from the player needs to be checked 
//does it fall within the three possible choices
//and then if it does will make sure it is lower case 
//finally we compare based on the rulles to d
//declare the winner 
function play(playerSelection,computerSelection){
    let winner;
    if(checkChoice(playerSelection)){
        playerSelection = toLowerCase(playerSelection);
        switch(playerSelection){
            case "rock":
                if(computerSelection=="scissors"){
                    winner="You Win!"
                }else if(computerSelection=="paper"){
                    winner="You Lose!"
                }else if(computerSelection=="rock"){
                    winner="It Is A Tie!"
                }
                break;
            case "paper":
                if(computerSelection=="scissors"){
                    winner="You Lose!"
                }else if(computerSelection=="paper"){
                    winner="It Is A Tie!"
                }else if(computerSelection=="rock"){
                    winner="You Win!"
                }
                break;   
            case "scissors":
                if(computerSelection=="scissors"){
                    winner="It Is A Tie!"
                }else if(computerSelection=="paper"){
                    winner="You Win!"
                }else if(computerSelection=="rock"){
                    winner="You Lose!"
                }
                break;        
        }
        if(winner == "You Win!"){
            return winner+playerSelection+" beates "+computerSelection;
        }else if(winner == "You Lose!"){
            return winner+computerSelection+" beates "+playerSelection;
        } else{
            return winner+playerSelection+" ties with "+computerSelection;
        }
    }else{
        console.log("Invalid choice, please chosse rock or papper or scissors");
    }
}
//first the function that turn the player choice to lower case
function toLowerCase(s){
    return s.toLowerCase();
}
function checkChoice(s){
    const Choices = ["rock", 'paper', 'scissors'];
    let str = toLowerCase(s);
    return (Choices.includes(str));
}

