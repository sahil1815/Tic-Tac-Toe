const box = document.querySelectorAll(".box");
const reset = document.querySelector("#reset-button");
const newGame = document.querySelector("#new-game");
const msg = document.querySelector(".message");
const showHide = document.querySelector(".msgs");

let winConfig = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let personO = true;
let count = 0;
box.forEach(element => {
    element.addEventListener("click", () => {

        if (personO) {
            element.classList.add("o");
            element.textContent = "O";
            personO = false;
        }
        else {
            element.classList.add("x");
            element.textContent = "X";
            personO = true;
        }
        element.disabled = true;
        count++;
        console.log(count);

        checkWinner();
    })
});
const checkWinner = () => {

    for (let config of winConfig) {
        let pos1 = box[config[0]].textContent;
        let pos2 = box[config[1]].textContent;
        let pos3 = box[config[2]].textContent;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showHide.classList.remove("hide");
                msg.textContent = `Congratulations! Winner is ${pos1}`;
                box.forEach(element => {
                    element.disabled = true;
                });
                return;
            }
        }
    }
    if (count == 9) {
        showHide.classList.remove("hide");
        msg.textContent = `The Game is Draw!`;
        return;
    }
}
const resetGame = () => {
    box.forEach(element => {
        element.textContent = "";
        element.classList.remove("o", "x");
        element.disabled = false;
    });

    showHide.classList.add("hide");
    personO = true;
    count = 0;
}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
