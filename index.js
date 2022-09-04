let computerGuess;
let userGuess = [];
let userguessUpdate = document.getElementById("textOutput")
let userNumberUpdate = document.getElementById("inputBox")
let audio = new Audio('./audio/music.wav')

const init =()=>{
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);

    document.getElementById("gameArea").style.display="none";

    document.getElementById("newGameButton").style.display="none";

};

const startGame = ()=>{
    document.getElementById("welcomeScreen").style.display="none"
    document.getElementById("gameArea").style.display="block";
}

//reload game 

const newGameBegin = ()=>{
    audio.play();
    window.location.reload();
}

 // start Game 
const startNewGame = ()=>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
    
}
// main logic our app

const compareGuess =()=>{
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    
    userGuess = [...userGuess,userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
    
    // check the value low and hight 



    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
        userguessUpdate.innerHTML = "Your guess is Hight 🤪"
        userNumberUpdate.value="";
    }else if(userNumber < computerGuess){
        userguessUpdate.innerHTML = "Your guess is Low 🤕"
        userNumberUpdate.value="";
    }else{
        userguessUpdate.innerHTML = "It's Correct 😃"
        userNumberUpdate.value="";
        startNewGame();
    }
}else{
    if(userNumber > computerGuess){
        userguessUpdate.innerHTML = `You loose !! correct Number was ${computerGuess}`
        userNumberUpdate.value="";
        startNewGame();
    }else if(userNumber < computerGuess){
        userguessUpdate.innerHTML = `You loose !! correct Number was
         ${computerGuess}`
        userNumberUpdate.value="";
        startNewGame();
    }else{
        userguessUpdate.innerHTML = "It's Correct 😃"
        userNumberUpdate.value="";
        startNewGame();
    }
}


    document.getElementById("attemps").innerHTML=userGuess.length;
    
}





const easyMode = ()=>{
    audio.play();
    maxGuess = 10;
    startGame();
}


const  hardyMode = ()=>{
    audio.play();
    maxGuess = 5;
    startGame();
}

init();