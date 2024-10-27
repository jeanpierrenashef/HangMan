const word = "JAVASCRIPT";
let incorrect_count = 0;
const max_incorrect_guesses = 6;
var ans_section = document.getElementById("answer-section");
const human_body = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];

let disp_word = Array(word.length).fill("_ ");
ans_section.innerHTML = disp_word.join("");


var alphabet_letters = document.querySelectorAll(".letter");
alphabet_letters.forEach(each_letter => {
each_letter.addEventListener("click", () => {
    const letter = each_letter.textContent;

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                disp_word[i] = letter;
        }
        }
        ans_section.innerHTML = disp_word.join("");

        if (!disp_word.includes("_ ")) {
            alert("Congrats!");
            unclickable();}

    } else {
        if(incorrect_count < max_incorrect_guesses){
            document.getElementById("hang").innerHTML += `<img src='./assets/${human_body[incorrect_count ]}.svg' class='${human_body[incorrect_count ]}' />`;}
        incorrect_count++;
    
        if (incorrect_count >= max_incorrect_guesses) {
            alert("Game Over!");
            unclickable();
            }
        }
    
    }
)
}
)
function unclickable() {
    alphabet_letters.forEach(letter => {
        letter.style.pointerEvents = "none";
    });
    }



