//Finish loading the DOM before running the game
document.addEventListener("DOMContentLoaded", function () {
    const images = document.getElementById("images");
    const emailForm = document.getElementById("emailForm");
    const triesArea = document.getElementById("tries-area");
    let numberOfTries = 3;

    //Create array with photos that represent random answers
    const answers = [
        "assets/images/answer-1.PNG",
        "assets/images/answer-2.PNG",
        "assets/images/answer-3.PNG",
        "assets/images/answer-4.PNG",
        "assets/images/answer-5.PNG",
        "assets/images/answer-6.PNG",
        "assets/images/answer-7.PNG",
        "assets/images/answer-8.PNG",
        "assets/images/answer-9.PNG",
        "assets/images/answer-10.PNG",
        "assets/images/answer-11.PNG",
        "assets/images/answer-12.PNG",
        "assets/images/answer-13.PNG",
        "assets/images/answer-14.PNG"
    ];

    images.addEventListener("click", function () {
        if (numberOfTries > 0) {
            numberOfTries--;

            // Add class for animation
            images.classList.add("shake");

            // Finish animation after 500ms
            setTimeout(function () {
                images.classList.remove("shake");

                // Randome answer
                const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                images.src = randomAnswer;
            }, 500);
            decreaseTries();
        } else {
            alert("You've used up all your tries! Give me your soul (or just your email) to get unlimited access.");
            showEmailForm();
        }

    });
//Remove email form, tries area and increase number of tries after submitting the form
    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (triesArea) {
            triesArea.remove();
            emailForm.remove();
            numberOfTries = 1000;
        }
    });
});


//Decrease amount of tries by 1
function decreaseTries() {
    let defaultTries = parseInt(document.getElementById("tries").innerText);
    document.getElementById("tries").innerText = --defaultTries;
}
// Show the email form
function showEmailForm() {
    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.classList.remove("hidden");
    }
}