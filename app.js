console.clear();

// The game variables 
const inputEl = document.querySelector("#input-el")
const checkBtn = document.querySelector("#check-btn")



// the modal variables 
// modal, the answer, x sign
const modal = document.querySelector("#myModal")
const theAnswer = document.querySelector(".theAnswer")
const closeBtn = document.querySelector(".close")


// Answers: "Correct, good work" , "Incorrect, try again"
let answerOptions = ["Correct, good work", "Incorrect, try again"]

// check btn function 
checkBtn.addEventListener("click", function() {
    modal.style.display = "block"
    let userInput = parseInt(inputEl.value) // number
    if(userInput === 2) {
        modal.style.background = "rgb(46, 204, 113)"
        theAnswer.textContent = answerOptions[0]
    } else {
        modal.style.background = "#e74c3c"
        theAnswer.textContent = answerOptions[1]
    }
})

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})