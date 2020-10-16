import races from './races.js';
import classes from './classes.js';
import Enemy from './Enemy.js';

const lvlInput = document.getElementById('lvl');
const generateButton = document.getElementById('bt');
const charDiv = document.getElementById('char');
const charDiv2 = document.getElementById('char2');

generateButton.addEventListener('click',() => {
    let lvl = lvlInput.value ? lvlInput.value : 1;
    let e = new Enemy(lvl);

    charDiv.innerHTML = e.getString()[0];
    charDiv2.innerHTML = e.getString()[1];
});
