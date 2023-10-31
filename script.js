// start the game
let playBox = document.querySelector(".play_box");
let playBtn = document.querySelector(".pla_btn");
// player one
let one = document.querySelector(".player_one");
let one_input = document.querySelector(".one_input");
let one_btn = document.querySelector(".one_num");
let one_error = document.querySelector(".one_error");
// player two
let two = document.querySelector(".player_two");
let two_input = document.querySelector(".two_input");
let two_btn = document.querySelector(".two_num");
let two_error = document.querySelector(".two_error");
// result_box
let result = document.querySelector(".result_box");
let backBtn = document.querySelector(".bac_btn");
let oneResult = document.querySelector(".one_result");
let twoResult = document.querySelector(".two_result");
let resultText = document.querySelector(".result");


// play The game
playBtn.addEventListener("click", function () {
    playBox.classList.add("hidden");
    one.classList.remove("hidden");
});

// player one input
one_btn.addEventListener("click", () => {
    let player_one = 0;
    let input = one_input.value;
    let oneErrorMessage;
    if (input === "") {
        oneErrorMessage = "Input can`t be null";
        one_error.innerHTML = oneErrorMessage;
    } else if (isNaN(input) || parseInt(input) < 0 || parseInt(input) > 9) {
        oneErrorMessage = "Number shoule be between 0 - 9";
        one_error.innerHTML = oneErrorMessage;
    } else {
        player_one = parseInt(input);
        console.log(player_one);
        one_input.value = "";
        one.classList.add("hidden");
        two.classList.remove("hidden");
    }
    one_value(player_one);
})

// player two input
two_btn.addEventListener("click", () => {
    let player_two = 0;
    let input = two_input.value;
    let twoErrorMessage;
    if (input === "") {
        twoErrorMessage = "Input can`t be null";
        two_error.innerHTML = twoErrorMessage;
    } else if (isNaN(input) || parseInt(input) < 0 || parseInt(input) > 9) {
        twoErrorMessage = "Number shoule be between 0 - 9";
        two_error.innerHTML = twoErrorMessage;
    } else {
        player_two = parseInt(input);
        console.log(player_two);
        two_input.value = "";
        two.classList.add("hidden");
        result.classList.remove("hidden");
        backBtn.classList.remove("hidden");
    }

    two_value(player_two);

})
// result time 
let one_value = (e) => {
    oneResult.innerHTML = e;

}


let two_value = (k) => {
    twoResult.innerHTML = k;
    if (parseInt(oneResult.innerHTML) == parseInt(twoResult.innerHTML)) {
        resultText.innerHTML = "Player 2 win the game";
    } else {
        resultText.innerHTML = "Player 1 win the game";
    }
}

backBtn.addEventListener("click", function () {
    result.classList.add("hidden");
    backBtn.classList.add("hidden");
    playBox.classList.remove("hidden");
})