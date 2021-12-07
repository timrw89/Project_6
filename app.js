
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let start = document.querySelector('.btn__reset');
let missed = null;
let overlay = document.getElementById('overlay');

//hide start screen overlay

const reset = button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}
reset(start);

// Phrases to call
const phraseArray = [
    'kneehigh to a tadpole',
    'sings like a bird',
    'as big as a whale',
    'quiet as a mouse',
    'stinks like a skunk',
    'happy as a clam'
];

//return random phrase from an array
const getRandomPhraseAsArray = arr => {
    let items = '';
    let randoIndex = Math.floor(Math.random() * arr.length);
    items += `${arr[randoIndex]}`
    let phraseAsArray = items.split('');
    return phraseAsArray;
}

// console.log(getRandomPhraseAsArray(phraseArray));
// adds the letters of a string to the display
const addPhraseToDisplay = arr =>{
    let letters = getRandomPhraseAsArray(arr);
    let ul = document.querySelector('ul');
    for (let i = 0; i < letters.length; i++){
        let li = document.createElement('li');
        li.textContent = letters[i];  
        ul.appendChild(li);
        if ( letters[i] === " ") {
            li.className = "space";
        } else {
            li.className = "letter";
        }
    }   
}

addPhraseToDisplay(phraseArray);

//check if a letter is in the phrase
const checkLetter = button => {
    let phraseLetters = document.getElementsByClassName('letter');
    let matchLetters = null;
    for (let i = 0; i < phraseLetters.length; i++){
        if ( button === phraseLetters[i].textContent) {
            phraseLetters[i].className = 'letter show';
            matchLetters = button;
        }
    } 
    return matchLetters;
} 


qwerty.addEventListener('click', e => {
    let answer = checkLetter(e.target.textContent);
    if (e.target.tagName === "BUTTON" && e.target.className !== "chosen") {
        e.target.className = 'chosen';
        checkLetter(e.target.textContent);
        
    } if (e.target.textContent !== answer && e.target.tagName === "BUTTON" ) {
        const li = document.querySelector('.tries');
        ol = li.parentNode;
        ol.removeChild(li); 
        missed++;
        // console.log(missed);
    }
    //Check if game is won or lost and reset
    const CheckWin = () => {
        start.addEventListener('click', () => {
            location.reload();
        });
        let won = document.querySelectorAll('.letter').length;  
        let guess = document.querySelectorAll('.show').length;
        let h2 = document.querySelector('h2');
        let btnText = document.querySelector('a');
        if (won === guess) {
            let listLetter = document.querySelectorAll('.letter'); 
            for (let i =0; i < listLetter.length; i++) {
                allLetters = listLetter[i];
                allLetters.style.width = '18px';
            }
            phrase.style.position = "relative";
            phrase.style.bottom = "200px";
            
            qwerty.style.display = "none";
            overlay.style.display = 'flex'
            overlay.className = 'win';
            h2.innerHTML ="You Won!!!"
            btnText.innerHTML = "Play Again"    
        } 
        
        if (missed > 4) {
            qwerty.style.display = "none";
            phrase.style.display = 'none';
            overlay.style.display = 'flex'
            overlay.className = 'lose';
            h2.innerHTML ="You Lose Dude, Try Again"
            btnText.innerHTML = "Try Again"
        }
    }
    CheckWin();
});




