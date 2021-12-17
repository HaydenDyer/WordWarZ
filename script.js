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
                image.setAttribute('src', './gamelost.png')
            }
        }
        if (attempts === 1) {
            image.setAttribute('src', './door4lives.png')
        }
        if (attempts === 2) {
        image.setAttribute('src', './door3lives.png')
        }
        if (attempts === 3) {
        image.setAttribute('src', './door2lives.png')
        }
        if (attempts === 4) {
        image.setAttribute('src', './door1life.png')
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