//Finish loading the DOM before running the game
//Used https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {
    const images = document.getElementById("images");
    const emailForm = document.getElementById("emailForm");
    const triesArea = document.getElementById("tries-area");
    let numberOfTries = 3;

    //Create array with photos that represent random answers
    const answers = [{
            src: "assets/images/question-1.webp",
            alt: "It is certain"
        },
        {
            src: "assets/images/question-2.webp",
            alt: "Yes, definitely"
        },
        {
            src: "assets/images/question-3.webp",
            alt: "Outlook good"
        },
        {
            src: "assets/images/question-4.webp",
            alt: "Most likely"
        },
        {
            src: "assets/images/question-5.webp",
            alt: "You may rely on it"
        },
        {
            src: "assets/images/question-6.webp",
            alt: "My reply is no"
        },
        {
            src: "assets/images/question-7.webp",
            alt: "Don't count on it"
        },
        {
            src: "assets/images/question-8.webp",
            alt: "Outlook not so good"
        },
        {
            src: "assets/images/question-9.webp",
            alt: "Very doubtful"
        },
        {
            src: "assets/images/question-10.webp",
            alt: "Reply hazy, try again"
        },
        {
            src: "assets/images/question-11.webp",
            alt: "Ask again later"
        },
        {
            src: "assets/images/question-12.webp",
            alt: "Better not tell you now"
        },
        {
            src: "assets/images/question-13.webp",
            alt: "Cannot predict now"
        },
        {
            src: "assets/images/question-14.webp",
            alt: "Focus and ask again"
        },
    ];

    // Check if the user's email is stored in localStorage to prevent the email from being requested again after page reload.
    const storedEmail = localStorage.getItem("userEmail");
    
    if (storedEmail) {
        // If email is found, remove the tries area and the email form from the page 
        triesArea.remove();
        emailForm.remove();
        // Set the number of tries to 1000
        numberOfTries = 1000;
    }

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

        const emailInput = document.getElementById("email");
        const userEmail = emailInput.value;

        // Save email в localStorage
        localStorage.setItem("userEmail", userEmail);

        if (triesArea) {
            triesArea.remove();
            emailForm.remove();
            numberOfTries = 1000;
        }
    });
});

//Decrease amount of tries by 1
function decreaseTries() {
    // If the #tries element is not found on the page, stop the function
    const triesElement = document.getElementById("tries");
    if (!triesElement) {
        return; // Exit the function without making any changes
    }
    let defaultTries = parseInt(triesElement.innerText);
    triesElement.innerText = --defaultTries;
}
// Show the email form
function showEmailForm() {
    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.classList.remove("hidden");
    }
}