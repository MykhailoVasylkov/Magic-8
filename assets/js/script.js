//Finish loading the DOM before running the game
//Used https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {
    const images = document.getElementById("images");
    const emailForm = document.getElementById("emailForm");
    const triesArea = document.getElementById("tries-area");
    let numberOfTries = 3;

    //Create array with photos that represent random answers
    const answers = [{
            src: "assets/images/answer-1.webp",
            alt: "It is certain"
        },
        {
            src: "assets/images/answer-2.webp",
            alt: "Yes, definitely"
        },
        {
            src: "assets/images/answer-3.webp",
            alt: "Outlook good"
        },
        {
            src: "assets/images/answer-4.webp",
            alt: "Most likely"
        },
        {
            src: "assets/images/answer-5.webp",
            alt: "You may rely on it"
        },
        {
            src: "assets/images/answer-6.webp",
            alt: "My reply is no"
        },
        {
            src: "assets/images/answer-7.webp",
            alt: "Don't count on it"
        },
        {
            src: "assets/images/answer-8.webp",
            alt: "Outlook not so good"
        },
        {
            src: "assets/images/answer-9.webp",
            alt: "Very doubtful"
        },
        {
            src: "assets/images/answer-10.webp",
            alt: "Reply hazy, try again"
        },
        {
            src: "assets/images/answer-11.webp",
            alt: "Ask again later"
        },
        {
            src: "assets/images/answer-12.webp",
            alt: "Better not tell you now"
        },
        {
            src: "assets/images/answer-13.webp",
            alt: "Cannot predict now"
        },
        {
            src: "assets/images/answer-14.webp",
            alt: "Focus and ask again"
        },
    ];
//Used https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//Used Chat-GPT
    images.addEventListener("click", function () {
        if (numberOfTries > 0) {
            numberOfTries--;

            // Add class for animation
            //Used Chat-GPT to figure out how to add shake affect
            images.classList.add("shake");

            // Finish animation after 500ms
            setTimeout(function () {
                images.classList.remove("shake");

                // Randome answer
                const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                images.src = randomAnswer.src;
                images.alt = randomAnswer.alt;
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