
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let start = document.querySelector('.btn__reset');
let missed = 0;
let overlay = document.getElementById('overlay');

//hide start screen overlay

start.addEventListener('click', () => {
    overlay.style.display = 'none';

});

// Phrases to call
const phraseArray = [
    'kneehigh to a grasshopper',
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
    if (e.target.tagName === "BUTTON" & e.target.className !== "chosen") {
        e.target.className = 'chosen';
        checkLetter();
    }

});

