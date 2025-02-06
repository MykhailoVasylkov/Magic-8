# Magic 8-Ball

## Overview
The Magic 8-Ball is a classic fortune-telling toy that provides answers to yes-or-no questions. This project is a digital version of the Magic 8-Ball, allowing users to click on a virtual 8-ball image to receive a randomized response. The project is built using HTML, CSS, and JavaScript, and it is deployed using GitHub Pages. The game includes a limited number of tries to interact with the 8-ball, after which the user is prompted to submit their email and name to continue receiving answers.

## Responsive Mockup

![Responsive Mockup](/assets/images/photos_for_readme/amiresponsive.png)

## Features

### Existing Features

## 1. **Interactive 8-Ball Image**
- Users can click on the Magic 8-Ball image to receive a randomized response.
- The 8-ball image shakes upon clicking to simulate the physical 8-ball experience.
- The image and its corresponding alt text change based on the randomly selected answer.

![Interactive 8-Ball Image](/assets/images/photos_for_readme/Magic-8-Ball.png)

## 2. **Limited Number of Tries**
- Users are given a limited number of attempts (initially 3) to ask questions and receive answers.
- The number of remaining tries is displayed on the screen and decreases with each click.
- Once the tries are exhausted, the user is prompted to submit their email and name to continue.

![Number of Tries](/assets/images/photos_for_readme/Numbers-of-tries.png)

## 3. **Email and Name Submission Form**
- After the user uses all their tries, an email and name submission form is displayed.

![Email Form](/assets/images/photos_for_readme/Email-form.png)

- Upon submitting the email and name, the user is granted additional tries, allowing them to continue using the Magic 8-Ball.
The form submission hides the email form and the tries counter area, adding the user's name before "Touch the ball to get an answer!".

![User name](/assets/images/photos_for_readme/User-name.png)

### Features Left to Implement
- **Improved Email Validation and Integration**: Enhance the email form with additional validation checks. Integrate the form with a backend service to store submitted emails for future engagement.
- **Personalized Responses**: Introduce the ability to customize responses based on user inputs or preferences.
- **Themes and Customization**: Allow users to choose from different themes for the Magic 8-Ball, such as different color schemes or styles..
- **Additional Language Support**: Add a language selection option in the user interface.

## Design  

The design choices for this project were made with usability and visual appeal in mind:  

- **Color Scheme:**  
  The background of the game area features a gradient transitioning from deep reds and purples to blues, creating a visually engaging and dynamic effect. The contrast between the dark background and the white text ensures readability. The logo text color (#5885ff) was chosen to stand out while maintaining harmony with the overall color scheme.  

- **Fonts:**  
  The selected fonts, *Bebas Neue* and *New Amsterdam*, were chosen for their readability and aesthetic appeal. *Bebas Neue* provides a modern, bold look suitable for headings, while *New Amsterdam* complements it with a more refined style for body text.  

- **Layout:**  
  - The **header** is centered and uses `transform: translateX(-50%)` to maintain alignment on different screen sizes.  
  - The **main game area** is designed with a responsive width and rounded borders, creating a smooth, friendly interface.  
  - The **footer** uses text shadows to maintain visibility while blending subtly with the overall design.  

- **Hover & Animation Effects:**  
  - The **logo and 8-ball images** include hover effects (`transform: scale(1.15)`) to enhance interactivity.  
  - A **shake animation** was implemented for the 8-ball using CSS keyframes, adding a playful effect to the game experience.  

- **Responsiveness:**  
  - Media queries adjust font sizes and layout elements for different screen sizes.  
  - On smaller screens, the game area expands to full width for better usability.  

These design choices collectively enhance the user experience by ensuring clarity, engagement, and ease of use.

## Testing
- I tested that this website works in different browsers: Firefox, Avast Browser, Chrome, and Chrome for mobile.
- I confirmed that this website is responsive, meets accessibility standards, and looks good on different screen sizes using the devtools toolbar.
- I confirmed that everything is readable and easy to understand.
- I confirmed that the sign-up form works well: it will not submit until the required field are filled, the email field accepts only email addresses, and the submit button works.

### Manual Testing

| Feature                   | Test Action                                       | Expected Outcome                                        | Result (✔/❌) | Fix (if needed)                          |
|---------------------------|---------------------------------------------------|---------------------------------------------------------|--------------|------------------------------------------|
| Image Click              | Click on the image                                | Image changes, counter decreases                        | ✔            | —                                        |
| Counter Functionality    | Click the image three times                       | Counter reaches 0                                       | ✔            | —                                        |
| Pop-up Form Trigger      | Click the image a fourth time                     | Pop-up form appears                                    | ✔            | —                                        |
| Email Input Validation   | Enter invalid email format                        | Error message appears                                  | ✔            | —                                        |
| Form Submission         | Enter valid name and email, then submit           | Form and counter disappear, username appears           | ✔            | —                                        |
| Name Persistence        | Refresh the page after form submission            | Name remains displayed on the page                     | ✔            | —                                        |
| Hover Effect (Image)    | Hover over the image                              | Image responds to mouse movement                       | ✔            | —                                        |
| Hover Effect (Logo)     | Hover over the logo                               | Logo responds to mouse movement                        | ✔            | —                                        |


### Bugs
- Broken Images on the Site:
The images on the site were not displaying due to incorrect image source paths. This issue was resolved by updating the image paths to their correct locations.
- User Name Not Displaying After Page Reload:
After reloading the page, the user's name was not appearing before "Touch the ball to get an answer!". The issue was that the script attempted to extract the content of the #name element after the page loaded and pass its value to #user-name, but at that time #name was empty. The solution was to store the content of #name in localStorage and then retrieve it to display in #user-name after the page reload.

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

The live link can be found here: [Magi 8-Ball](https://mykhailovasylkov.github.io/Magic-8/)

### Clone this repository
 To clone this repository, use the following command:
 - git clone https://github.com/MykhailoVasylkov/Magic-8.git

### Forking the Project
 To fork the repository and work on your own version:
 - Go to the [repository](https://github.com/MykhailoVasylkov/Magic-8/tree/caf864d3ec20f3600e28ac52a33d1ae1cd5493a7) on GitHub.
 - Click the Fork button in the upper right corner.
 - Choose "Create a new fork"


## Credits

### Content
- Favicon was created in https://favicon.io/
- Font Awesome kit was taken from Running Club Project.
- I used Chat-GPT to figure out how to add a shake effect to 8-Ball images when click on it.
- I used code snippet from Project #1 for hover effect.
- For figure out how to use DOMContentLoaded event I used:
https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
- How to use addEventListener() method I used Chat-GPT and:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


### Media
- Photo of 8-Ball was generated in Microsoft Designer.

