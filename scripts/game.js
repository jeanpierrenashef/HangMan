const word = "JAVASCRIPT";
let incorrect_count = 0;
const max_incorrect_guesses = 6;
var ans_section = document.getElementById("answer-section");
const human_body = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];

let disp_word = Array(word.length).fill("_ ");
ans_section.innerHTML = disp_word.join("");


var alphabet_letters = document.querySelectorAll(".letter");


    
function unclickable() {
    alphabet_letters.forEach(letter => {
        letter.style.pointerEvents = "none";
    });
    }

