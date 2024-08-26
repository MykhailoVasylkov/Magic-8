# Magic 8-Ball

## Overview
The Magic 8-Ball is a classic fortune-telling toy that provides answers to yes-or-no questions. This project is a digital version of the Magic 8-Ball, allowing users to click on a virtual 8-ball image to receive a randomized response. The project is built using HTML, CSS, and JavaScript, and it is deployed using GitHub Pages. The game includes a limited number of tries to interact with the 8-ball, after which the user is prompted to submit their email to continue receiving answers.

## Responsive Mockup

![Responsive Mockup](/assets/images/photos_for_readme/amiresponsive.png)

## Features

### Existing Features

## 1. Interactive 8-Ball Image
- Users can click on the Magic 8-Ball image to receive a randomized response.
- The 8-ball image shakes upon clicking to simulate the physical 8-ball experience.
- The image and its corresponding alt text change based on the randomly selected answer.

![Interactive 8-Ball Image](/assets/images/photos_for_readme/Magic-8-Ball.png)

## 2. Limited Number of Tries
- Users are given a limited number of attempts (initially 3) to ask questions and receive answers.
- The number of remaining tries is displayed on the screen and decreases with each click.
- Once the tries are exhausted, the user is prompted to submit their email to continue.

![Number of Tries](/assets/images/photos_for_readme/Numbers-of-tries.png)

## 3. Email Submission Form
- After the user uses all their tries, an email submission form is displayed.
- Upon submitting the email, the user is granted additional tries, allowing them to continue using the Magic 8-Ball.
- The form submission hides the email form and the tries counter area.

![Email Form](/assets/images/photos_for_readme/Email-form.png)


### Features Left to Implement
- **Improved Email Validation and Integration**: Enhance the email form with additional validation checks. Integrate the form with a backend service to store submitted emails for future engagement.
- **Personalized Responses**: Introduce the ability to customize responses based on user inputs or preferences.
- **Themes and Customization**: Allow users to choose from different themes for the Magic 8-Ball, such as different color schemes or styles..
- **Additional Language Support**: Add a language selection option in the user interface.

## Testing
- I tested that this website works in different browsers: Firefox, Avast Browser, Chrome, and Chrome for mobile.
- I confirmed that this website is responsive, meets accessibility standards, and looks good on different screen sizes using the devtools toolbar.
- I confirmed that everything is readable and easy to understand.
- I confirmed that the sign-up form works well: it will not submit until the required field are filled, the email field accepts only email addresses, and the submit button works.

### Bugs
- Bugs are not found.

### Validator Testing
- **HTML**: No errors were returned when passing through the official W3C validator.
- **CSS**: No errors were found when passing through the official (Jigsaw) validator.
- **JS**: No errors were found when passing through JSHint.
- **Accessibility**: I confirmed that the colors and fonts chosen are easy to read and accessible by running it through Lighthouse in devtools.
![Lighthouse](/assets/images/photos_for_readme/lighthouse.png)

### Unfixed Bugs
No unfixed bugs

## Deployment
The site was deployed to GitHub Pages. The steps to deploy are as follows:
1. In the GitHub repository, navigate to the Settings tab.
2. On the left side, choose Pages.
3. From the Branch section select the `main` branch and press Save.
4. Once the `main` branch has been selected, the page will automatically refresh with a detailed ribbon display to indicate the successful deployment.

The live link can be found here: [Magi 8-Ball](https://mykhailovasylkov.github.io/Magic-8/index.html)

## Credits

### Content
- Favicon was created in https://favicon.io/
- Font Awesome kit was taken from Running Club Project.
- I used Chat-GPT to figure out how to add a shake effect to 8-Ball images when click on it.
- I used Chat-GPT to figure out how to change size when hovering over links without changing the position of neighbors.
- For overwriting the default summary sign, I used materials from these articles:
1. https://www.w3schools.com/tags/tag_summary.asp
2. https://www.sitepoint.com/style-html-details-element/
- To figure out how to make the grid menu on the Gallery page responsive, I used  https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
- For the dropdown menu, I used a code snippet from the Running Club Project.

### Media
- Photo gallery.webp was taken from https://unsplash.com/photos/silhouette-of-people-in-cave-c7xBEFBJhkg

