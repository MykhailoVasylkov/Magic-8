//Finish loading the DOM before running the game
document.addEventListener("DOMContentLoaded", function () {
    const images = document.getElementById("images");
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
        // Add class for animation
        images.classList.add("shake");

        // Finish animation after 500ms
        setTimeout(function () {
            images.classList.remove("shake");

            // Randome answer
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            images.src = randomAnswer;
        }, 500);
    });
});