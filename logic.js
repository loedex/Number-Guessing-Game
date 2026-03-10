let secretNumber;
let attempts = 0;

//DOM Elements
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const attemptsCount = document.getElementById('attemptsCount');


//Initialize game on load
window.addEventListener('load',initGame);

function initGame(){
    secretNumber = Math.floor(Math.random()*100) + 1;
    attempts = 0;

    //Reset UI
    attemptsCount.innerText = attempts;
    guessInput.value= '';
    guessInput.focus();
    guessInput.disabled = false;

    //Hide Message Box
    messageBox.className = 'message-box hidden';

}

function showMessage(msg,type){
    messageText.innerText = msg;
    messageBox.className = `message-box msg-${type}`;
}

function handleGuess(){
    const userGuess = parseInt(guessInput.value);

    //input validation
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        showMessage('Please enter a valid number between 1 and 100.','error');
        return;
    }
    attempts++;
    attemptsCount.innerText = attempts;

    if(userGuess === secretNumber){
        showMessage(`Correct! You guessed it in ${attempts} attempts!`,'success');
    }
    else if(userGuess < secretNumber){
        showMessage('Too Low! Try a higher number.','warning');
    }
    else{
        showMessage('Too high! Try a lower Number.','warning');
    }
    guessInput.value='';
}


//Even Listeners
guessBtn.addEventListener('click', handleGuess);
guessInput.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        handleGuess();
    }
});