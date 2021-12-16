const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const begin = document.querySelector('#begin');
const image = document.querySelector('#img');
const keyboard = document.querySelector('.keyboard');
const wordInput = document.querySelector('#wordInput');
const wordDisplay = document.querySelector('.wordDisplay');
let answer = [];
let attempts = 0;
let maxAttempts = 5;

alphabet.forEach((letter) => {
    let key = document.createElement('button');
    key.innerText = letter;
    key.className = 'key';
    keyboard.appendChild(key);
    if (wordDisplay.innerText != '') {
        key.remove();
    };
    key.addEventListener('click', () => {
        if (answer.includes(letter)) {
            const wordArray = wordDisplay.innerText.split('');
            answer.forEach((character, index) => {
                if (character === letter) {
                    wordArray[index] = letter;
                };
            });
            wordDisplay.innerText = wordArray.join('')
            if (wordDisplay.innerText === answer.join('')) {
                setTimeout(() => {
                    alert('You win!');
                }, 200);
            };
        } else {
            if (wordDisplay.innerText !== '') {
                attempts += 1;
            };
            if (attempts >= maxAttempts) {
                setTimeout(() => {
                    alert('You lose!');
                }, 200);
            }
        }
        if (wordDisplay.innerText != '') {
            key.remove();
        };
    });
});

begin.addEventListener('click', () => {
    const word = wordInput.value.toUpperCase();
    const wordArray = word.split('');
    answer = word.split('');
    if (word === '') {
        alert('You must enter a word!');
    } else {
        wordInput.style.display = 'none';
        begin.style.display = 'none';
        for (let i = 0; i < wordArray.length; i++) {
            wordArray[i] = '_';
        };
        const wordDisplay = document.querySelector('.wordDisplay');
        wordDisplay.innerText = wordArray.join('');
    };
});