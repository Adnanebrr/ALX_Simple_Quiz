
function checkAnswer() {
    const correctAnswer = "4";
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    const userAnswer = selectedChoice ? selectedChoice.value : null;

    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}
const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', checkAnswer);
